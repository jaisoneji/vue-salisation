<template>
  <div id="chartdiv" :class="theme" class="w-11/12 h-80 m-auto"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  name: 'Graph',
  props:['theme','Series1','Series2','Series3','Series4'],

  mounted(){
      setTimeout(()=>{
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      var chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.paddingRight = 20;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.labels.template.rotation = -45;
      dateAxis.renderer.minGridDistance = 50;
      dateAxis.renderer.grid.template.location = 0.5;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.5;
      dateAxis.dateFormats.setKey("day", "MMMM dt");
      dateAxis.periodChangeDateFormats.setKey("day", "MMMM dt");
      dateAxis.renderer.labels.template.fill = am4core.color("#41b883");
      // dateAxis.groupData = true;
      // dateAxis.groupCount = 20

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minGridDistance = 20;
      valueAxis.renderer.labels.template.fill = am4core.color("#41b883");

      // Create series for Active Cases
      var series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "active";
      series1.dataFields.dateX = "day";
      series1.strokeWidth = 3;
      series1.tensionX = 0.8;
      // series1.bullets.push(new am4charts.CircleBullet());
      series1.data = this.Series1;
      series1.tooltipText = "Active:{active}";
      series1.tooltip.background.cornerRadius = 20;
      series1.tooltip.background.strokeOpacity = 0;
      series1.tooltip.pointerOrientation = "vertical";
      series1.tooltip.label.minWidth = 40;
      series1.tooltip.label.minHeight = 40;
      series1.tooltip.label.textAlign = "middle";
      series1.tooltip.label.textValign = "middle";
      

       // Create series for Confirmed Cases
      var Series2 = chart.series.push(new am4charts.LineSeries());
      Series2.dataFields.valueY = "confirmed";
      Series2.dataFields.dateX = "day";
      Series2.strokeWidth = 3;
      Series2.tensionX = 0.8;
      // Series2.bullets.push(new am4charts.CircleBullet());
      Series2.data = this.Series2;
      Series2.tooltipText = "Confirmed:{confirmed}";
      Series2.tooltip.background.cornerRadius = 20;
      Series2.tooltip.background.strokeOpacity = 0;
      Series2.tooltip.pointerOrientation = "vertical";
      Series2.tooltip.label.minWidth = 40;
      Series2.tooltip.label.minHeight = 40;
      Series2.tooltip.label.textAlign = "middle";
      Series2.tooltip.label.textValign = "middle";
    

       // Create series for Recovered Cases
      var Series3 = chart.series.push(new am4charts.LineSeries());
      Series3.dataFields.valueY = "recovered";
      Series3.dataFields.dateX = "day";
      Series3.strokeWidth = 3;
      Series3.tensionX = 0.8;
      // Series3.bullets.push(new am4charts.CircleBullet());
      Series3.data = this.Series3;
      Series3.tooltipText = "Recovered:{recovered}";
      Series3.tooltip.background.cornerRadius = 20;
      Series3.tooltip.background.strokeOpacity = 0;
      Series3.tooltip.pointerOrientation = "vertical";
      Series3.tooltip.label.minWidth = 40;
      Series3.tooltip.label.minHeight = 40;
      Series3.tooltip.label.textAlign = "middle";
      Series3.tooltip.label.textValign = "middle";


      // Create series for Death Cases
      var Series4 = chart.series.push(new am4charts.LineSeries());
      Series4.dataFields.valueY = "deaths";
      Series4.dataFields.dateX = "day";
      Series4.strokeWidth = 3;
      Series4.tensionX = 0.8;
      // Series4.bullets.push(new am4charts.CircleBullet());
      Series4.data = this.Series4;
      Series4.tooltipText = "Deaths:{deaths}";
      Series4.tooltip.background.cornerRadius = 20;
      Series4.tooltip.background.strokeOpacity = 0;
      Series4.tooltip.pointerOrientation = "vertical";
      Series4.tooltip.label.minWidth = 40;
      Series4.tooltip.label.minHeight = 40;
      Series4.tooltip.label.textAlign = "middle";
      Series4.tooltip.label.textValign = "middle";


      chart.cursor = new am4charts.XYCursor();

      },2000)



  },

  data(){
    return{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
