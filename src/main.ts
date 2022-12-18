import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';



import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import Camera from './components/Camera.vue';
import Capture from './components/Capture.vue';
import Graph from './components/Graph.vue';

import VueForceGraph3D from './components/graphcomponents/vue-force-graph-3d'
import GraphContextMenu from './components/graphcomponents/graph-context-menu'
import VueForceGraph2D from './components/graphcomponents/vue-force-graph-2d'
// import { VueForceGraphAR } from '@vue-force-graph/components'

const app = createApp(Graph)
app
    .use(GraphContextMenu)
    .use(VueForceGraph3D)
    .use(VueForceGraph2D)
// .use(VueForceGraphAR)
// .use(VueForceGraphVR)
app.mount('#identity')


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/camera', name: 'Camera', component: Camera },
    { path: '/capture', name: 'Capture', component: Capture },
    { path: '/graph', name: 'Graph', component: Graph },
  ],
});

createApp(App).use(router).mount('#app');
