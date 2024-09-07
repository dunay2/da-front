import { ref } from 'vue';

export function useTabManagement() {
  const tabs = ref([
    { name: 'Tab 1', nodes: [] },
    { name: 'Tab 2', nodes: [] }
  ]);
  const activeTab = ref(0);

  const selectTab = (index) => {
    activeTab.value = index;
  };

  const addTab = () => {
    tabs.value.push({ name: `Tab ${tabs.value.length + 1}`, nodes: [] });
  };

  const removeTab = (index) => {
    if (tabs.value.length <= 1) {
      console.log('No se puede eliminar la última pestaña.');
      return;
    }
    tabs.value.splice(index, 1);
    if (activeTab.value === index && tabs.value.length > 0) {
      activeTab.value = tabs.value.length - 1;
    }
  };

return {
    tabs,
    activeTab,
    selectTab,
    addTab,
    removeTab
  };
}
