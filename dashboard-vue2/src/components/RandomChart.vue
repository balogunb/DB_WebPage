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
		props: ['stack', 'customdata', 'displayAverage', 'displayFloats'],
		data () {
			return {
				datacollection: this.customdata,
				opts: {
					tooltips: {
						mode: 'index',
						intersect: false,
						callbacks: {}
					},
					hover: {
						mode: 'index',
						intersect: false
					},
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
		},
		created () {
			if (this.displayAverage){
				this.opts.tooltips.callbacks.footer = function(tooltipItems) {
					let total = 0
					for (let i = 0; i < tooltipItems.length; i++){
						total += parseFloat(tooltipItems[i].value)
					}
					return "Lehigh Valley Total: " + (total).toFixed(3) + " per 4000 (" + (total / 4).toFixed(3) + " per 1000)"
				}
			}
			if (this.displayFloats){
				this.opts.tooltips.callbacks.label = function (tooltipItem, data) {
				console.log(tooltipItem)
				console.log(data)
				return data.datasets[tooltipItem.datasetIndex].label + ": " + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toFixed(3) + " per 1000"

				}
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
