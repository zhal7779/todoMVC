<script setup>
import Todo from "./components/todo.vue";
import List from "./components/list.vue";
import "./reset.css";
</script>

<template>
  <section>
    <header>
      <h1>todos</h1>
    </header>
    <main>
      <Todo />
      <List />
    </main>
    <footer>
      <p>Double-click to edit a todo</p>
      <p>Written by Minyoung</p>
      <p>Part of TodoMVC</p>
    </footer>
  </section>
</template>

<style scoped>
section {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
main {
  width: 100%;
}

header {
  display: block;
  position: relative;
}
header > h1 {
  font-size: 100px;
  color: rgba(175, 47, 47, 0.15);
}
footer > p {
  color: #bfbfbf;
  font-size: 10px;
}
</style>
