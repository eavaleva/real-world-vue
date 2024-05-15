<script setup>
import { useRouter } from "vue-router";
import { defineProps, inject } from "vue";

const { event } = defineProps(["event"]);
const router = useRouter();
const GStore = inject("GStore");

const register = () => {
    // If user registration API call is successful, redirect to the event details page

    // Else, show an error message
    GStore.flashMessage = `You have successfully registered for ${event.title}!`;
    setTimeout(() => {
        GStore.flashMessage = "";
    }, 3000)
    router.push({
        name: "EventDetails",
    });
    // Implement the registration logic here

}
</script>

<template>
    <p>Register for the event here</p>

    <button @click="register">Register Me!</button>
</template>

<style scoped></style>