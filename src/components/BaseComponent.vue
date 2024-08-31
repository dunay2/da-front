<template>
    <vue-draggable-resizable 
      :x="componentData.x" 
      :y="componentData.y" 
      :w="componentData.w" 
      :h="componentData.h" 
      @dragging="onDrag" 
      @resizing="onResize"
      @dblclick.stop="onDoubleClick"
    >
      <div>
        <h4>{{ componentData.name }}</h4>
        <slot></slot>
      </div>
    </vue-draggable-resizable>
  </template>
  
  <script>
  import VueDraggableResizable from 'vue-draggable-resizable';
  
  export default {
    name: 'BaseComponent',
    components: {
      VueDraggableResizable
    },
    props: {
      componentData: {
        type: Object,
        required: true
      }
    },
    methods: {
      onDrag(x, y) {
        this.$emit('update-position', this.componentData.id, x, y);
      },
      onResize(w, h) {
        this.$emit('update-size', this.componentData.id, w, h);
      },
      onDoubleClick() {
        this.$emit('open-config', this.componentData);
      },
      updatePosition(id, x, y) {
        this.$emit('update-position', id, x, y);
      },
      updateSize(id, w, h) {
        this.$emit('update-size', id, w, h);
      },
      openConfig(data) {
        this.$emit('open-config', data);
      }
    }
  };
  </script>
  