import axios from "axios"

const getConfigurationApi = async (id: string) => {
  return await axios.get(`https://api-test.innoloft.com/configuration/${id}`);
}


export {
  getConfigurationApi,
}