<template>
    <div class="floating-menu">
    <h3>Add Component</h3>
    <ul>
        <li @click="addComponent('Table')">Table</li>
        <li @click="addComponent('View')">View</li>
        <li @click="addComponent('Transformation')">Transformation</li>
        <li @click="addComponent('Input/Output')">Input/Output</li>
    </ul>
    </div>
</template>

<script>
import "./../assets/css/FloatingMenu.css";

export default {
    name: 'FloatingMenu',
    methods: {
    addComponent(type) {
        this.$emit('add-component', type);
}
    }
};
</script>
