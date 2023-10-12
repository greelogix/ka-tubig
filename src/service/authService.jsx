import axios from "axios";
import config from "../../config";

export const userLoginService = async (formData) => {
  return await axios.post(config.baseApiUrl + "/login", formData);
};
