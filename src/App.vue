<template >
  <div id="app" class="bg-background-primary h-full overflow-hidden" :class="theme">
    <div class="navbar bg-background-secondary" :class="theme">
      <img src="https://img.icons8.com/nolan/64/coronavirus.png" class="p-2 mx-auto"/>
    </div>
    <Cards :theme="theme" :objDailySummary="objDailySummary"></Cards>
    <Chart :theme="theme" class="border-solid border-4 m-auto"></Chart>

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
    const filteredData = (data.data['unofficial-summary'])
    // console.log(data.data['unofficial-summary'])
    // console.log(filteredData[0].deaths)
    this.objDailySummary.lastRefreshed= data.data.lastRefreshed
    // this.objDailySummary.confirmedButLocationUnidentified= filteredData.confirmedButLocationUnidentified
    // this.objDailySummary.confirmedCasesForeign= filteredData[0].confirmedCasesForeign
    this.objDailySummary.Active= filteredData[0].active
    this.objDailySummary.deaths= filteredData[0].deaths
    this.objDailySummary.discharged= filteredData[0].recovered
    this.objDailySummary.total= filteredData[0].total


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
        total: '',
        Active:''
      },



      theme:'theme-dark'
    }
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
