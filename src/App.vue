<template >
  <div id="app" class="bg-background-primary h-full overflow-hidden" :class="theme">
    <div class="navbar bg-background-secondary" :class="theme">
      <img src="https://img.icons8.com/nolan/64/coronavirus.png" class="p-2 mx-auto"/>
    </div>
    <Cards :theme="theme" :objDailySummary="objDailySummary"></Cards>
    <Graph :Series1="activeSeries" :Series2="confirmedSeries" :Series3="recoveredSeries" :Series4="deathSeries" :theme="theme" class="mt-12"></Graph>
    <Chart :theme="theme" class=""></Chart>
    
   
    
    
    
    <router-view></router-view>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import Chart from './components/Chart.vue'
import Graph from './components/Graph.vue'

//For Importing API Data
import {getLatestStats} from './services';
import {getCountryHistory} from './services';

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



    // For Graphs
    const data1=await getCountryHistory()
    data1.data.history.forEach((obj)=>{
      this.deathSeries.push({
        "day":obj.day,
        "deaths":obj.total.deaths
      })

      this.confirmedSeries.push({
        "day":obj.day,
        "confirmed":obj.total.confirmed
      })

      this.activeSeries.push({
        "day":obj.day,
        "active":obj.total.active
      })

      this.recoveredSeries.push({
        "day":obj.day,
        "recovered":obj.total.recovered
      })
    })
    


  },
  components: {
    Cards,
    Chart,
    Graph
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
      confirmedSeries:[],
      activeSeries:[],
      deathSeries:[],
      recoveredSeries:[],
      theme:'theme-dark',
      }
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
