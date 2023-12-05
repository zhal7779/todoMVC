<script setup>
import { ref } from "vue";
</script>

<template>
  <div><input placeholder="What needs to be done?" autofocus /></div>
</template>

<style scoped>
div {
  margin: 0 auto;
  width: 550px;
}
input {
  padding: 16px 24px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  font-size: 24px;
  line-height: 1.4em;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
}
</style>
