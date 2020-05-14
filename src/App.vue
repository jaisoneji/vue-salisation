<template >
  <div id="app" class="bg-background-primary h-screen" :class="theme">
    <div class="navbar bg-background-secondary" :class="theme">
      <img src="https://img.icons8.com/nolan/64/coronavirus.png" class="p-2 mx-auto"/>
    </div>
    <Cards :theme="theme" :objDailySummary="objDailySummary"></Cards>
    <Chart/>

    <router-view></router-view>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import Chart from './components/Chart.vue'

//For Importing API Data
import {getLatestStats} from './services';

// import './assets/css/main.css'

export default {
  name: 'App',
  async mounted(){
    const data = await getLatestStats();
    const filteredData = (data.data.summary)
    this.objDailySummary.lastRefreshed= data.data.lastRefreshed
    this.objDailySummary.confirmedButLocationUnidentified= filteredData.confirmedButLocationUnidentified
    this.objDailySummary.confirmedCasesForeign= filteredData.confirmedCasesForeign
    this.objDailySummary.confirmedCasesIndian= filteredData.confirmedCasesIndian
    this.objDailySummary.deaths= filteredData.deaths
    this.objDailySummary.discharged= filteredData.discharged
    this.objDailySummary.total= filteredData.total


  },
  components: {
    Cards,
    Chart
  },
  data(){
    return{
      // Stats of Daily
      objDailySummary:{
        lastRefreshed: '',
        confirmedButLocationUnidentified: '',
        confirmedCasesForeign:'',
        confirmedCasesIndian: '',
        deaths: '',
        discharged: '',
        total: ''
      },



      theme:'theme-dark'
    }
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
