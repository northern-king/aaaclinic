<template>
  <div class="hidden">
    <vs-navbar shadow square textWhite center-collapsed v-model="active">
      <template #left>
        <vs-button danger @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu bx-flashing"></i>
        </vs-button>
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-input
          state="danger"
          danger
          v-model="value3"
          placeholder="Put your email"
          ><template #icon>
            <i class="bx bx-mail-send" style="color:#000"></i> </template
        ></vs-input>
        <vs-button
          :href="`mailto:arirudianaa@gmail.com`"
          animation-type="vertical"
          danger
          >Get Offers<template #animate>
            <i class="bx bx-mail-send"></i> Send
          </template></vs-button
        >
      </template>
    </vs-navbar>
    <vs-sidebar danger absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <img src="../assets/logo.svg" alt="logo" /> <span danger>logo</span>
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="treatment">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        Treatment
      </vs-sidebar-item>
      <vs-sidebar-item id="doctor">
        <template #icon>
          <i class="bx bx-group"></i>
        </template>
        Our Doctor
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-heart-circle"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
    value3: "",
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
