<template>
  <div class="message">
    <input id="message-area" type="text" v-model="msg.text" v-on:keyup.enter="submit(msg)" placeholder="Write...">
    <button class="submit-message" v-on:click="submit(msg)">Send</button>
  </div>
</template>

<script>
export default {
  name: "messageInput",
  data: function() {
    return {
      msg: {
        id: null,
        text: "",
        time: "",
        source: null
      }
    };
  },
  methods: {
    submit: function(message) {
      // check the message...
      if (message !== null) {
        // inform parent of changes
        this.$emit("message-creation", message);
        // reset local message ...
        document.getElementById("message-area").value = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  width: calc(100% - 4px);
  height: 40px;
  border: 2px solid gray;
  border-radius: 6px;
}

#message-area {
  border: 0px;
  border-radius: 4px 0px 0px 4px;
  padding: 5px;
  width: calc(80% - 10px);
  height: calc(100% - 10px);
  font-size: 1em;
}
.submit-message {
  border-radius: 0px 4px 4px 0px;
  border: 0px;
  width: 20%;
  height: 100%;
  background-color: gray;
  position: relative;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  font-size: 1em;
}

.submit-message:hover {
  background: green;
  color: white;
}

.submit-message:active {
  background: #046000;
  transition: 0.2s;
}
</style>
