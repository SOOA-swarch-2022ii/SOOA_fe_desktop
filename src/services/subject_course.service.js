import axios from "axios";

class SubjectCourseService {

    getSubjectByCode(code,func) {
        let body = {
            query: `
          query {
            getSubjectByCode(code: "${code}") {
              _id  
              academic_level
              basic_academic_unit
              faculty
              level
              vigency
              campus
              name
              code
              content
              credits
              department
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
                func((response.data).data.getSubjectByCode);
            })
            .catch(error => console.log(error));
    }

    getSubjectByName(name,func) {
        let body = {
            query: `
          query {
            getSubjectByName(name: "${name}") {
              _id  
              academic_level
              basic_academic_unit
              faculty
              level
              vigency
              campus
              name
              code
              content
              credits
              department
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
                func((response.data).data.getSubjectByName);
            })
            .catch(error => console.log(error));
    }
}

export default new SubjectCourseService();
