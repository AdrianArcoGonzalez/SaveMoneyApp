const environments = {
  register: process.env.REACT_APP_API_URL + "user/register",
  login: process.env.REACT_APP_API_URL + "user/login",
  delete: process.env.REACT_APP_API_URL + "movement/delete",
  update: process.env.REACT_APP_API_URL + "movement/update",
};

export default environments;
