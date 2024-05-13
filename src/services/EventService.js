import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eavaleva/real-world-vue',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getEvents() {
        return apiClient.get('/events');
    },
    getEvent(id) {
        return apiClient.get('/events/' + id);
    },
    postEvent(event) {
        return apiClient.post('/events', event);
    },
    deleteEvent(id) {
        return apiClient.delete('/events/' + id);
    }
}
// Path: src/views/EventListView.vue
// Compare this snippet from src/views/EventListView.vue:
