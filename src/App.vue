<script>
import EventCalender from './components/MyCalendar.vue'

</script>


<template>
  <div id="app">
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/calendar">Calendar</router-link>
    </nav>
    <router-view></router-view>
  
<EventCalendar/>
</div>
</template>

<script setup>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
