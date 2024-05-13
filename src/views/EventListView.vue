<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref, onMounted } from 'vue';
import EventService
  from '@/services/EventService';
const events = ref(null);
onMounted(async () => {
  try {
    EventService.getEvents()
    try {
      const response = await EventService.getEvents();
      events.value = response.data;
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <h1>The Good Events</h1>
  <div class="event-list-view">
    <EventCard v-for="event in events" :key="event.id" :event='event' />
  </div>
</template>

<style scooped>
.event-list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>