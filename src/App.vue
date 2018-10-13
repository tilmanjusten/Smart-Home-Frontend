<template>
  <div id="app">
    <nav id="nav">
      <Navigation />
    </nav>
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  padding: 0;
}

#nav {
  background: #222;
  flex: 0 1 auto;
  height: 100vh;
  padding: 0;
  max-width: 100px;
  width: 12vw;
}

#main {
  flex: 1 1 auto;
  height: 100vh;
  padding: 0;
}
</style>
