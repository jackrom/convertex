// ** Mock Adapter
import mock from '@/@fake-db/mock'

const database = [
  {
    id: 1,
    url: { name: 'dashboards-analytics' },
    icon: 'tabler-timeline',
    title: 'Dashboard',
    category: 'dashboards',
  },
  {
    id: 2,
    url: { name: 'pages-empresas-list' },
    icon: 'tabler-assembly',
    title: 'Empresas',
    category: 'appsPages',
  },
  {
    id: 3,
    url: { name: 'pages-periodos-list' },
    icon: 'tabler-playlist-add',
    title: 'Periodos',
    category: 'appsPages',
  },
  {
    id: 4,
    url: { name: 'pages-empresas-list' },
    icon: 'tabler-report-search',
    title: 'Reportes',
    category: 'appsPages',
  },
]


// ** GET Search Data
// eslint-disable-next-line sonarjs/cognitive-complexity
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: [],
  }

  const includeData = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: [],
  }

  database.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched && exactData[obj.category].length < 5)
      exactData[obj.category].push(obj)
  })
  database.forEach(obj => {
    const isMatched = !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
    if (isMatched && includeData[obj.category].length < 5)
      includeData[obj.category].push(obj)
  })

  const categoriesCheck = []

  Object.keys(exactData).forEach(category => {
    if (exactData[category].length > 0)
      categoriesCheck.push(category)
  })
  if (categoriesCheck.length === 0) {
    Object.keys(includeData).forEach(category => {
      if (includeData[category].length > 0)
        categoriesCheck.push(category)
    })
  }
  const resultsLength = categoriesCheck.length === 1 ? 5 : 3
  const mergedData = []

  Object.keys(exactData).forEach(element => {
    if (exactData[element].length || includeData[element].length) {
      const r = exactData[element].concat(includeData[element]).slice(0, resultsLength)

      r.unshift({ header: element, title: element })
      mergedData.push(...r)
    }
  })

  return [200, [...mergedData]]
})
