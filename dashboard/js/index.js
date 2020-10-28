import {Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

const app = Vue.createApp()


const ourChart = {

	extends: Line,
	mixins: [reactiveProp],
	props: ['options'], //chartData prop is made automatically, and we can modify it
	mounted () {
		this.renderChart(this.chartdata, this.options)
	}
}
