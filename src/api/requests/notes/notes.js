import {axiosConfig} from '../../axios.config';

class NotesRequests {
  getRecords() {
    return axiosConfig.get('notes/records')
  }
  getEvents(body) {
    return axiosConfig.post('notes/events',body)
  }
}

export default new NotesRequests();