/*
 * @Description:
 * @Author: Edward
 * @Date: 2024-01-03 09:54:05
 * @LastEditors: Edward
 * @LastEditTime: 2024-05-15 10:23:58
 */
declare module "EIX/ei" {
  export {
    EIManager,
    EP,
    EP_NAME,
    MASTER_EP_NAME,
    PLAT_TYPE,
    __IDField__,
    EI,
    EITools,
    IUserInfo,
    IEnvironment,
    EIOptions,
    ValueType,
    JsonValueType,
    ILoadingOptions,
    IServiceTransformer,
    DataType,
    IAxiosInitConfig,
    base64Decode,
    base64Encode,
    buildEIInfo,
    getCurrentEnvironment,
    getCurrentUser,
    getHtmlTagContent,
    getRefreshToken,
    getRememberMe,
    getToken,
    init,
    getConfig,
    isHtmlString,
    isJsonString,
    isPlatJ,
    loading,
    removeCurrentEnvironment,
    removeCurrentUser,
    removeRefreshToken,
    removeRememberMe,
    removeToken,
    setBaseURLHandler,
    setContext,
    setCurrentEnvironment,
    setCurrentUser,
    setExpiredHandler,
    setRefreshToken,
    setRememberMe,
    setToken,
    toIsoString,
    setPlatLocalStorage,
    getPlatLocalStorage,
    removePlatLocalStorage
  } from '#/@mf-types/EIX/types/index';
}
