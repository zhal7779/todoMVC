<script setup>
import { useStore } from '../store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { todoList } = storeToRefs(store);
const { checkedList, removeList } = store;
</script>

<template>
  <div>
    <ul>
      <li v-for="(list, index) in todoList" :key="index">
        <div class="list">
          <input
            type="checkbox"
            class="toggle"
            @click="checkedList(list.text)"
          />
          <label :class="list.checked ? 'cheked-list' : 'unchecked-list'">{{
            list.text
          }}</label>
          <button @click="removeList(list.text)">삭제</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  width: 597px;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
}
.list {
  font-size: 24px;
  text-align: start;
}
.list > label {
  padding: 15px 15px 15px 60px;
}
.toggle {
  width: 40px;
}
.unchecked-list {
  color: #4d4d4d;
}
.cheked-list {
  color: #d9d9d9;
  text-decoration: line-through;
}
</style>
