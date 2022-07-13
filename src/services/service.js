import axios from "axios";

class Service {
  static fetchData = async (obj) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}`,
      {
        data: [obj],
      }
    );
    return data;
  };
}

export default Service;
