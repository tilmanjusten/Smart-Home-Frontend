<template>
    <div class="light-item">
        {{title}}
    </div>
</template>

<script>
export default {
  name: 'light-render-item',
  props: [
    'title'
  ]
}
</script>

<style lang="scss">
.light-item {
  border: 1px solid #ddd;
  border-width: 0 1px 1px 0;
  flex: 0 0 calc((100% / 3) - 1px);
  height: calc(50vh - 1px);
  text-align: center;
}
</style>
