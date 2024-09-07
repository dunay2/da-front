import { reactive, toRefs, ref } from 'vue';

export function useCommonProperties( initialPosition = { x: 10, y: 10 }) {
const state = reactive({
    id: `node-${Date.now()}`,
    nombre: '',
    estado: {
        activo: true,
        visible: true,
    },
    positionX:  ref(initialPosition.x), // Inicializa la posición X
    positionY: ref(initialPosition.y), // Inicializa la posición Y
    color: '#FFFFFF', // Inicializa el color con un valor por defecto
    propiedades: new Map(),
    });

    return {
    ...toRefs(state)
    };
}
