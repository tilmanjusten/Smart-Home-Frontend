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
:root {
  --color-green: #42b983;
  --color-green-transparent: #42b9830e;
  --color-darkblue: #2c3e50;
  --color-darkgrey: #222;
}
* {
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-darkblue);
  display: flex;
  height: 100vh;
  padding: 0;
}

#nav {
  background: var(--color-darkgrey);
  flex: 0 0 auto;
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
