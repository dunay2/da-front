import NodePalette from '../../interface/nodepalette/NodePalette.vue';
import { loadNodes } from '../../../utils/loadNodes';
import { ref, provide } from 'vue';

export default {
  name: 'TabContainer',
  components: {
    NodePalette,
    ...loadNodes()
  },
  setup() {
    // Definir las tabs y la pestaña activa como refs reactivas
    const tabs = ref([
      { name: 'Tab 1', nodes: [] },
      { name: 'Tab 2', nodes: [] }
    ]);
    const activeTab = ref(0);

    // Proveer tabs y activeTab para los componentes hijos
    provide('tabs', tabs);
    provide('activeTab', activeTab);

    const selectTab = (index) => {
      activeTab.value = index;
    };

    const addTab = () => {
      tabs.value.push({ name: `Tab ${tabs.value.length + 1}`, nodes: [] });
    };

    const removeTab = (index) => {

    if (tabs.value.length <= 1) {
        console.log('No se puede eliminar la última pestaña.');
        return; // Salir de la función si solo queda una pestaña
        }

    tabs.value.splice(index, 1);
    if (activeTab.value === index && tabs.value.length > 0) {
        activeTab.value = tabs.value.length - 1;
    }
    
    };

    const addNodeToCanvas = (node) => {
      const newNode = {
       // id: `node-${Date.now()}`,
        nombre: 'pepe',//node.name,
        type: node.type,
        position: { x: 100, y: 200 } // Posición inicial del nodo
      };
      console.log('Tipo de nodo:', node.type);      
      console.log('Añadiendo nodo con ID:', newNode.id);
      tabs.value[activeTab.value].nodes.push(newNode);
      console.log('Nodo añadido:', newNode);
      console.log('Estado actual de las pestañas:', tabs.value);
    };

    const logNodes = () => {
      console.log('Nodos en la pestaña activa:', tabs.value[activeTab.value].nodes);
    };

    return {
      tabs,
      activeTab,
      selectTab,
      addTab,
      removeTab,
      addNodeToCanvas,
      logNodes
    };
  }
};
