//import { ref } from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import { useCommonProperties } from '../../../composables/useCommonProperties';

export default {
  name: 'DraggableNodeComponent',
  components: {
    VueDraggableResizable
  },
  setup(props) {
    const {      
      id,
      nombre,
      estado,
      positionX,
      positionY,
      color,
      //propiedades
    } = useCommonProperties( props.initialPosition);

    const onDrag = (x, y) => {
      console.log('Drag event triggered');
      console.log('Received new position:', x, y);
      positionX.value = x;
      positionY.value = y;
    };

    return {
      id,
      nombre,
      estado,
     // propiedades,
      positionX,
      positionY,
      color,
      onDrag
    };
  }
};
