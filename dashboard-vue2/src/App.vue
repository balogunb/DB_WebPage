<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <RandomChart :customdata="chart1data" :stack="false"></RandomChart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import RandomChart from './components/RandomChart.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    RandomChart
  },
  data () {
    return {
      chart1data: {
        labels: ['09/27/2020', '10/04/2020', '10/11/2020', '10/18/2020', '10/25/2020'],
        datasets: [
          {
            label: 'Carbon County Cases',
            backgroundColor: '#f87979',
            data: [10, 31, 34, 29, 14],
            fill: false
            }, 
          {
            label: 'Carbon County Deaths',
            backgroundColor: '#f89779',
            data: [0, 1, 0, 0, 0],
            fill: false
            }
          ]
        }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
