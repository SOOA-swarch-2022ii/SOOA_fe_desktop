import axios from "axios";

class RegAndAuthService {

    login(username, password, func) {
        return axios
            .post('/auth', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(response => func(response.data))
            .catch(error => console.log(error));
    }

    logout() {
        localStorage.clear();
    }

    getUser(func) {
        let body = {
            query: `
          query {
            findCurrentUser {
              name
              role
              phone
              address
              nationality
              sex
              dateOfBirth
              identificationNumber
              email
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
                func((response.data).data.findCurrentUser);
            })
            .catch(error => console.log(error));
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

    getUserByUsername(username,func) {
        let body = {
            query: `
          query {
            findOneByUsername(username: "${username}") {
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
                console.log(response.data);
                func((response.data).data.findOneByUsername);
            })
            .catch(error => console.log(error));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new RegAndAuthService();
