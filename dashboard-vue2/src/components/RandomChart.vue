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
    props: ['stack', 'customdata'],
    data () {
      return {
        datacollection: this.customdata,
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
    },
    methods: {
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
