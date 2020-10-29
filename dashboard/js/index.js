const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

const app = Vue.createApp(Counter).mount('#counter')
