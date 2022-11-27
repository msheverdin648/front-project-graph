import React, { useMemo, useState } from 'react'
import classes from './MyGraph.module.css'
import Graph from "react-graph-vis";

const MyGraph = ({data, rootElement}) => {


    const [graph, setGraph] = useState({})
    const [graphIsCreated, setGraphIsCreated] = useState(false)

    const options = {
        layout: {
          hierarchical: {
            enabled: false,
            // nodeSpacing: 400,
            // levelSeparation: 400,
            // parentCentralization: true,
            // blockShifting: true,
            // improvedLayout: false
          },
          randomSeed: 2

        },
        edges: {
            color: graphIsCreated ? "#fff" : 'transparent',
            width: 2,
            length: 400,  
            font: {
                align: 'middle',
                size: 18,
                background: graphIsCreated ? "#29292E" : 'transparent',
                color: graphIsCreated ? "#fff" : 'transparent',
                strokeWidth: 0,
            },
            widthConstraint: {
                maximum: 200
            },
          
        },
        nodes: {
            shape: 'circle',
            widthConstraint: {
                minimum: 100,
                maximum: 200
            },
            font: {
                align: 'center',
                size: 24,
                color: graphIsCreated ? "#fff" : 'transparent'
            },
            color: graphIsCreated ? "#1CAE84" : 'transparent',
            
        },
        interaction: {
            dragNodes: false
        },
        physics: {
          enabled: true,
          barnesHut: {
            centralGravity: 0,
            gravitationalConstant: -50000,
          },         
        },
        
      };

    const events = {
      stabilized: (e) => {setGraphIsCreated(true)},
    }
      

      // Создает нужные данные из входных данных
      const createGraphData = (data, rootElement) => {
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
      const getNodesList = (data) => {
        const objectList = data.map(el => {
            return el.object
        })

        const dependentObjectsList = data.map(el => {
            return el.dependentObject
        })

        const nodes = Array.from(new Set(objectList.concat(dependentObjectsList)))
        
        return nodes.map((el, index) => {
            return { id: el, label: el }
        })
      }


      // Создает список зависимостей между узлами
      const getEdgesList = (data) => {
        return data.map((el) => {
            return {
                from: el.object, to: el.dependentObject, label: el.linkType
            }
        })
      }
      const graphData = createGraphData(data, rootElement)
      const nodes = getNodesList(graphData) 
      const edges = getEdgesList(graphData)
      
      useMemo(() => {
        setGraph({
          nodes: nodes,
          edges: edges
        })
      }, [])
      


        return (
    <div className={classes.container}>
      {
        graphIsCreated
        ? null
        : 
         <h1 style={{color: '#fff'}}>
          Загрузка
         </h1>
      }
         <Graph
          graph={graph}
          options={options}
          events={events}
        />
    </div>
  )
}

export default MyGraph