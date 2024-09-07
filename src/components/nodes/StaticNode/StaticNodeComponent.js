import { useCommonProperties } from '../../../composables/useCommonProperties';

export default {
  name: 'StaticNodeComponent',
  setup() {
    const { id, nombre, estado, propiedades } = useCommonProperties();

    return { id, nombre, estado, propiedades };
  }
};
