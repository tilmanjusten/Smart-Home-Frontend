<template>
    <div class="climate-trend">
      <div class="climate-trend__main">
        <h1>Wetter-Trends</h1>
        <p>
          Keine Daten vorhanden.
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'climate-trend',
  components: {}
}
</script>

<style>
.climate-trend {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}

.climate-trend__main {
  padding: 1rem;
}
</style>
