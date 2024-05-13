<script setup>

defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="event-card">
    <!-- Display event data -->
    <h2>{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  background-color: #f4f4f4;
  cursor: pointer;
  margin: 18px;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
  align-items: center;
  align-self: center;

}

.event-card:hover {
  background-color: #5eaa7791;
  color: white;
}
</style>
