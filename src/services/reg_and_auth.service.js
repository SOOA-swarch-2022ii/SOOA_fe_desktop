import axios from "axios";

class RegAndAuthService {

    login(username, password,func) {

        console.log("login function username: " + username + " password: " + password);
        let body = {
            query: `
            mutation{
                login(
                    loginForm:{
                        username:"${username}"
                        password:"${password}"
                    }){
                        user
                        token
                        expires
                }
            }
        `,
            variables: {}
        }
        let options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios
            .post('/graphql',
                body,
                options
            ).then(response => {
                console.log("aqui obtenemos el usuario");
                console.log(response.data);
                func((response.data).data.login);
            })
            .catch(error => console.log(error));
    }

    logout() {
        localStorage.clear();
    }

    getUser(username,func) {
        let body = {
            query: `
            query{
                getUser(username: "${username}"){
                    id
                    username
                    birthdate
                    names
                    last_names
                    role
                    email
                    phone
                }
            }
        `,
            variables: {}
        }
        let options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios
            .post('/graphql',
                body,
                options
            ).then(response => {
                console.log("aqui obtenemos el usuario");
                console.log(response.data);
                func((response.data).data.getUser);
            })
            .catch(error => console.log(error));
    }

}

export default new RegAndAuthService();
