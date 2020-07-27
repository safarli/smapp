import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    speed: 70,
    speedLimit: 120,
    persons: [
      {
        firstname: "Alex",
        lastname: "Heineken",
        carplate: "90BE890"
      }
    ],
    cube: {
      showCube: "block",
      cubeColor: "orange"
    }
  },

  getters: {
    checkViolation: state => {
      if (state.speed > state.speedLimit) {
        return true;
      }
    },
    getPersons: state => {
      return state.persons;
    },
    getSpeed: state => {
      return state.speed;
    },
    getCubeVisibility: state => {
      return state.cube.showCube;
    },
    getCubeColor: state => {
      return state.cube.cubeColor;
    }
  },

  mutations: {
    addRecord: (state, obj) => {
      state.persons.push(obj);
    },
    incrSpeed: (state, val) => {
      state.speed += val;
    },
    decrSpeed: (state, val) => {
      state.speed -= val;
    },
    chngCubeVisibility: (state, payload) => {
      state.cube.showCube = payload;
    },
    chngCubeColor: (state, payload) => {
      console.log(payload);
      state.cube.cubeColor = payload;
    }
  },

  actions: {
    asyIncrSpeed: context => {
      setTimeout(() => {
        context.commit("incrSpeed", 10);
      }, 2500);
    },
    asyDecrSpeed: context => {
      setTimeout(() => {
        context.commit("decrSpeed", 10);
      }, 2500);
    },
    cubeVisible: (context, payload) => {
      // payload: time, visibility
      setTimeout(() => {
        context.commit("chngCubeVisibility", payload.visibility);
      }, payload.time);
    },
    cubeColorize: (context, payload) => {
      // payload:   time, color
      setTimeout(() => {
        context.commit("chngCubeColor", payload.color);
      }, payload.time);
    }
  }
});
