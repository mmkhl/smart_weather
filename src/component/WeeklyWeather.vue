<template>
  <div class="weekly__weather">
    <h2>Weekly weather</h2>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.weekly__weather {
  display: block;
  width: 100%;
  height: 200px;
  margin: 10px 0;
  border-radius: 15px;
  background-color: #2221213a;
  backdrop-filter: blur(15px);
  padding: 15px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h2 {
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 102px;
}
</style>
