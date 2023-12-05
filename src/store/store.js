import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  id: "root",

  //state
  state: () => ({
    arr: [],
  }),

  //getters
  getters: {
    getCount(state) {
      return state.arr;
    },
  },

  //actions
  actions: {
    addArr(newText) {
      this.arr((prevArr) => [...prevArr, newText]);
    },
    removeArr(removeText) {
      this.arr.filter((text) => text === removeText);
    },
    initArr() {
      this.arr = [];
    },
  },
});
