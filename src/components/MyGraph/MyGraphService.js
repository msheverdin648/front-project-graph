
// Создает нужные данные из входных данных
// Рекурсивный обход входных данных
export const createGraphData = (data, rootElement) => {
    const dependent = data.filter(el => el.object === rootElement && el.object !== el.dependentObject )
    const nodes_list = []
    nodes_list.push(...dependent)
    dependent.forEach(el=>{
        nodes_list.push(...createGraphData(data, el.dependentObject))
        return nodes_list
    })
    return nodes_list
}

//  Создает список узлов
export const getNodesList = (data, rootElement) => {
    const objectList = data.map(el => {
        return el.object
    })
    const dependentObjectsList = data.map(el => {
        return el.dependentObject
    })
    const nodes = Array.from(new Set(objectList.concat(dependentObjectsList)))

    const result = nodes.map((el) => {
        return { id: el, label: el}
    })
    return result.length === 0 ? [{ id: rootElement, label: rootElement}] : result
}


// Создает список зависимостей между узлами
export const getEdgesList = (data) => {
    return data.map((el) => {
        return {
            from: el.object, to: el.dependentObject, label: el.linkType, title: el.description
        }
    })
}