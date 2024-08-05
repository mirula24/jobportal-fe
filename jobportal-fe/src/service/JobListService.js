import axios from 'axios';

const JobList_API_BASE_URL : "http://localhost:8080/api/jobs" ;
class JobListService {

    getJobs(){
        return axios.get(JobList_API_BASE_URL);

    }
}
export default new JobListService();