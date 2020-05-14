<template>
  <div class="w-full overflow-hidden md:w-1/2 mt-16">
    <div ref="map" class="map md:w-11/12 h-screen overflow-hidden" :class="theme"></div>
  </div>
</template>

<script>
// For API import
import {getStateLatestStats} from '../services';

//For importing Map
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_indiaHigh from "@amcharts/amcharts4-geodata/indiaHigh"

export default {
  name: 'Chart',
  props:['theme'],

  async mounted(){
      // Getting State Data
  
    const data = await getStateLatestStats();
    const filteredData = (data.data.regional)
    filteredData.forEach(obj => {
      this.statedata.push(obj)
      
    });
    console.log(this.statedata)
   
    // data.data.re

    // Creation of Chart
    
        let chart = am4core.create("map", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_indiaHigh;
        chart.responsive.enabled = true;


        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        polygonSeries.data=this.tempstatedata

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}: {value}"
        if (this.theme === 'theme-dark') {
          polygonTemplate.fill = am4core.color('#102C44');
        } else {
          polygonTemplate.fill = am4core.color('#fff');
        }
        // polygonTemplate.fill = am4core.color('getMapColor');

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#1E3951");
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
  }},
  data(){
    return{
      chart:'',
      statedata:[],
      tempstatedata:[
      
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
