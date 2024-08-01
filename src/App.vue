<script>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'


export default {
  components: {
    Navbar,
    RouterView
  },
  data() {
    return {}
  }
}
</script>

<template>
  <section>
    <Navbar />
    <RouterView />
  </section>
</template>
