import React from "react";
import _, { isEmpty } from 'lodash';
import client from "./Client";
import {API_VERSION, BASE_URL} from "../utils/constant";
import utils from "../utils";

export default class BaseApi {
  version = API_VERSION;
  baseUrl = BASE_URL;

  async get(url, params = {}, showNoti = true) {
    try {
      const response = await client(this.baseUrl).get(`${this.version}/${url}`, { params });
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async getWithTimeout(url, params = {}, timeout, showNoti = true) {
    try {
      const response = await client(this.baseUrl).get(`${this.version}/${url}`, { params, timeout });
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put(url, data = {}, showNoti = true) {
    try {
      const response = await client(this.baseUrl).put(`${this.version}/${url}`, data);
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url, data = {}, params = {}, showNoti = true, contentType) {
    try {
      const response = await client(this.baseUrl, contentType).post(`${this.version}/${url}`, data, {...params});
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url, params = {}, showNoti = true) {
    try {
      const response = await client(this.baseUrl).delete(`${this.version}/${url}`, params);
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }


  async _responseHandler(response, showNoti) {
    const { data } = response;
    let errorCode = _.get(data, 'error.code', 200);

    return data;
  }

  _errorHandler(err) {
    console.log(err)
    if (err.response.status === 401) { // Unauthorized (session timeout)
      utils.logout()
      console.log('401')
      throw err;
    }
  }
}
