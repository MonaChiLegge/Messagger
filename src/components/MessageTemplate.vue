<template>
  <div class="msg-container">
    <div class="msg-text">
      <p>{{msg.text}}</p>
    </div>
    <div class="time-position">
      <p>{{msg.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageTemplate",
  props: {
    msg: {
      id: Number,
      text: String,
      time: String,
      source: String
    }
  }
};
</script>

<style scoped>
.msg-container {
  background-color: #d6d5c7;
  border-radius: 6px;
  width: 200px;
  height: 100px;
  padding: 5px;
  margin: 15px;
}

.msg-text {
}

.time-position {
  float: right;
  clear: left;
}
</style>
