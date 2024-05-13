<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref } from 'vue';

const events = ref([
  {
    id: 5928111,
    catergory: 'animal welfare',
    title: 'Dog Adoption Day',
    description: 'Come and adopt a dog today!',
    location: '1234 Dog St, Dogtown',
    date: 'January 1, 2022',
    time: '12:00 PM',
    petAllowed: true,
    organizer: 'Dog Rescue Inc.',
  },
  {
    id: 5928112,
    catergory: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Come and adopt a dog today!',
    location: '1234 Dog St, Dogtown',
    date: 'January 12, 2023',
    time: '10:00 PM',
    petAllowed: true,
    organizer: 'Dog Rescue Inc.',
  },
  {
    id: 5928113,
    catergory: 'animal welfare',
    title: 'Dog Adoption Day',
    description: 'Come and adopt a dog today!',
    location: '1234 Dog St, Dogtown',
    date: 'January 21, 2024',
    time: '2:00 PM',
    petAllowed: true,
    organizer: 'Dog Rescue Inc.',

  },
  {
    id: 5928114,
    catergory: 'animal welfare',
    title: 'Dogs Day',
    description: 'Come and adopt a dog today!',
    location: '1234 Dog St, Dogtown',
    date: 'January 21, 2024',
    time: '2:00 PM',
    petAllowed: true,
    organizer: 'Dog Rescue Inc.',

  },
  {
    id: 5928115,
    catergory: 'animal welfare',
    title: 'Dog Adoption Day',
    description: 'Come and adopt a dog today!',
    location: '1234 Dog St, Dogtown',
    date: 'January 21, 2024',
    time: '2:00 PM',
    petAllowed: true,
    organizer: 'Dog Rescue Inc.',

  },
]);

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