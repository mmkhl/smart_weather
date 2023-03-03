<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <nav>
          <router-link to="/">Weather</router-link>
          <router-link to="/recomendation">Recomendation</router-link>
        </nav>
        <router-view/>

      </div>
    </div>
  </div>
</template>

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
  background: rgb(42, 42, 43);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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
