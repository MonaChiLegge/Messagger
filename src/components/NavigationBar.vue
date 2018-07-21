<template>
  <div id="navbar">
    <div class="left-item">
      <router-link to="/" v-if="back" >
        <i class="fas fa-angle-left fa-lg"></i>
      </router-link>
    </div>
    <div class="right-item">
      <router-link to="/back" v-if="search" >
        <i class="fas fa-search fa-lg"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    back: Boolean,
    search: Boolean
  }
};
</script>

<style scoped>
#navbar {
  height: 60px;
  width: 100%;
  background-color: #f9f9f9;
}

.right-item {
  float: right;
  position: relative;
  padding: 17px;
}

.left-item {
  float: left;
  position: relative;
  padding: 17px;
}
</style>
