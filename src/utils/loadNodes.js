export function loadNodes() {
    const nodesContext = require.context(
      '../components/nodes', 
      true, 
      /[A-Za-z0-9-_,\s]+\.vue$/i
    );
  
    const nodes = nodesContext.keys().reduce((components, fileName) => {
      const componentConfig = nodesContext(fileName);
      const componentName = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
        .toLowerCase();
  
      components[componentName] = componentConfig.default || componentConfig;
      return components;
    }, {});
  
    return nodes;
  }
  