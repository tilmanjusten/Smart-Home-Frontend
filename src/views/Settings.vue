<template>
    <div class="settings">
      <h1 class="settings__title">Einstellungen</h1>
      <div class="settings__main">

      </div>
    </div>
</template>

<script>
export default {
  name: 'settings',
  components: {}
}
</script>

<style lang="scss">
.settings {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
}

.settings__title {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-top: 1rem;
}

.settings__main {
  flex: 1 1 75vh;
  height: 75vh;
  padding: 0 1rem;
}
</style>
