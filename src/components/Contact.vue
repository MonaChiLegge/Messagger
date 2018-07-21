<template>
<div class="contactCard">
  <div class="contactImgContainer" >
    <i class="fas fa-user-circle fa-lg"></i>
  </div>
  <div class="contactName">
    <p>{{contact.name}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: {
      id: Number,
      name: String,
      img: String
    }
  }
};
</script>

<style scoped>
.contactCard {
  width: 100%;
  height: 60px;
  background-color: #edeae8;
}
.contactCard:active {
  background-color: #cecac8;
}
.contactCard:hover {
  background-color: #d3cdc6;
}

.contactImgContainer {
  height: 50px;
  width: 50px;
  padding: 5px;
  position: relative;
  float: left;
}

.contactIMG {
  border-radius: 25px;
  height: 50px;
  width: 50px;
}

.contactName {
  width: calc(100% - 70px);
  height: 50px;
  font-size: 0.8em;
  position: relative;
  padding: 5px;
  float: left;
}
</style>
