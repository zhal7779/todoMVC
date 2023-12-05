import { defineStore } from 'pinia';

export const useStore = defineStore('root', {
  state: () => ({
    todoList: [],
  }),
  // getters: {
  //   getState(state) {
  //     return state.arr;
  //   },
  // },
  actions: {
    addList(newText) {
      this.todoList.push({ text: newText, checked: false });
    },
    removeList(removeText) {
      this.todoList = this.todoList.filter((prev) => prev.text !== removeText);
    },
    checkedList(checkedText) {
      this.todoList = this.todoList.map((prev) =>
        prev.text === checkedText
          ? { text: prev.text, checked: !prev.checked }
          : { text: prev.text, checked: prev.checked }
      );
    },
    initList() {
      this.todoList = [];
    },
  },
});
