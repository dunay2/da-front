export default {
    props: {
        selectedNode: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateNodeProperties() {
            // Aquí puedes disparar un evento de actualización o realizar cualquier acción
            this.$emit('update-node', this.selectedNode);
        }
    }
};
