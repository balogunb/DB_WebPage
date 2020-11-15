<template>
	<div id="app">
		<!--<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>-->
		<h1>DreamTeam Lehigh Valley COVID-19 Dashboard</h1>
		<h2>Cases and Deaths (County)</h2>
		<v-select label="name" :options="counties" v-model="selected" :reduce="value => value.name"> </v-select>
		<RandomChart :customdata="chart1data" :stack="false"></RandomChart>
		<h2>Cases and Deaths (All Counties)</h2>
		<RandomChart :customdata="chart2data" :stack="true"></RandomChart>
		<h2>Cases at All Colleges and Total Cases</h2>
		<RandomChart :customdata="chart4data" :stack="false"></RandomChart>

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
			selected: {}, //this is the object selected by the county drop-down.
			counties: [], //the list of objects selectable by the county drop-down.
			chart1data: {},
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
							backgroundColor: '#f21979',
							data: [78, 266, 202, 247, 72]
						},
					{
							label: 'Lehigh County Cases',
							backgroundColor: '#f8b979',
							data: [134, 210, 168, 267, 165]
						},
					{
							label: 'Carbon County Cases',
							backgroundColor: '#f87000',
							data: [10, 31, 34, 29, 14]
						}
				]
			},
			chart4data: {
					labels: ['09/27/2020', '10/04/2020', '10/11/2020', '10/18/2020', '10/25/2020'],
					datasets: [
						{
							label: 'Total County Cases',
							borderColor: '#f87979',
							data: [223, 515, 411, 546, 253],
							fill: false
							}, 
						{
							label: 'Cedar Crest College Cases',
							borderColor: '#f87979',
							data: [1, 1, 0, 0, 1],
							fill: false
							},
						{
							label: 'DeSales University Cases',
							borderColor: '#f87979',
							data: [1, 1, 0, 2, 2],
							fill: false
							},
						{
							label: 'Muhlenberg College Cases',
							borderColor: '#f87979',
							data: [1, 0, 0, 0, 1],
							fill: false
							},
						{
							label: 'Pennsylvania State University Lehigh Valley Cases',
							borderColor: '#f87979',
							data: [0, 0, 0, 1, 0],
							fill: false
							},
						{
							label: 'Lafayette College Cases',
							borderColor: '#f87979',
							data: [0, 0, 10, 8, 1],
							fill: false
							},
						{
							label: 'Lehigh University Cases',
							borderColor: '#f87979',
							data: [89, 85, 38, 10, 11],
							fill: false
							},
						{
							label: 'Moravian College Cases',
							borderColor: '#f87979',
							data: [1, 0, 0, 0, 1],
							fill: false
							}
						]
				}
		}
	},
	watch: {
		selected : function (newSelected) {
			this.$http.get('http://139.147.9.191:80/countydata', {params: {county_name : newSelected}}).then(response => {
				let data = {
					labels: response.data.map( week => week.date.match(/[^T]*/i)[0]),
					datasets: [
						{
							label: newSelected + " Deaths",
							data: response.data.map( week => week.new_deaths),
							backgroundColor: '#f87979',
							borderColor: '#f87979',
							fill: false
							},
						{
							label: newSelected + " Cases",
							data: response.data.map( week => week.new_cases),
							backgroundColor: '#f21979',
							borderColor: '#f21979',
							fill: false
							}	
					]
			}
			this.chart1data = data
			})
		}
	},
	mounted () {
		this.$http.get('http://139.147.9.191:80/counties').then(response => {
			this.counties = response.data
			this.selected = response.data[0].name //watcher loads data for this default value
		})
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
