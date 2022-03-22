<template>
  <div class="events">
    <h1>Event For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '../components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      //events: null,
    }
  },

  computed: {
    events() {
      return this.$store.state.events
    },
  },

  created() {
    // dispatching action
    this.$store.dispatch('fetchEvents')

    // directly committing
    // EventServices.getEvents()
    //   .then((response) => {
    //     this.events = response.data
    //     //console.log(response.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
