<script setup>
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { todoList } = storeToRefs(store);
const { removeArr } = store;
</script>

<template>
  <div>
    <ul>
      <li v-for="(list, index) in todoList" :key="index">
        <div class="list">
          <input type="checkbox" />
          <label>{{ list }}</label>
          <button @click="removeArr(list)">삭제</button>
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
  text-align: start;
}
</style>
