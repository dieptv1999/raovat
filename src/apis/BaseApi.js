import React from "react";
import _, { isEmpty } from 'lodash';
import client from "./Client";

export default class BaseApi {
  version = "v1/nft-marketplace";
  baseUrl = '';

  prefix() {
    return '';
  }

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

  async post(url, data = {}, params = {}, showNoti = true) {
    try {
      const response = await client(this.baseUrl).post(`${this.version}/${url}`, data, { params });
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
    if (!isEmpty(err.response) && (err.response.status === 401 || err.response.status === 405)) { // Unauthorized (session timeout)
      // utils.logout()
      throw err;
    }
  }
}
