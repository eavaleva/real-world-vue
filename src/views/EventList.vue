<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref, onMounted, computed, watchEffect, defineProps } from 'vue';
import EventService from '@/services/EventService';

const props = defineProps(['page']);

const events = ref("");
const totalEvents = ref(0);

const page = computed(() => {
  return props.page;
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
});

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, page.value)
      .then(response => {
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
      })
      .catch(error => {
        console.log('There was an error:', error.response);
      });
  });
});
</script>

<template>
  <h1>The Good Events</h1>
  <div class="event-list">
    <EventCard v-for="event in events" :key="event.id" :event='event' />

    <div class="pagination">
      <router-link id="page-prev" :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev"
        v-if="page != 1">&#60; Previous</router-link>

      <router-link id="page-next" :to="{ name: 'EventList', query: { page: page + 1 } }" rel="next"
        v-if="hasNextPage">Next &#62;</router-link>
    </div>

  </div>
</template>

<style scooped>
.event-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>


// Add Pagination links to the EventList template
// Only show the next page link if there are more events to show
// Improve the error handling in the EventList component
// Improve the pagination styling in the EventList component