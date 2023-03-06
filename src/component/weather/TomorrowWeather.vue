<template>
  <div class="tomorrow__weather">
    <div class="block__info">
      <h2>Tomorrow</h2>
      <img
        src="../../assets/sunny.svg"
        alt="setings"
        height="100px"
        width="100px"
      />
    </div>
    <div>
      <h1>+31</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tomorrow__weather {
  display: block;
  flex: 1;
  margin: 10px;
  border-radius: 15px;
  background-color: #2221213a;
  backdrop-filter: blur(15px);
  padding: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.block__info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
h2 {
  margin: 0;
}

h1 {
  margin: 0;
  font-size: 102px;
}
</style>
