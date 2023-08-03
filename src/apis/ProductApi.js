import BaseApi from "./BaseApi";

const schema = '';
/**
 * key base on host:port
 */
export default class ProductApi extends BaseApi {
  /**
   * @returns {Promise<BaseApi._responseHandler.props.data|undefined>}
   */
  fetchAllProduct(params) {
    const url = `${schema}all`;
    return this.get(url, params);
  }

  clickBanner(params) {
    const url = `${schema}addClickAds`;
    return this.post(url, params);
  }
}
