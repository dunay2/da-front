<template>
    <div>
      <h1>Testing Draggable Node Component</h1>
      <DraggableNodeComponent 
        :initial-id="'test-node-1'"
        :initial-position="{ x: 110, y: 100 }"
        
      />
    </div>
  </template>
  
  <script>
  import DraggableNodeComponent from './components/nodes/DraggableNode/DraggableNodeComponent.vue';
  
  export default {
    name: 'TestComponent',
    components: {
      DraggableNodeComponent
    }
  };
  </script>
  
  <style scoped>
  /* Agrega aquí cualquier estilo adicional para este componente */
  </style>
  