export const clientLogos = [
  // Clientes da primeira fileira
  {
    name: 'Cliente 1',
    logo: {
      name: 'ClientLogo1',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M20,50 A30,30 0 1,1 80,50 A30,30 0 1,1 20,50 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '4' }),
        h('text', { x: '50', y: '55', 'font-size': '14', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 1')
      ])
    }
  },
  {
    name: 'Cliente 2',
    logo: {
      name: 'ClientLogo2',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('polygon', { points: '50,20 80,40 65,80 35,80 20,40', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '55', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 2')
      ])
    }
  },
  {
    name: 'Cliente 3',
    logo: {
      name: 'ClientLogo3',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('rect', { x: '20', y: '20', width: '60', height: '60', rx: '10', ry: '10', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '55', 'font-size': '14', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 3')
      ])
    }
  },
  {
    name: 'Cliente 4',
    logo: {
      name: 'ClientLogo4',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M30,30 L70,30 L70,70 L30,70 Z M30,50 L70,50 M50,30 L50,70', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '85', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 4')
      ])
    }
  },
  {
    name: 'Cliente 5',
    logo: {
      name: 'ClientLogo5',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M20,50 L40,30 L60,30 L80,50 L60,70 L40,70 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '52', 'font-size': '10', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 5')
      ])
    }
  },
  {
    name: 'Cliente 6',
    logo: {
      name: 'ClientLogo6',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M30,35 A20,20 0 0,1 50,15 A20,20 0 0,1 70,35 L70,70 L30,70 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '50', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 6')
      ])
    }
  },
  
  // Segunda fileira de clientes
  {
    name: 'Cliente 7',
    logo: {
      name: 'ClientLogo7',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M20,20 L80,20 L80,80 L20,80 Z M20,40 L80,40 M40,40 L40,80', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '30', 'font-size': '10', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 7')
      ])
    }
  },
  {
    name: 'Cliente 8',
    logo: {
      name: 'ClientLogo8',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('circle', { cx: '30', cy: '40', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('circle', { cx: '70', cy: '40', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('path', { d: 'M30,55 Q50,80 70,55', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '90', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 8')
      ])
    }
  },
  {
    name: 'Cliente 9',
    logo: {
      name: 'ClientLogo9',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M30,30 L70,30 L70,70 L30,70 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('line', { x1: '30', y1: '30', x2: '70', y2: '70', stroke: 'currentColor', 'stroke-width': '3' }),
        h('line', { x1: '30', y1: '70', x2: '70', y2: '30', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '90', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 9')
      ])
    }
  },
  {
    name: 'Cliente 10',
    logo: {
      name: 'ClientLogo10',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('polygon', { points: '50,20 20,80 80,80', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '60', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 10')
      ])
    }
  },
  {
    name: 'Cliente 11',
    logo: {
      name: 'ClientLogo11',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M25,30 L75,30 Q85,30 85,40 L85,60 Q85,70 75,70 L25,70 Q15,70 15,60 L15,40 Q15,30 25,30 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '55', 'font-size': '11', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 11')
      ])
    }
  },
  {
    name: 'Cliente 12',
    logo: {
      name: 'ClientLogo12',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M50,20 L20,50 L50,80 L80,50 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('circle', { cx: '50', cy: '50', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }),
        h('text', { x: '50', y: '55', 'font-size': '8', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 12')
      ])
    }
  },
  
  // Terceira fileira de clientes (adicione mais conforme necessário)
  {
    name: 'Cliente 13',
    logo: {
      name: 'ClientLogo13',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M20,50 Q35,20 50,50 Q65,80 80,50', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '85', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 13')
      ])
    }
  },
  {
    name: 'Cliente 14',
    logo: {
      name: 'ClientLogo14',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('path', { d: 'M30,30 L70,30 M30,50 L70,50 M30,70 L70,70', stroke: 'currentColor', 'stroke-width': '5', 'stroke-linecap': 'round' }),
        h('text', { x: '50', y: '90', 'font-size': '12', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 14')
      ])
    }
  },
  {
    name: 'Cliente 15',
    logo: {
      name: 'ClientLogo15',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', class: 'client-logo-svg' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('circle', { cx: '35', cy: '35', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('circle', { cx: '65', cy: '35', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('circle', { cx: '35', cy: '65', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('circle', { cx: '65', cy: '65', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' }),
        h('text', { x: '50', y: '50', 'font-size': '10', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENTE 15')
      ])
    }
  }
];

// Helper function for rendering in Vue 3
function h(tag, props, children) {
  return { tag, props, children };
}
