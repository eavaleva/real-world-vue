<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';
const GStore = inject('GStore');

</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      <p>{{ GStore.flashMessage }}</p>
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'EventList' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'About' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: monospace, ui-monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 30px 0;

}

nav a {

  color: #2c3e50;
  margin: 0 10px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
  margin: 0;
  padding: 0;


}

#flashMessage {
  color: #2c3e50;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  animation-name: greenFade;
  animation-duration: 4s;

}

@keyframes greenFade {
  from {
    background: #edeb8261;
  }

  to {
    background: transparent;
  }
}
</style>
