<template>
  <div class="header">
    <div>
      <h2>Almaty</h2>
    </div>
    <div class="options">
      <div>
        <img
          src="../assets/settings.svg"
          alt="setings"
          height="30px"
          width="30px"
        />
        Settings
      </div>
      <div>
        <img
          src="../assets/theme.svg"
          alt="setings"
          height="30px"
          width="30px"
        />

        Theme
      </div>
      <div>
        <img
          src="../assets/location.svg"
          alt="setings"
          height="30px"
          width="30px"
        />

        City
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.options div {
  display: flex;
  align-items: center;
  vertical-align: middle;
}

h2 {
  font-size: 42px;
}
img {
  margin: 0 5px;
  color: white;
}

.options {
  max-width: 500px;
  width: 100%;
  border-radius: 15px;
  background-color: #2221213a;
  backdrop-filter: blur(15px);
  padding: 15px;
  display: flex;

  justify-content: space-between;
}
</style>
