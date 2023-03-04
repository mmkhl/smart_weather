<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <!-- <nav>
          <router-link to="/">Weather</router-link>
          <router-link to="/recomendation">Recomendation</router-link>
        </nav>
        <router-view/> -->
        <WeatherPage/>

      </div>
    </div>
  </div>
</template>

<script>
import WeatherPage from './pages/WeatherPage.vue';

export default {
  components:{
    WeatherPage
  }
}


</script>




<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.wrapper {
  width: 100%;
  height: 100vh;
  background: url(./assets/background.jpg) no-repeat;
  background-size: cover;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

}
nav {
  text-align: end;
  padding: 30px;
}

nav a {
  padding: 0 30px;

  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
