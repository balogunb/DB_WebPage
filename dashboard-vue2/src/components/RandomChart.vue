<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="opts"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    props: ['stack'],
    data () {
      return {
        datacollection: null,
        opts: {
          scales: {
            yAxes: [{
              stacked: false
            }]
          }
        }
      }
    },
    mounted () {
      this.opts.scales.yAxes[0].stacked = this.stack
      this.fillData()

    },
    methods: {
      fillData () {
        this.datacollection = {
        labels: ['09/27/2020', '10/04/2020', '10/11/2020', '10/18/2020', '10/25/2020'],
        datasets: [
          {
            label: 'Carbon County Cases',
            backgroundColor: '#f87979',
            data: [10, 31, 34, 29, 14]
            }, 
          {
            label: 'Carbon County Deaths',
            backgroundColor: '#f89779',
            data: [0, 1, 0, 0, 0]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
