<template>
  <div class="today__weather" >
    <div class="block__info">
      <h2>Today</h2>
      <img
        src="../assets/cloudly.svg"
        alt="setings"
        height="100px"
        width="100px"
      />
    </div>
    <div>
      <h1>+24</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodayWeather',
}


</script>

<style scoped>
.today__weather {
  display: block;
  width: 100%;
  border-radius: 15px;
  background-color: #2221213a;
  backdrop-filter: blur(15px);
  padding: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 10px;
  flex: 1;
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
