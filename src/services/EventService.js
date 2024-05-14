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
    // Modify the EventService API call to take perPage and page as arguments
    getEvents(perPage, page) {
        return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
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
// Compare this snippet from src/views/EventList.vue:
