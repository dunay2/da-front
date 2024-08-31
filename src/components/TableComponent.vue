<template>
    <vue-draggable-resizable 
      :x="table.data.x" 
      :y="table.data.y" 
      :w="table.data.w" 
      :h="table.data.h" 
      @dragging="onDrag" 
      @resizing="onResize"
      @dblclick.stop="onDoubleClick"
    >
      <div class="table-component">
        <h4>{{ table.data.name }}</h4>
        <ul>
          <li v-for="column in table.data.columns" :key="column.name">{{ column.name }}: {{ column.type }}</li>
        </ul>
      </div>
    </vue-draggable-resizable>
  </template>
  
  <script>
  import VueDraggableResizable from 'vue-draggable-resizable';
  import "./../assets/css/TableComponent.css";
  
  export default {
    name: 'TableComponent',
    components: {
      VueDraggableResizable
    },
    props: {
      table: {
        type: Object,
        required: true
      }
    },
    methods: {
      onDrag(x, y) {
        this.$emit('update-position', this.table.id, x, y);
      },
      onResize(w, h) {
        this.$emit('update-size', this.table.id, w, h);
      },
      onDoubleClick() {
        this.$emit('open-config', this.table);
      }
    }
  };
  </script>
  