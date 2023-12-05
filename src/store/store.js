import { defineStore } from "pinia";

export const useStore = defineStore("root", {
  state: () => ({
    todoList: [],
  }),
  // getters: {
  //   getState(state) {
  //     return state.arr;
  //   },
  // },
  actions: {
    addArr(newText) {
      this.todoList.push(newText);
    },
    removeArr(removeText) {
      this.todoList = this.todoList.filter(
        (prevText) => prevText !== removeText
      );
    },
    initArr() {
      this.todoList = [];
    },
  },
});
