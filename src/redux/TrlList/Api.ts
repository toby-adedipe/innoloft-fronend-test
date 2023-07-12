import axios from "axios"

const getTrlApi = async () => {
  return await axios.get('https://api-test.innoloft.com/trl/');
}


export {
  getTrlApi,
}