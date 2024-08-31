<template>
  <BaseComponent 
    :componentData="table" 
    @update-position="updatePosition" 
    @update-size="updateSize"
    @open-config="openConfig"
  >
    <div class="table-component">
      <h4>{{ table.name || 'Unnamed Table' }}</h4>
      <ul>
        <li v-for="column in table.columns" :key="column.name">{{ column.name }}: {{ column.type }}</li>
      </ul>
    </div>
  </BaseComponent>
</template>

<script>
import BaseComponent from './BaseComponent.vue';
import "./../assets/css/TableComponent.css";

export default {
  name: 'TableComponent',
  components: {
    BaseComponent
  },
  props: {
    table: {
      type: Object,
      required: true,
      default: () => ({
        name: 'Unnamed Table',
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
