<script setup>
import { onMounted, ref, defineProps, computed } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import EventService from "@/services/EventService.js";


const props = defineProps(["id"]);
const router = useRouter();
const id = computed(() => props.id);

const event = ref(null);
onMounted(() => {
    EventService.getEvent(id.value)
        .then((response) => {
            event.value = response.data;
        })
        .catch((error) => {
            if (error.response && error.response.status === 404) {
                router.push({
                    name: "404Resource",
                    params: { resource: "event" },
                });
            } else {
                router.push({
                    name: "NetworkError",
                });
            }
        });
});
</script>
<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <RouterLink :to="{ name: 'EventDetails' }">Details</RouterLink>
            |
            <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink>
            |
            <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
            |
            <RouterLink :to="{ name: 'EventList' }">Back</RouterLink>
        </div>
        <RouterView :event="event" />
    </div>
</template>

<style scoped>
#nav {
    margin-top: 10px;
    padding: 30px 0;

}

#nav a {
    color: #2c3e50;
    margin: 0 10px;
    text-decoration: none;
}

#nav a:hover {
    text-decoration: underline;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
