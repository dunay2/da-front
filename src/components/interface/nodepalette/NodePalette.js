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
      this.$emit('add-node', node);
    }
  }
};
