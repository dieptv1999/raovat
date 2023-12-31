import utils from "../utils";
import axios from "axios";
import qs from "qs";

export function getInstanceAxios(baseAPI, contentType = 'application/json') {
  const instance = axios.create({
    baseURL: baseAPI,
    paramsSerializer: (params) => {
      return qs.stringify(params);
    }
  })


  instance.interceptors.request.use(
    async function (config) {
      if (utils.getToken())
        config.headers = {
          Accept: contentType,
          "Content-Type": contentType,
          "api-token": utils.getToken(),
          'user-id': utils.getUserId(),
        }
      else {
        config.headers = {
          Accept: contentType,
          "Content-Type": contentType,
        }
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  // instance.interceptors.response.use(
  //     function (response) {
  //         try {
  //             if (response.status >= 200 && response.status < 300)
  //                 return response.data
  //             return Promise.reject(response.data)
  //         } catch (error) {
  //             return Promise.reject(error)
  //         }
  //     },
  //     async function (error) {
  //         if (error.response) {
  //             const { response } = error
  //             const data = response.data
  //             if (data.message && response.config.method !== "get") {
  //                 if (data.details && data.details.length > 0) {
  //                     notification.error({
  //                         message: data.details[0].msg,
  //                     })
  //                 } else {
  //                     notification.error({
  //                         message: data.message,
  //                     })
  //                 }
  //             }
  //         }
  //         return Promise.reject(error)
  //     }
  // )

  return instance
}

export default (url = '', contentType) => getInstanceAxios(url || utils.getBaseURL(), contentType)
