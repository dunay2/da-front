<template>
  <div class="canvas-main">
    <div class="tabs">
      <!-- Button to add new tabs -->
      <button @click="addTab">+ New Tab</button>

      <!-- Render each tab -->
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: tab.id === activeTab }"
        @click="setActiveTab(tab.id)"
      >
        {{ tab.name }}
      </div>
    </div>

    <div class="canvas-content">
      <!-- Display content based on the active tab -->
      <div v-if="activeTab">
        <p>You're viewing {{ getActiveTabName() }}</p>

        <!-- Loop through components and display them -->
        <component
          v-for="component in tabs.find(tab => tab.id === activeTab).components"
          :is="getComponentType(component.type)"
          :key="component.id"
          :componentData="component"
          @update-position="updateComponentPosition"
          @update-size="updateComponentSize"
          @open-config="openComponentConfig"
        />
      </div>
      <p v-else>Welcome to the Canvas! Start by adding a component.</p>
    </div>

    <!-- Add the Floating Menu here -->
    <FloatingMenu @add-component="addComponent" />

    <!-- Add a modal for component configuration -->
    <div v-if="selectedComponent" class="modal">
      <h2>Configure {{ selectedComponent.type }}</h2>
      <input v-model="selectedComponent.name" placeholder="Component Name" />
      <!-- Add other configuration options here -->
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
import "./../assets/css/CanvasMain.css";
import FloatingMenu from './FloatingMenu.vue';
import TableComponent from './TableComponent.vue';
import ViewComponent from './ViewComponent.vue';

export default {
  name: "CanvasMain",
  components: {
    FloatingMenu,
    TableComponent,
    ViewComponent
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "Tab 1", components: [] }
      ],
      activeTab: 1,
      nextTabId: 2,
      selectedComponent: null
    };
  },
  methods: {
    addTab() {
      const newTab = {
        id: this.nextTabId,
        name: `Tab ${this.nextTabId}`,
        components: []
      };
      this.tabs.push(newTab);
      this.activeTab = newTab.id;
      this.nextTabId++;
    },
    setActiveTab(tabId) {
      this.activeTab = tabId;
      this.selectedComponent = null;
    },
    getActiveTabName() {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      return activeTab ? activeTab.name : "";
    },
    addComponent(componentType) {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      if (activeTab) {
        const newComponent = {
          id: `comp-${Date.now()}`,
          type: componentType,
          x: 0,
          y: 0,
          w: 300,
          h: 150,
          name: '',
          columns: []
        };

        if (componentType === 'Table') {
          newComponent.name = `Table ${activeTab.components.length + 1}`;
          newComponent.columns = [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'varchar' },
            { name: 'created_at', type: 'timestamp' }
          ];
        } else if (componentType === 'View') {
          newComponent.name = `View ${activeTab.components.length + 1}`;
          newComponent.columns = [
            { name: 'column1', type: 'varchar' },
            { name: 'column2', type: 'int' },
            { name: 'column3', type: 'timestamp' }
          ];
        }

        activeTab.components.push(newComponent);
      }
    },
    getComponentType(type) {
      switch (type) {
        case 'Table':
          return 'TableComponent';
        case 'View':
          return 'ViewComponent';
        default:
          return null;
      }
    },
    updateComponentPosition(componentId, x, y) {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      const component = activeTab.components.find(c => c.id === componentId);
      if (component) {
        component.x = x;
        component.y = y;
      }
    },
    updateComponentSize(componentId, w, h) {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      const component = activeTab.components.find(c => c.id === componentId);
      if (component) {
        component.w = w;
        component.h = h;
      }
    },
    openComponentConfig(component) {
      if (component) {
        this.selectedComponent = component;
      }
    },
    closeModal() {
      this.selectedComponent = null;
    }
  }
};
</script>
