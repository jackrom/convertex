export function extractDependencies(formula) {

  const regex = /[a-zA-Z_][a-zA-Z0-9_]*/g

  return formula.match(regex) || []

}

export function buildDependencyGraph(formulas) {

  const graph = {}
  const reverseGraph = {}

  for (const [target, formula] of Object.entries(formulas)) {

    const deps = extractDependencies(formula)

    deps.forEach(dep => {

      if (!graph[dep]) graph[dep] = []

      graph[dep].push(target)

      if (!reverseGraph[target]) reverseGraph[target] = []

      reverseGraph[target].push(dep)

    })
  }

  return {
    graph,
    reverseGraph
  }
}
