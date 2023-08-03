import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Typography from "@/views/Typography.vue";
import Button from "@/views/Button.vue";
import Checkbox from "@/views/Checkbox.vue";
import Radiobutton from "@/views/Radiobutton.vue";
import Progress from "@/views/Progress.vue";
import Input from "@/views/Input.vue";
import Tabs from "@/views/Tabs.vue";
import Table from "@/views/Table.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/typography",
    name: "typography",
    component: Typography,
  },
  {
    path: "/button",
    name: "button",
    component: Button,
  },
  {
    path: "/checkbox",
    name: "checkbox",
    component: Checkbox,
  },
  {
    path: "/radiobutton",
    name: "radiobutton",
    component: Radiobutton,
  },
  {
    path: "/progress",
    name: "progress",
    component: Progress,
  },
  {
    path: "/input",
    name: "input",
    component: Input,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs,
  },
  {
    path: "/table",
    name: "table",
    component: Table,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
