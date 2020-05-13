import Chart from "../components/Chart";
import VueRouter from 'vue-router';

const routes = [
    {
      path: '/Chart',
      name: 'chart',
      component: Chart
    }
  ]
  export default new VueRouter({routes});
