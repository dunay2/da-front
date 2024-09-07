import { ref } from 'vue';

export function useNodeManagement() {
  const selectedNode = ref(null); // Nodo seleccionado
  const nodes = ref(new Map());  // Usamos un Map para manejar los nodos por su ID

  const addNodeToCanvas = (node) => {
    if (!node || !node.type || !node.name) {
      console.error('El nodo está mal definido:', node);
      return;
    }

    const newNode = {
      id: `node-${Date.now()}`,
      nombre: node.name || 'Default Name',
      type: node.type,
      position: { x: 100, y: 200 }
    };

    nodes.value.set(newNode.id, newNode); // Añadir nodo al Map usando su ID como clave
    console.log('Nodo añadido al mapa:', newNode);
  };

  const handleNodeSelected = (nodeId) => {
    const node = nodes.value.get(nodeId);  // Buscar el nodo directamente por su ID en el Map
    if (node) {
      selectedNode.value = node;
      console.log('Nodo seleccionado:', node);
    } else {
      console.log('Nodo no encontrado.');
    }
  };

  const updateNodeProperties = () => {
    if (selectedNode.value) {
      const nodeId = selectedNode.value.id;
      if (nodes.value.has(nodeId)) {
        nodes.value.set(nodeId, { ...selectedNode.value });
        console.log('Nodo actualizado:', nodes.value.get(nodeId));
      }
    }
  };

  return {
    selectedNode,
    nodes,  // Exportamos el Map de nodos
    addNodeToCanvas,
    handleNodeSelected,
    updateNodeProperties
  };
}
