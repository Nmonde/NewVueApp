<script setup>
//   import { ref, reactive, watch } from 'vue';
//   import '@fullcalendar/core/vdom'
//   import FullCalendar from '@fullcalendar/vue3'
//   import dayGridPlugin from '@fullcalendar/daygrid'
//   import timeGridPlugin from '@fullcalendar/timegrid'
//   import listPlugin from '@fullcalendar/list'
//   import interactionPlugin from '@fullcalendar/interaction'
// import useEvents from '../composables/UseEvents.js'

//   const id= ref(10)

// const {getEvents, createEvent, updateEvent, deleteEvent} = useEvents()

//   const options = reactive({
//     plugins: [dayGridPlugin,timeGridPlugin, listPlugin, interactionPlugin],
//     initialView: 'dayGridMonth',
//     headerToolBar: {
//         left: 'prev, next today',
//         center: 'title',
//         right: 'dayGridMonth, dayGridWeek, listDay '
//     },
//     editable: true,
//     selectable: true, 
//     weekends: true,
//     select: (arg) => {
//         id.value= id.value + 1

//         const calendar = arg.view.calendar
//         calendar.unselect()
//         calendar.newEvent({
//             id: `${id.value}`,
//             title: `New Event ${id.value}`,
//             start: arg.start,
//             end: arg.end,
//             allDay: true
//         })
//     },
//     eventClick: (arg)=> {
//         if(arg.event) {
//           arg.event.remove() 
//         }
//     },
//     events:  [],
//     eventAdd: (arg) => {
//         createEvent({
//            id:arg.event.id,
//            title:arg.event.title,
//            start:arg.event.start,
//            end:arg.event.end, 
//            allDay: arg.event.allDay,

//         })
//     },
//     eventChange: (arg) => {
//         updateEvent({
//             id:arg.event.id,
//            title:arg.event.title,
//            start:arg.event.start,
//            end:arg.event.end, 
//            allDay: arg.event.allDay,
//           }, arg.event.id)
//     },
//     eventRemove: (arg) => {
//         deleteEvent (arg.event.id)
//     }
//   })
//   options.events = getEvents.value
//   watch(getEvents, ()=> {
//     options.events = getEvents.value
//   })
</script>

<template>
    <!-- <FullCalendar v-dom:options='calendarOptions' /> -->
    
  </template>



<style scoped>

</style>
