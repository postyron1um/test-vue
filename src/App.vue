<template>
  <div id="app">
    <nav>
      <router-link to="/">Персонажи</router-link>
      <router-link to="/chart">Диаграмма</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #0056b3;
}
</style>
