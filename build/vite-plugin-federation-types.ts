/*
 * @Description: 自动更新声明文件插件-通过对比服务器上zip文件和本地记录的最近修改时间来确定是否要更新声明文件
 * @Author: Edward
 * @Date: 2024-02-29 13:17:43
 * @LastEditors: Edward
 * @LastEditTime: 2024-03-04 11:21:25
 */
import * as fs from "fs";
import * as path from "path";
import axios from "axios";

import compressing from "compressing";

import { ResolvedConfig, Plugin } from "vite";
interface RemoteZip {
  remoteName: string;
  remoteUrl: string;
  isZip?: boolean;
}
interface FederationTypesPluginOptions {
  targetDir: string;
  remoteZips: RemoteZip[];
}

export function FederationTypesPlugin(
  options: FederationTypesPluginOptions
): Plugin {
  const baseDir = process.cwd();
  const downloadDir = path.join(baseDir, ".types-download");
  const flagDir = path.join(downloadDir, ".lastModifiedTime");
  fs.mkdirSync(flagDir, { recursive: true });
  return {
    name: "vite-plugin-federation-types",
    async configResolved(config: ResolvedConfig) {
      // 检查是否传入了远程 d.ts 文件的目标目录
      if (!options || !options.targetDir || options.remoteZips.length === 0) {
        console.error("请提供目标目录！");
        return;
      }

      // 设置是否为开发模式，yarn serve时执行，yarn build时不执行
      const isDevMode = config.command === "serve";
      if (config.command === "build") return;

      for (const tarZip of options.remoteZips) {
        const flagPath = path.join(flagDir, `${tarZip.remoteName}.txt`);
        const lastModifiedTime = await getLastModifiedTime(flagPath);
        const needsUpdate = await shouldUpdateRemoteFile(
          tarZip.remoteUrl,
          lastModifiedTime
        );

        if (config.command === "serve" && needsUpdate) {
          await downloadAndExtractRemoteZip(
            tarZip.remoteName,
            tarZip.remoteUrl
          );
          await markLastModifiedTime(flagPath);
        }
      }
    },
    transform(code: any, id: any) {},
  };

  /**
   * 判断是否需要更新声明文件(通过对比服务器上zip文件和本地记录的最近修改时间)
   * @param remoteUrl 服务器上zip文件的地址
   * @param lastModifiedTime 本地记录的最近修改时间
   * @returns Boolean
   */
  async function shouldUpdateRemoteFile(
    remoteUrl: string,
    lastModifiedTime: number | null
  ) {
    if (!lastModifiedTime) {
      return true; // If lastModifiedTime is not available, it means we need to download the file
    }

    const remoteLastModifiedTime = await getRemoteFileLastModifiedTime(
      remoteUrl
    );
    return remoteLastModifiedTime && remoteLastModifiedTime > lastModifiedTime;
  }

  /**
   * 解压zip到指定目录(@mf-types)并删除zip文件
   * @param remoteName zip包名称，例：EFX、ERX
   * @param zipFilePath zip包的文件路径
   */
  async function extractAndDeleteZip(remoteName: string, zipFilePath: string) {
    const targetDir = path.join(baseDir, "@mf-types");

    try {
      await compressing.zip.uncompress(zipFilePath, targetDir);
      console.log(`${remoteName} 的文件解压成功！`);
      fs.unlinkSync(zipFilePath);
    } catch (err) {
      console.error(`${remoteName} 的文件解压失败：`, err);
    }
  }

  /**
   * 从服务器下载zip文件并调用解压方法
   * @param remoteName zip包名称，例：EFX、ERX
   * @param remoteZipUrl 服务器上zip文件的地址
   */
  async function downloadAndExtractRemoteZip(
    remoteName: string,
    remoteZipUrl: string
  ) {
    const zipFileName = `${remoteName}.zip`;
    const zipFilePath = path.join(downloadDir, zipFileName);

    // 下载远程 zip 文件

    return new Promise<void>((resolve, reject) => {
      axios
        .get(remoteZipUrl, { responseType: "stream" })
        .then((response) => {
          const { data, headers } = response;
          const zipFileStream = data;
          const writeStream = fs.createWriteStream(zipFilePath);
          zipFileStream.pipe(writeStream);

          writeStream.on("finish", () => {
            extractAndDeleteZip(remoteName, zipFilePath)
              .then(resolve)
              .catch(reject);
          });

          writeStream.on("error", reject);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * 获取服务器上zip文件的最近修改时间
   * @param remoteUrl 服务器上zip文件的地址
   * @returns 最近修改时间 Date
   */
  async function getRemoteFileLastModifiedTime(
    remoteUrl: string
  ): Promise<number | null> {
    try {
      const response = await axios.head(remoteUrl);
      const lastModifiedHeader = response.headers["last-modified"];
      if (lastModifiedHeader) {
        return new Date(lastModifiedHeader).getTime();
      }
    } catch (error) {
      console.error("获取远程文件最后修改时间时出错：", error);
    }
    return null;
  }

  /**
   * 更新本地记录的最近修改时间
   * @param flagPath 本地记录的文件路径
   */
  async function markLastModifiedTime(flagPath: string) {
    const currentTime = new Date().getTime();
    fs.writeFileSync(flagPath, String(currentTime));
  }

  /**
   * 获取本地记录的最近修改时间
   * @param flagPath 本地记录的文件路径
   * @returns 最近修改时间 Date
   */
  async function getLastModifiedTime(flagPath: string): Promise<number | null> {
    if (fs.existsSync(flagPath)) {
      const lastModifiedTimeString = fs.readFileSync(flagPath, "utf-8");
      return parseInt(lastModifiedTimeString, 10) || null;
    }
    return null;
  }
}
