import NodePalette from '../../interface/nodepalette/NodePalette.vue';
import PropertiesPanel from '../../interface/propertiespanel/PropertiesPanel.vue';
import { loadNodes } from '../../../utils/loadNodes';
import { useTabManagement } from './composables/useTabManagement';
import { useNodeManagement } from './composables/useNodeManagement';

import { provide } from 'vue';

export default {
  name: 'TabContainer',
  components: {
    NodePalette,
    PropertiesPanel,
    ...loadNodes()
  },
  setup() {
    // Usar el composable para la gestión de pestañas
    const { tabs, activeTab, selectTab, addTab, removeTab } = useTabManagement();
  
    // Usar el composable para la gestión de nodos
    const {nodes, selectedNode, addNodeToCanvas, handleNodeSelected, updateNodeProperties } = useNodeManagement();

    // Proveer tabs y activeTab para los componentes hijos
    provide('tabs', tabs);
    provide('activeTab', activeTab);

    // Definir logNodes
    const logNodes = () => {
      console.log('Nodos en la pestaña activa:', tabs.value[activeTab.value].nodes);
    };

    return {
      tabs,
      activeTab,
      selectedNode, // Exportamos el nodo seleccionado
      nodes, // Exportamos los nodos gestionados
      selectTab,
      addTab,
      removeTab,
      handleNodeSelected, // Función para seleccionar el nodo
      addNodeToCanvas,
      updateNodeProperties,
      logNodes
    };
  }
};
