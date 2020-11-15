<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="opts"></line-chart>
  </div>
</template>

<script>
//  import Vue from 'vue'
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
              stacked: this.stack
            }]
          }
        }
      }
    },
    methods: {
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
    watch: {
      customdata: function (newData) {
        this.datacollection = newData      
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
