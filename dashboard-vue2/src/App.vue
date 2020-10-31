<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RandomChart :customdata="chart1data" :stack="false"></RandomChart>
    <RandomChart :customdata="chart2data" :stack="true"></RandomChart>
  </div>
</template>

<script>
import RandomChart from './components/RandomChart.vue'

export default {
  name: 'App',
  components: {
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
            borderColor: '#f87979',
            data: [10, 31, 34, 29, 14],
            fill: false
            }, 
          {
            label: 'Carbon County Deaths',
            backgroundColor: '#f89779',
            borderColor: '#f89779',
            data: [0, 1, 0, 0, 0],
            fill: false
            }
          ]
        },
      chart2data: {
        labels: ['09/27/2020', '10/04/2020', '10/11/2020', '10/18/2020', '10/25/2020'],
        datasets: [
          {
              label: 'Warren County Cases',
              backgroundColor: '#f87979',
              data: [1, 8, 7, 3, 2]
            },
          {
              label: 'Northampton County Cases',
              backgroundColor: '#f87979',
              data: [78, 266, 202, 247, 72]
            },
          {
              label: 'Lehigh County Cases',
              backgroundColor: '#f87979',
              data: [134, 210, 168, 267, 165]
            },
          {
              label: 'Carbon County Cases',
              backgroundColor: '#f87979',
              data: [10, 31, 34, 29, 14]
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
