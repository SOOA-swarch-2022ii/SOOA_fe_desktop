import axios from "axios";

class RegAndAuthService {

    login(username, password,func) {
        let body = {
            query: `
          mutation{
                login(
                    loginForm:{
                        username
                        password
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
                console.log(response.data);
                func((response.data).data.login);
            })
            .catch(error => console.log(error));
    }

    logout() {
        localStorage.clear();
    }

    getAllUsers(func) {
        let body = {
            query: `
          query {
            findAll {
              name
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
                func((response.data).data.findAll);
            })
            .catch(error => console.log(error));
    }

    findUser(username,func) {
        let body = {
            query: `
          query {
            getUser(username: "${username}") {
                id
                username
                birthdate
                names
                last_names
                role
                password
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
                console.log(response.data);
                func((response.data).data.getUser);
            })
            .catch(error => console.log(error));
    }

}

export default new RegAndAuthService();
