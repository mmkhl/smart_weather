<template>
  <div class="header">
    <div>
      <h2>Almaty</h2>
    </div>
    <div class="options">
      <div> Settings</div>
      <div>Theme</div>
      <div>City</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

h2 {
  font-size: 42px;
}

.options{
  max-width: 500px;
  width: 100%;
  border: 3px solid #fff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
