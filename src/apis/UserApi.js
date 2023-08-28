import BaseApi from "./BaseApi";

const schema = '';
/**
 * key base on host:port
 */
export default class UserApi extends BaseApi {
  /**
   * @returns {Promise<BaseApi._responseHandler.props.data|undefined>}
   */
  getListMySell(params) {
    const url = `${schema}getListMySell`;
    return this.post(url, params);
  }

  addFollow(params) {
    const url = `${schema}addFollow`;
    return this.post(url, params);
  }

  checkFollow(params) {
    const url = `${schema}checkFollow`;
    return this.post(url, params);
  }
}
