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

  getListSellMore(params) {
    const url = `${schema}getListSellMore`;
    return this.post(url, params);
  }

  getListSellViaCollectionMore(params) {
    const url = `${schema}getListSellViaCollectionMore`;
    return this.post(url, params);
  }

  subscriber(params) {
    const url = `${schema}subscriber`;
    return this.post(url, params);
  }

  addFollower(params) {
    const url = `${schema}addFollower`;
    return this.post(url, params);
  }

  login(params) {
    const url = `${schema}loginAPI`;
    return this.post(url, params);
  }

  submitSell(params, config = {}) {
    const url = `${schema}submitSell`;
    return this.post(url, params, config, true, 'multipart/form-data');
  }

  getDetailSell(params) {
    const url = `${schema}getDetailSell`;
    return this.post(url, params);
  }

  getListNews(params) {
    const url = `${schema}getListNews`;
    return this.post(url, params);
  }

  getListAds(params) {
    const url = `${schema}getListAds`;
    return this.post(url, params);
  }

  getListFeed(params) {
    const url = `${schema}getListFeed`;
    return this.post(url, params);
  }

  getListSellMarketMore(params) {
    const url = `${schema}getListSellMarketMore`;
    return this.post(url, params);
  }
}
