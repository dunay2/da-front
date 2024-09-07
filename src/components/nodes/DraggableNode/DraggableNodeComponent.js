//import { ref } from 'vue';
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
      required: true  // Asegúrate de que se pase un id
    },
    initialPosition: {
      type: Object,
      required: true
    }
  },
  setup(props,{ emit }) {

    //const {      
     // id,
     // nombre,
     // estado,
     // positionX,
      //positionY,
      //color,
      //propiedades
    //} = useCommonProperties( props.initialPosition);

    const { id, positionX, positionY } = useCommonProperties(props.initialId, props.initialPosition);

    const onDrag = (x, y) => {
      console.log('Drag event triggered');
      console.log('Received new position:', x, y);
      positionX.value = x;
      positionY.value = y;
    };

    const selectNode = () => {
      console.log('Click! ' + id.value);
      emit('select-node', id.value);
    };

    return {
      id,
      //nombre,
      //estado,
     // propiedades,
      positionX,
      positionY,
      //color,
      onDrag,
      selectNode
    };
  }
};
