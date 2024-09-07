//NodePalette.js
import { loadNodes } from '../../../utils/loadNodes';

export default {
  name: 'NodePalette',
  data() {
    const loadedNodes = loadNodes();
    return {
      nodes: Object.keys(loadedNodes).map(name => ({
        type: name.toLowerCase(),
        name: `${name.replace(/Node$/, '')} Node`
      }))
    };
  },
  methods: {
    addNode(node) {
      try {
        if (!node || !node.type || !node.name) {
          throw new Error('El nodo está mal definido');
        }
        console.log('Añadiendo nodo al canvas:', node);  // Asegúrate de que el nodo se vea correctamente antes de emitirlo.
        this.$emit('add-node', node);
      } catch (error) {
        console.error('Error al agregar nodo al canvas:', error.message);
      }
    }
  }
};
