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

  getListSellViaUser(params) {
    const url = `${schema}getListSellViaUser`;
    return this.post(url, params);
  }

  addFollower(params) {
    const url = `${schema}addFollower`;
    return this.post(url, params);
  }

  getListMyFollower(params) {
    const url = `${schema}getListMyFollower`;
    return this.post(url, params);
  }

  checkFollower(params) {
    const url = `${schema}checkFollower`;
    return this.post(url, params);
  }

  getListMyFollow(params) {
    const url = `${schema}getListMyFollow`;
    return this.post(url, params);
  }

  getUserSell(params) {
    const url = `${schema}getUserSell`;
    return this.post(url, params);
  }
}
