<template>
  <input v-model="query" v-on:change="NotifyQuery">
</template>

<script>
export default {
  name: "SearchNavigationBar",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    NotifyQuery: function() {
      this.$emit("query", this.query);
    }
  }
};
</script>
