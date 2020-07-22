import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];
