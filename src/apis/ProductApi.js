import BaseRequest from './BaseApi';

const schema = 'product';
/**
 * key base on host:port
 */
export default class ProductApi extends BaseApi {
  /**
   * @returns {Promise<BaseRequest._responseHandler.props.data|undefined>}
   */
  fetchAllProduct(params) {
    const url = `${schema}/all`;
    return this.get(url, params);
  }
}
