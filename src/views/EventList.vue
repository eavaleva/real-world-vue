<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventService from '@/services/EventService';
import SkeletonLoader from '@/components/SkeletonLoader.vue';

const props = defineProps(['page']);

const events = ref("");
const totalEvents = ref(0);
const loading = ref(true);

const page = computed(() => {
  return props.page;
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
});

onMounted(() => {
  watchEffect(() => {
    loading.value = true;
    events.value = null;
    EventService.getEvents(5, page.value)
      .then(response => {
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
        loading.value = false; // set loading to false after data fetch
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
    <SkeletonLoader v-if="loading" /> <!-- render the skeleton loader when loading is true -->
    <EventCard v-for="event in events" :key="event.id" :event='event' v-else />
    <!-- render the EventCard when loading is false -->
    <div v-if="!loading && events.length === 0">No events found</div>
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
  font-weight: bold;
  font-family: monospace;
  font-size: large;
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