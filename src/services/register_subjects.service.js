import axios from "axios";

class RegisterSubjectsService {

    registerStudentCourse(student_id, course_id,func) {
        let body = {
            mutation: `
          mutation {
            registerStudentCourse(recordStudentCourse:{
                   student_id: "${student_id}", course_id:"${course_id}"}) {
                _id
                subject
                academic_semester
                schedule {
                    day
                    start_h
                    end_h
                    location
                }
                start_date   
                end_date
                places
                group_number
                professors
                students_record {
                    student
                    grades
              }
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
                func((response.data).data.registerStudentCourse);
            })
            .catch(error => console.log(error));
    }

    unregisterStudentCourse(student_id, course_id,func) {
        let body = {
            mutation: `
          mutation {
            unregisterStudentCourse(student_id: "${student_id}", course_id:"${course_id}") {
                _id
                subject
                academic_semester
                schedule {
                    day
                    start_h
                    end_h
                    location
                }
                start_date   
                end_date
                places
                group_number
                professors
                students_record {
                    student
                    grades
              }
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
                func((response.data).data.registerStudentCourse);
            })
            .catch(error => console.log(error));
    }

    getStudentCourses(student_id,func) {
        let body = {
            query: `
          query {
          findCoursesByStudent(student_id: "${student_id}") {
            course {
                _id
                subject
                academic_semester
                schedule {
                    day
                    start_h
                    end_h
                    location
                }
                start_date   
                end_date
                places
                group_number
                professors
                students_record {
                    student
                    grades
                }
            }
            subject{
                _id
                name
                academic_level 
                basic_academic_unit
                faculty
                level 
                vigency
                campus 
                code 
                content
                credits 
                department
            }
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
                func((response.data).data.getStudentCourses);
            })
            .catch(error => console.log(error));
    }

    getCourseInfo(course_id,func) {
        let body = {
            query: `
          query {
            findOneCourse(course_id: "${course_id}") {
              _id
              subject
              academic_semester
              schedule {
                day
                start_h
                end_h
                location
              }
              start_date   
              end_date
              places
              group_number
              professors
              students_record {
                student
                grades
              }
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
                func((response.data).data.getCourseInfo);
            })
            .catch(error => console.log(error));
    }
}

export default new RegisterSubjectsService();