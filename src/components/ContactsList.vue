<template>
<div id="contactsList">
  <transition-group
    name="staggered-fade"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <div id="contact" v-for="contact in computedContacts" :key="contact.id">
      <router-link :to="'/chat/' + contact.id"><Contact v-bind:contact="contact"/></router-link>
    </div>
  </transition-group>
</div>
</template>

<script>
import Contact from "./Contact";
export default {
  name: "ContactsList",
  components: {
    Contact
  },
  data() {
    return {
      contacts: this.generateContactsList()
    };
  },
  computed: {
    computedContacts: function() {
      var vm = this;
      return this.contacts.filter(function(item) {
        return item.name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    OpenChatEvent() {
      // TODO qualcosa
    },
    generateContactsList() {
      let array = [];
      for (let i = 0; i < 10; i++) {
        array.push({
          id: i,
          name: "Prova " + (i + 1),
          img: "@/assets/logo.png"
        });
      }
      return array;
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        window.Velocity(el, { opacity: 1, height: "60px" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        window.Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>

<style scoped>
#contactsList {
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: scroll;
}
</style>
