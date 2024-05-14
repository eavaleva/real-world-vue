<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="skeleton-loader">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
    </div>
</template>

<style scoped>
.skeleton-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.skeleton-card {
    padding: 20px;
    width: 250px;
    height: 50px;
    background-color: #f4f4f4;
    margin: 18px;
    border-radius: 10px;
    align-items: center;
    align-self: center;
    animation: pulse 1.5s infinite;
}
</style>