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
          labels: ['this.getRandomInt()', 'this.getRandomInt()'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data Two',
              backgroundColor: '#f89779',
              data: [this.getRandomInt(), this.getRandomInt()]
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
