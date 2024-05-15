<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["event"]);
const router = useRouter();

const register = () => {
    // If user registration API call is successful, redirect to the event details page
    // Else, show an error message
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