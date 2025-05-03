export const clientLogos = [
  {
    name: 'Client 1',
    logo: {
      name: 'ClientLogo1',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('text', { x: '50', y: '55', 'font-size': '16', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENT 1')
      ])
    }
  },
  {
    name: 'Client 2',
    logo: {
      name: 'ClientLogo2',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('text', { x: '50', y: '55', 'font-size': '16', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENT 2')
      ])
    }
  },
  {
    name: 'Client 3',
    logo: {
      name: 'ClientLogo3',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('text', { x: '50', y: '55', 'font-size': '16', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENT 3')
      ])
    }
  },
  {
    name: 'Client 4',
    logo: {
      name: 'ClientLogo4',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('text', { x: '50', y: '55', 'font-size': '16', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENT 4')
      ])
    }
  },
  {
    name: 'Client 5',
    logo: {
      name: 'ClientLogo5',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('text', { x: '50', y: '55', 'font-size': '16', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENT 5')
      ])
    }
  },
  {
    name: 'Client 6',
    logo: {
      name: 'ClientLogo6',
      render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' }, [
        h('rect', { width: '100', height: '100', fill: 'none' }),
        h('text', { x: '50', y: '55', 'font-size': '16', 'text-anchor': 'middle', fill: 'currentColor', 'font-weight': 'bold' }, 'CLIENT 6')
      ])
    }
  }
];

// Helper function for rendering in Vue 3
function h(tag, props, children) {
  return { tag, props, children };
}
