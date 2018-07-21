import Vue from "vue";
import Router from "vue-router";
import ChatPage from "@/views/ChatPage";
import ChatContactsPage from "@/views/ChatContactsPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/chat/:id",
      name: "Chat",
      component: ChatPage,
      props: true
    },
    {
      path: "/",
      name: "ChatContacts",
      component: ChatContactsPage
    }
  ]
});
