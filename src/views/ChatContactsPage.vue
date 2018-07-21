<template>
  <div id="contacts">
    <NavigationBar v-bind:back="false" v-bind:search="true"/>
    <ContactsList/>
  </div>
</template>

<script>
import ContactsList from "@/components/ContactsList";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "ChatContactsPage",
  components: {
    ContactsList,
    NavigationBar
  }
};
</script>

<style scoped>
#contacts {
  width: 100%;
  height: 100%;
}
</style>
