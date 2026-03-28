
// 👉 Redirects
export const redirects = [
  {
    path: '/',
    name: 'index',
    redirect: to => ({ name: 'home-Recomendaciones', query: to.query }),
    meta: {
      requiresAuth: true,
    },
  },
]

// 👉 Additional routes
export const routes = [
  {
    path: '/empresas',
    name: 'empresas-EmpresaList',
    component: () => import('@/views/empresas/EmpresaList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/periodos',
    name: 'periodos-PeriodoList',
    component: () => import('@/views/periodos/PeriodoList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/reportes',
    name: 'reportes-ReportList',
    component: () => import('@/views/reportes/ReportList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutoriales',
    name: 'tutoriales-TutorialList',
    component: () => import('@/views/soporte/TutorialesList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/soporte',
    name: 'soporte-SoporteList',
    component: () => import('@/views/soporte/SoporteList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/auditoria',
    name: 'auditoria-AuditDashboard',
    component: () => import('@/views/auditoria/AuditDashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/reportes/reportviewer/ReportViewerPage',
    name: 'reportes-ReportViewerPage',
    component: () => import('@/views/reportes/reportViewer/ReportViewerPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/logs',
    name: 'logs-LogsDashboard',
    component: () => import('@/views/logs/LogsDashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/performance',
    name: 'performance-PerformanceDashboard',
    component: () => import('@/views/performance/PerformanceDashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'home-Recomendaciones',
    component: () => import('@/views/home/Recomendaciones.vue'),
    meta: {
      requiresAuth: true,
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },
]
