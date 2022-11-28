import React, { useMemo, useState } from 'react'
import classes from './MyGraph.module.css'
import Graph from "react-graph-vis";
import { createGraphData, getEdgesList, getNodesList } from './MyGraphService';
import MyGraphPopup from "./MyGraphPopup/MyGraphPopup"


const MyGraph = ({data, rootElement, height, width }) => {


    const [graph, setGraph] = useState({})
    const [graphIsCreated, setGraphIsCreated] = useState(false)
    const [graphData] = useState(createGraphData(data, rootElement))
    const [network, setNetwork] = useState()
    const [tooltip, setTooltip] = useState()

    const options = {
      autoResize: false,
        layout: {
          hierarchical: {
            enabled: false,
          },
          randomSeed: 1

        },
        edges: {
            color: graphIsCreated ? "#000" : 'transparent',
            width: 2,
            length: 400,  
            font: {
                align: 'middle',
                size: 18,
                background: graphIsCreated ? "#fff" : 'transparent',
                color: graphIsCreated ? "#000" : 'transparent',
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
            margin: 10,
            font: {
                align: 'center',
                size: 24,
                color: graphIsCreated ? "#fff" : 'transparent'
            },
            color: graphIsCreated ? "#000" : 'transparent',
            
        },
        interaction: {
            dragNodes: false
        },
        physics: {
          enabled: true,
          barnesHut: {
            centralGravity: 0.5,
            gravitationalConstant: -50000,
          },         
          timestep: 3,
        },
        height: height,
        width: width
      };

    const events = {
      stabilized: () => {setGraphIsCreated(true)},
        selectEdge: (e) => {
          const position = e.pointer.DOM
          const edge = network.getBaseEdges(e.edges)[0]
          const text = network.body.edges[edge].options.title
          setTooltip(<MyGraphPopup text={text} coordinates={position}/>)
        }, 
        deselectEdge: (e) => {
          setTooltip()
        },
    }
      
      useMemo(() => {
        setGraph({
          nodes: getNodesList(graphData, rootElement),
          edges: getEdgesList(graphData)
        })
      }, [])
      
        return (

    <div className={classes.container} style={{width: width, height: height}}>
      {
        graphIsCreated
        ? null
        : 
         <h1 className={classes.text}>
          Загрузка
          <span className={classes.loading}></span>
         </h1>
      }
      {
        tooltip
        ? tooltip
        :
        null
      }


         <Graph
          graph={graph}
          options={options}
          events={events}
          getNetwork={item => {setNetwork(item)}}
        />
    </div>
  )
}

export default MyGraph