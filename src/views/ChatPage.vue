<template>
  <div id="chat">
    <NavigationBar v-bind:back="true" v-bind:search="false"/>
    <div id="wallpaper-background"  >
      <transition-group
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-bind:css="false"
      >
        <MessageTemplate v-bind:msg="msg" id="sender" v-for="msg in messages" :key="msg.id"/>
      </transition-group>
    </div>
    <div id="write-area">
      <MessageInput class="input-message" v-on:message-creation="sync" />
    </div>
  </div>
</template>

<script>
import MessageTemplate from "@/components/MessageTemplate";
import MessageInput from "@/components/MessageInput";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "ChatPage",
  components: {
    MessageTemplate,
    MessageInput,
    NavigationBar
  },
  data() {
    return {
      messages: [],
      who: this.$route.params.id
    };
  },
  created() {
    let store;
    store = JSON.parse(localStorage.getItem("messages"));

    if (typeof store === "undefined" || store === null)
      localStorage.setItem("messages", JSON.stringify([]));
    store = JSON.parse(localStorage.getItem("messages"));

    this.messages = store;
  },
  methods: {
    sync(msg) {
      if (msg !== null) {
        let store = JSON.parse(localStorage.getItem("messages"));
        let date = new Date();
        msg.time = date.getHours() + ":" + date.getMinutes();
        msg.id = store.length;
        msg.source = "sender";
        this.messages.push(msg);
        // update messages storage
        localStorage.setItem("messages", JSON.stringify(this.messages));
        this.messages = JSON.parse(localStorage.getItem("messages"));
      }
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.width = "0px";
      var objDiv = document.getElementById("wallpaper-background");
      objDiv.scrollTop = objDiv.scrollHeight;
    },
    enter: function(el, done) {
      window.Velocity(el, { opacity: 1, width: "0px" }, { duration: 300 });
      window.Velocity(el, { width: "200px" }, { complete: done });
    }
  }
};
</script>


<style scoped>
#chat {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 500px;
  height: 100%;
  border-radius: 0px 0px 6px 6px;
}

#sender {
  float: right;
  clear: both;
  position: relative;
}

#receiver {
  position: relative;
  float: left;
  clear: both;
}

.input-message {
  position: relative;
  clear: both;
}

#wallpaper-background {
  width: 500px;
  height: 550px;
  background-color: #282828;
  overflow-y: scroll;
}

#write-area {
  width: 500px;
  background-color: #282828;
  border-radius: 0px 0px 6px 6px;
}
</style>
