<template>
  <div id="app">
    <hello-world />
    <vue-formulate />
    <table-parent/>
    <functional-activities /> 
    
  </div>
</template>

<script>
import VueFormulate from './components/VueFormulate.vue'
import HelloWorld from './components/HelloWorld.vue'
import TableParent from './components/TableParent.vue'
import FunctionalActivities from './components/FunctionalActivities.vue'





export default {
  name: 'App',
  components: {
    VueFormulate,
    HelloWorld, 
    TableParent, 
    FunctionalActivities
  },
  methods: {
    setData(value) {
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
