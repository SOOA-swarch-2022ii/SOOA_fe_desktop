import axios from "axios";

class AcademicRecordService {

    getAllAcademicRecords(func) {
        let body = {
            query: `
          query {
            findAllAcademicRecords {
              id
              subjects_pending
              subjects_record
              papa
              papi
              status
              faculty
              campus
              career
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
                func((response.data).data.findAllAcademicRecords);
            })
            .catch(error => console.log(error));
    }

    getAcademicRecord(student_id,func) {
        let body = {
            query: `
          query {
            findAcademicRecord(student_id: "${student_id}") {
              subjects_pending
              subjects_record
              papa
              papi
              status
              faculty
              campus
              career
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
                func((response.data).data.findAcademicRecord);
            })
            .catch(error => console.log(error));
    }
}

export default new AcademicRecordService();
