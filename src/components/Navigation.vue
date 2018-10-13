<template>
    <ul class="navigation">
        <li>
            <NavigationItem to="/" type="lights" label="Licht" />
        </li>
        <li>
            <NavigationItem to="/climate" type="climate" label="Klima" />
        </li>
        <li>
            <NavigationItem to="/climate-trend" type="trend" label="Klima-Trends" />
        </li>
        <li>
            <NavigationItem to="/plants" type="plants" label="Pflanzen" />
        </li>
        <li>
            <NavigationItem to="/plants-trend" type="trend" label="Pflanzen-Trends" />
        </li>
        <li>
            <NavigationItem to="/settings" type="settings" label="Einstellungen" />
        </li>
    </ul>
</template>

<script>
import NavigationItem from '@/components/NavigationItem.vue'

export default {
  name: 'navigation',
  components: {
    NavigationItem
  }
}
</script>

<style lang="scss">
.navigation {
  list-style: none;
  margin: 0;
  padding-left: 0;

  li {
    color: #fff;
    height: (100vh / 6);
  }
}
</style>
