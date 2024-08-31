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
      <p v-if="activeTab">You're viewing {{ getActiveTabName() }}</p>
      <p v-else>Welcome to the Canvas! Start by adding a component.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CanvasMain",
  data() {
    return {
      tabs: [
        { id: 1, name: "Tab 1", components: [] } // Example initial tab
      ],
      activeTab: 1, // ID of the currently active tab
      nextTabId: 2 // ID for the next new tab
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
    },
    getActiveTabName() {
      const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
      return activeTab ? activeTab.name : "";
    },
    addComponent(componentType) {
      console.log(componentType);
    }
  }
};
</script>

<style scoped>
.canvas-main {
  /* Basic styles for the main canvas */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.tabs {
  /* Styles for the tab area */
  height: 40px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 10px;
}

.tab {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  margin-right: 5px;
  background-color: #f5f5f5;
}

.tab.active {
  background-color: #e9ecef;
  font-weight: bold;
}

.canvas-content {
  /* Styles for the canvas content area */
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: auto;
  padding: 20px;
}
</style>
