<template>
  <div id="welcome-div">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'welcome'
  };
</script>

<style scoped>
  #welcome-div {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
  }
</style>
