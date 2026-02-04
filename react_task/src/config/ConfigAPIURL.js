class ConfigAPIURL {
  // static baseUrl = "http://localhost:4000";
  static baseUrl = "https://fakestoreapi.com";

  static getProducts = this.baseUrl + "/products"; //get
  static getProductById = this.baseUrl + "/products/"; //get + id
}
export default ConfigAPIURL;
