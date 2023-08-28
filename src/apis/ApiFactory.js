import ProductApi from "./ProductApi";
import UserApi from "./UserApi";
const requestMap = {
  ProductApi,
  UserApi,
};

const instances = {};

export default class ApiFactory {
  static getRequest(classname) {
    const RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error(`Invalid request class name: ${classname}`);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
      requestInstance = new RequestClass();
      instances[classname] = requestInstance;
    }
    return requestInstance;
  }
}
