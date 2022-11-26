import React, { useMemo, useState } from 'react'
import Graph, {getSeed} from "react-graph-vis";

const MyGraph = ({data}) => {

    const options = {
        layout: {
          // hierarchical: false,
          hierarchical: {
            enabled: false,
            // nodeSpacing: 400,
            // levelSeparation: 400,
            // parentCentralization: true,
            // blockShifting: true,
            // improvedLayout: false
          },
          randomSeed: 1

        },
        edges: {
            color: "#000000",
            width: 2,
            length: 400,  
            font: {
                align: 'middle',
                size: 18,
                background: '#fff',
            },
            widthConstraint: {
                minimum: 100,
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
                color: '#fff'
            },
            color: '#000',
            
        },
        height: '650px',
        interaction: {
            dragNodes: false
        },
        physics: {
          enabled: true,
          barnesHut: {
            centralGravity: 0,
            gravitationalConstant: -50000,
          },         
        }
      };

     
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

      const getEdgesList = (data) => {
        return data.map((el) => {
            return {
                from: el.object, to: el.dependentObject, label: el.linkType
            }
        })
      }

      const [graph, setGraph] = useState({})
      

      const nodes = getNodesList(data) 
      const edges = getEdgesList(data)
      useMemo(() => setGraph({

        nodes: nodes,
        edges: edges
      }), [])




  return (
    <div>
         <Graph
      graph={graph}
      options={options}
    />
    </div>
  )
}

export default MyGraph