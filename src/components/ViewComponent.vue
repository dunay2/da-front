<template>
    <BaseComponent 
      :componentData="view" 
      @update-position="updatePosition" 
      @update-size="updateSize"
      @open-config="openConfig"
    >
      <div class="view-component">
        <h4>{{ view.name || 'Unnamed View' }}</h4>
        <ul>
          <li v-for="column in view.columns" :key="column.name">
            {{ column.name }}: {{ column.type }}
          </li>
        </ul>
      </div>
    </BaseComponent>
  </template>
  
  <script>
  import BaseComponent from './BaseComponent.vue';
  import "./../assets/css/ViewComponent.css";
  
  export default {
    name: 'ViewComponent',
    components: {
      BaseComponent
    },
    props: {
      view: {
        type: Object,
        required: true,
        default: () => ({
          name: 'Unnamed View',
          columns: []
        })
      }
    },
    methods: {
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
  