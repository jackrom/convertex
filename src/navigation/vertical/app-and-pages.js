export default [
  { heading: 'Apps & Pages' },
  {
    title: 'Empresas',
    to: 'empresas-EmpresaList',
  },
  {
    title: 'Periodos',
    to: 'pages-periodos-list',
  },
  {
    title: 'Reportes',
    to: 'pages-supercias-list',

    /*
    icon: { icon: 'tabler-file' },
    children: [
      { title: 'NuevoTXT', to: 'pages-supercias-txt' },
      { title: 'Reportes', to: 'pages-supercias-list' },
    ],
     */
  },
  {
    title: 'Auditoría',
    icon: 'mdi-shield-check',
    to: '/auditoria/audit-dashboard',
  },
  {
    title: 'Performance',
    icon: 'mdi-speedometer',
    to: '/auditoria/performance-dashboard',
  },
  {
    title: 'Logs',
    icon: 'mdi-file-alert-outline',
    to: '/logs/log-viewer',
  },
  /*
  {
    title: 'Flujos Dinámicos',
    to: 'pages-flujos-list',
  },

  {
    title: 'AudioLibros',
    to: 'pages-audiolibros-list',
  },
  {
    title: 'SRI',
    icon: { icon: 'tabler-file' },
    children: [
      { title: 'Reportes', to: 'pages-sri-list' },
      { title: 'NuevoF101', to: 'pages-sri-f101' },
    ],
  },
  */
]
