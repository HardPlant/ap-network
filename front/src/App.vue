<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      
      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
        </md-toolbar>
        <md-list></md-list>

      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
