<template>
  <div class="home">
    <sidebar></sidebar>
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/header.vue";
// @ is an alias to /src

import Sidebar from "../components/sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    Header,
  },
};
</script>
