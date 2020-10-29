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
            backgroundColor: '#ccf5ac',
            data: [10, 31, 34, 29, 14]
            }, {
              label: 'Carbon County Deaths',
              backgroundColor: '#bad29f',
              data: [0, 1, 0, 0, 0]
            }, {
              label: 'Lehigh County Cases',
              backgroundColor: '#808a9f',
              data: [134, 210, 168, 267, 165]
              }, {
              label: 'Lehigh County Deaths',
              backgroundColor: '#2c4975',
              data: [1, 3, 4, 4, 0]
              }, {
              label: 'Northampton County Cases',
              backgroundColor: '#3d2b56',
              data: [78, 266, 202, 247, 72]
              }, {
              label: 'Northampton County Deaths',
              backgroundColor: '#231123',
              data: [0, 1, 3, 2, 0]
              }, {
              label: 'Warren County Cases',
              backgroundColor: '#82204a',
              data: [1, 8, 7, 3, 2]
              }, {
              label: 'Warren County Deaths',
              backgroundColor: '#b20d30',
              data: [0, 0, 0, 0, 0]
              }, {
              label: 'Cedar Crest College Cases',
              backgroundColor: '#bfae48',
              data: [1, 1, 0, 0, 1]
              }, {
              label: 'DeSales University Cases',
              backgroundColor: '#5fad41',
              data: [1, 1, 0, 2, 2]
            },
            {
              label: 'Muhlenberg College Cases',
              backgroundColor: '#262730',
              data: [1, 0, 0, 0, 1]
              },{
                label: 'Pennsylvania State University Lehigh Valley Cases',
                backgroundColor: '#2d936c',
                data: [0, 0, 0, 1, 0]
                },{
                  label: 'Lafayette College Cases',
                  backgroundColor: '#391463',
                  data: [0, 0, 10, 8, 1]
                  },{
                    label: 'Cedar Crest College Cases',
                    backgroundColor: '#3a0842',
                    data: [89, 85, 38, 10, 11]
                    },{
                      label: 'Lehigh University Cases',
                      backgroundColor: '#d33f49',
                      data: [89, 85, 38, 10, 11]
                      },{
                        label: 'Moravian College Cases',
                        backgroundColor: '#d7c0d0',
                        data: [1, 0, 0, 0, 1]
                        }
            ]
            }
        }
      },
    }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
