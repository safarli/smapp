import Home from "./components/Home.vue";
import AsyncSpeed from "./components/AsyncSpeed.vue";
import AddRecords from "./components/AddRecords.vue";
import ViewRecords from "./components/ViewRecords.vue";
import CubeGame from "./components/CubeGame.vue";
import ColorSelector from "./components/ColorSelector.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/asyncspeed",
    name: "asyncSpeed",
    component: AsyncSpeed
  },
  {
    path: "/addrecords",
    name: "addRecords",
    component: AddRecords
  },
  {
    path: "/viewRecords",
    name: "viewRecords",
    component: ViewRecords
  },
  {
    path: "/cubegame",
    name: "cubeGame",
    component: CubeGame
  },
  {
    path: "/colorselector",
    name: "colorSelector",
    component: ColorSelector
  }
];
