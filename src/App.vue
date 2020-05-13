<template >
  <div id="app" class="bg-background-primary h-screen" :class="theme">
    <div class="navbar bg-background-secondary" >
      <img src="https://img.icons8.com/nolan/64/coronavirus.png" class="p-2 mx-auto"/>
    </div>
    <Cards/>
    <Chart/>

    <router-view></router-view>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import Chart from './components/Chart.vue'

// import './assets/css/main.css'

export default {
  name: 'App',
  components: {
    Cards,
    Chart
  },
  data(){
    return{
      theme:'theme-dark'
    }
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
