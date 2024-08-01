<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      logo: 'HM_Putra',
      navbarItem: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Admin', link: '/admin' }
      ]
    }
  },
  methods: {},
  props: {
    ...RouterLink.props
  }
}
</script>

<template>
  <nav
    class="flex justify-between items-center p-4 h-14 bg-slate-800 text-white border-b-2 border-green-500 fixed top-0 left-0 right-0 z-50"
  >
    <RouterLink to="/" class="font-bold text-xl">{{ logo }}</RouterLink>
    <ul class="flex gap-4">
      <li class="cursor-pointer text-slate-300" v-for="item in navbarItem" :key="item.name">
        <RouterLink :to="item.link">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  @apply text-green-500;
}
</style>
