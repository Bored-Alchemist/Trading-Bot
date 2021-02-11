import * as axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "http://food.breeur.in/api",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.response.use(
    (response) => response,
    (err) => {
      err.response.data.msg
        ? alert(err.response.data.msg)
        : alert("Something went wrong");
      //   console.log(err.response, "this is error");
    }
  );

  return instance;
};

export default fetchClient();
