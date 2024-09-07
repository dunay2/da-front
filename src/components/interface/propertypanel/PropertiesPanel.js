
export default {
    name: 'PropertiesPanel',
    props: {
        node: {
        type: Object,
        required: true
    }
    },
    setup(props) {
    // El modelo de datos que se edita se pasa a través de props.node
        return {
            node: props.node
        };
    }
};
