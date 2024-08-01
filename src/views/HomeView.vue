<script>
  import HomeJumbotron from "@/components/HomeJumbotron.vue";
  import InputTable from "@/components/InputTable.vue";

  export default {
    components: {
      HomeJumbotron,
      InputTable
    }
  }
</script>

<template>
  <HomeJumbotron />
  <div class="grid gap-6 pt-6 md:py-8 md:px-20 md:grid-cols-1 bg-gray-900">
    <InputTable />
  </div>
</template>
