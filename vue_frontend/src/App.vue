<template>
	<div id="app">
		<!--<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>-->
		<h1>DreamTeam Lehigh Valley COVID-19 Dashboard</h1>
		<v-select class="small" label="name" :clearable="false" :options="counties" v-model="selected" :reduce="value => value.name"> </v-select>
		<RandomChart :customdata="chart1data" :stack="false" :title="chart1title"></RandomChart>
		<RandomChart :customdata = "chart3data" :stack="false" :title="chart3title"></RandomChart>
		<RandomChart :customdata="chart2data" :displayAverage="false" :displayFloats="true" :stack="false" :title="chart2title"></RandomChart>
		<RandomChart :customdata="chart4data" :stack="false" :title="chart4title"></RandomChart>

	</div>
</template>

<script>
import RandomChart from './components/RandomChart.vue'
import randomColor from 'randomcolor'
export default {
	name: 'App',
	components: {
		RandomChart
	},
	title() {
		return "DreamTeam COVID-19 Dashboard"
	},
	data () {
		return {
			selected: {}, //this is the object selected by the county drop-down.
			counties: [], //the list of objects selectable by the county drop-down.
			countyPops: {},
			chart1data: {},
			chart2data: {},
			chart3data: {},
			chart4data: {},
			chart1title: "Cases and Deaths (Selected County)",
			chart2title: "Cases (All Counties)",
			chart3title: "Cases by College (Selected County)",
			chart4title: "Cases at All Colleges and Total Cases in Lehigh Valley",
			paletteSize: {},
			palette: {}
		}
	},
	watch: {
		selected : function (newSelected) {
			this.$http.get('http://139.147.9.191:80/countydata', {params: {county_name : newSelected}}).then(response => {
				let timestamps = response.data.map( week => week.date.match(/[^T]*/i)[0])
				let countyDeaths = {
							label: newSelected + " Deaths",
							data: response.data.map( week => week.new_deaths),
							backgroundColor: '#f87979',
							borderColor: '#f87979',
							fill: false
				}
				let countyCases = {
							label: newSelected + " Cases",
							data: response.data.map( week => week.new_cases),
							backgroundColor: '#f21979',
							borderColor: '#f21979',
							fill: false
				}
				let c1data = {
					labels: timestamps,
					datasets: [countyCases, countyDeaths]
				}
				this.chart1data = c1data

				this.$http.get('http://139.147.9.191:80/countycolleges', {params: {county_name: newSelected}}).then(collegesResponse => {
					let collegeRequests = collegesResponse.data.map(college => this.$http.get('http://139.147.9.191:80/collegedata', {
						params: {
							college_name: college.name}
						}
					))

					this.$http.all(collegeRequests).then( colleges => {
						// initially, countyCollegeDatasets contains a dataset for every college in the county. This can be an empty array at this point!
						let countyCollegeDatasets = colleges.map((college, index) => {
							//we need to pad out the left side of our dataset because college records don't extend as far back as county records
							let alignedData = new Array(timestamps.length - college.data.length).fill(0).concat(college.data.map(week => week.new_cases))
							return {
								label: college.data[0].college_name,
								data: alignedData,
								backgroundColor: this.palette[index],
								borderColor: this.palette[index],
								fill: false
							}
						})
						//add the overall county data to countyCollegeDatasets
						countyCollegeDatasets.push(countyCases)
						this.chart3data = {
							labels: timestamps,
							datasets: countyCollegeDatasets
						}
					})	 
				})
			})
		}
	},
	mounted () {
		this.$http.get('http://139.147.9.191:80/colleges').then(countResponse => {
			this.paletteSize = countResponse.data.length
			console.log(this.paletteSize)

			this.$http.get('http://139.147.9.191:80/counties').then(response => {
				this.counties = response.data
				this.countyPops = Object.assign({}, ...response.data.map(county => ({[county.name]: county.population})))
				this.selected = response.data[0].name //watchers load county-specific data into charts 1 & 3 for this default value
				this.paletteSize += response.data.length
				console.log(this.paletteSize)
				this.palette = randomColor({seed: 1234, count: this.paletteSize})

				let countyRequests = response.data.map((county) => this.$http.get('http://139.147.9.191:80/countydata', {params: {county_name: county.name}}))
				this.$http.all(countyRequests).then(counties => {
					let timestamps = counties[0].data.map( week => week.date.match(/[^T]*/i)[0])
					let countyIncidenceDatasets = counties.map((county, index) => {
						return {
							label: county.data[0].county_name,
							data: county.data.map( week => {
								return (1000 * week.new_cases / this.countyPops[week.county_name])
							}),
							backgroundColor: this.palette[index ],
							borderColor: this.palette[index],
							fill: false
						}

						
					})

					let valleyTotalCases = []
					let valleyTotalIncidence = []
					let total = 0
					let populationTotal = 0

					for(var i in this.countyPops){
						populationTotal += this.countyPops[i]
					}

					for (let i = 0; i < counties[0].data.length; i++){
						total = 0
						for (const county of counties){
							total += county.data[i].new_cases
						}
						valleyTotalCases.push(total)
						valleyTotalIncidence.push((total / populationTotal) * 1000)
					}
					let valleyTotalsDataset = {
						label: "Lehigh Valley Cases",
						data: valleyTotalCases,
						backgroundColor: '#f27997',
						borderColor: '#f27997',
						fill: false
					}
					let valleyIncidenceDataset = {
						label: "Lehigh Valley Incidence",
						data: valleyTotalIncidence,
						backgroundColor: '#3D2B56',
						borderColor: '#3D2B56',
						fill: false
					}

					countyIncidenceDatasets.push(valleyIncidenceDataset)

					this.chart2data = {
						labels: timestamps,
						datasets: countyIncidenceDatasets
					}

					this.$http.get('http://139.147.9.191:80/colleges').then(collegesResponse => {

						let collegeRequests = collegesResponse.data.map(college => this.$http.get('http://139.147.9.191:80/collegedata', {params: {college_name: college.name}}))
					
						this.$http.all(collegeRequests).then( colleges => {
							//valleyCollegeDatasets contains a dataset for every college in the Lehigh Valley.
							let valleyCollegeDatasets = colleges.map((college, index) => {
								//we need to pad out the left side of our dataset because college records don't extend as far back as county records
								let alignedData = new Array(timestamps.length - college.data.length).fill(0).concat(college.data.map(week => week.new_cases))
								
								return {
									label: college.data[0].college_name,
									data: alignedData,
									backgroundColor: this.palette[index],
									borderColor: this.palette[index],
									fill: false
								}
							})
							//add the overall county data to countyCollegeDatasets
							valleyCollegeDatasets.push(valleyTotalsDataset)
							
							this.chart4data = {
								labels: timestamps,
								datasets: valleyCollegeDatasets
							}
						})
					})
				})
			})
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
