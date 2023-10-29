import axios from "axios";

const ENDPOINT_PATH = "http://localhost:3800/api/budget-management/sign-in";
const NewUser= "http://localhost:3800/api/budget-management/sign-up";

export default {
  register(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH, user)
      .then(response => {
        const token = response.data.token;
        const id= response.data.idUser;
        localStorage.setItem('token', token);
        localStorage.setItem('id',id);
        return response;
      })
      .catch(error => {
        console.error('Error en la solicitud POST:', error);
        throw error;
      });
  },
  createUser(name, email, password, country){
    const newUser = {name,email,password,country};
    return axios.post(NewUser,newUser)
    .then(newUserResponse =>{
      return newUserResponse
    })
    .catch(error =>{
      console.error("Error en la creacion de usuario", error);
      throw error;
    });
  }
};
