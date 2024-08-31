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
          :table="component"
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
      <input v-model="selectedComponent.data.name" placeholder="Component Name" />
      <!-- Add other configuration options here -->
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
import "./../assets/css/CanvasMain.css";
import FloatingMenu from './FloatingMenu.vue';
import TableComponent from './TableComponent.vue';

export default {
  name: "CanvasMain",
  components: {
    FloatingMenu,
    TableComponent
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "Tab 1", components: [] } // Example initial tab
      ],
      activeTab: 1, // ID of the currently active tab
      nextTabId: 2, // ID for the next new tab
      selectedComponent: null // Holds the currently selected component for configuration
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
      this.activeTab = newTab.id; // Automatically switch to the new tab
      this.nextTabId++;
    },
    setActiveTab(tabId) {
      this.activeTab = tabId;
      this.selectedComponent = null; // Reset selected component when switching tabs
    },
    getActiveTabName() {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      return activeTab ? activeTab.name : "";
    },
    addComponent(componentType) {
      console.log(`Adding component of type: ${componentType}`);
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      if (activeTab) {
        const newComponent = {
          id: `comp-${Date.now()}`,
          type: componentType,
          data: {
            x: 0,  // Initial X position
            y: 0,  // Initial Y position
            w: 300, // Initial width
            h: 150, // Initial height
            name: '',
            columns: []
          }
        };
        if (componentType === 'Table') {
          newComponent.data.name = `Table ${activeTab.components.length + 1}`;
          newComponent.data.columns = [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'varchar' },
            { name: 'created_at', type: 'timestamp' }
          ];
        }
        activeTab.components.push(newComponent);
      }
    },
    getComponentType(type) {
      switch (type) {
        case 'Table':
          return 'TableComponent';
        default:
          return null;
      }
    },
    updateComponentPosition(componentId, x, y) {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      const component = activeTab.components.find(c => c.id === componentId);
      if (component) {
        component.data.x = x;
        component.data.y = y;
      }
    },
    updateComponentSize(componentId, w, h) {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      const component = activeTab.components.find(c => c.id === componentId);
      if (component) {
        component.data.w = w;
        component.data.h = h;
      }
    },
    openComponentConfig(component) {
      this.selectedComponent = component;
    },
    closeModal() {
      this.selectedComponent = null;
    }
  }
};
</script>
