//import { inject, onMounted, watch } from 'vue'; // Asegúrate de importar watch
import {onMounted, watch } from 'vue'; // Asegúrate de importar watch
import VueDraggableResizable from 'vue-draggable-resizable';
import { useCommonProperties } from '../../../composables/useCommonProperties';

export default {
  name: 'DraggableNodeComponent',
  components: {
    VueDraggableResizable
  },

  props: {
    initialId: {
      type: String,
      required: true
    }
    ,
    initialPosition: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // Pasar el ID desde props a useCommonProperties
    const {
      id,
      nombre,
      estado,
      positionX,
      positionY,
      color,
      propiedades
    } = useCommonProperties(props.initialId, props.initialPosition);

    console.log(`ID del componente hijo: ${id.value}`);

    // Inyectar tabs y activeTab
    //const tabs = inject('tabs');
    //const activeTab = inject('activeTab');

    watch([positionX, positionY], ([newX, newY]) => {
      console.log('Watch event triggered');
      console.log('Watch triggered: New Position:', newX, newY);
  });

    onMounted(() => {
      console.log('onMounted ejecutado para ID:', id.value);
      //console.log(`Mounted: ID ${id.value}, PositionX: ${positionX.value}, PositionY: ${positionY.value}`);
      //const currentTab = tabs.value[activeTab.value];
      //const nodeData = currentTab.nodes.find(node => node.id === id.value);

      //if (nodeData) {
      //  positionX.value = nodeData.position.x;
      //  positionY.value = nodeData.position.y;
      //  color.value = nodeData.color || color.value;
      //  estado.value = nodeData.estado || estado.value;
      //  console.log(`Propiedades restauradas para ${nombre}:`, positionX.value, positionY.value, color.value, estado.value);
      //}
    });

    const onDrag = () => {
      
      //const currentTab = tabs.value[activeTab.value];
      //const nodeIndex = currentTab.nodes.findIndex(node => node.id === id.value);

      
      console.log('Drag event triggered');
      console.log('Current position:', positionX.value, positionY.value);

      
      
//      const element = document.getElementById(id.value);
  
  //    if (element) {
  //      const rect = element.getBoundingClientRect();
   //     console.log('------------Real Position:', rect.left, rect.top);
   //   }
     // else{
       // console.log ('xxxxxxxxxxxxxxxxxxxxxxxxx');
      //}

      //console.log('--->>>' + nodeIndex);
      //console.log('--->>>' + id.value);
      //console.log('Current position:', positionX.value, positionY.value);
      //console.log('Buscando ID:', id.value);
      //console.log('Nodos en la pestaña actual:', currentTab.nodes);
      
      //if (nodeIndex !== -1) {
//        currentTab.nodes[nodeIndex].position.x = positionX.value;
  //      currentTab.nodes[nodeIndex].position.y = positionY.value;
    //    currentTab.nodes[nodeIndex].color = color.value;
      //  currentTab.nodes[nodeIndex].estado = estado.value;
       // console.log(`Propiedades guardadas para ID ${id.value}:`, positionX.value, positionY.value, color.value, estado.value);
      //}
    };

    //watch([positionX, positionY, color, estado], () => {
//      onDrag();  // Actualizar la posición, color y estado en el estado global cada vez que cambien
  //  });


    return {
      id,
      nombre,
      estado,
      propiedades,
      positionX,
      positionY,
      color,
      onDrag
    };
  }
};
