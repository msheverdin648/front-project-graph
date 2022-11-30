import React, { useState } from 'react'
import MyGraph from './components/MyGraph/MyGraph'
import { GraphContext } from './context'
import './styles/App.css'

const App = () => {

  const [zoomView, setZoomView] = useState(false)


  const [data] = useState(
      [
        {"object":"1","linkType":"1->2","dependentObject":"2", 'description': ''},
        // {"object":"1","linkType":"1->3","dependentObject":"3"},
        // {"object":"1","linkType":"1->4","dependentObject":"4"},
        // {"object":"1","linkType":"1->5","dependentObject":"5"},
        // {"object":"2","linkType":"2->6","dependentObject":"6"},
        {"object":"2","linkType":"2->4","dependentObject":"4", 'description': 'description 2->4'},
        // {"object":"3","linkType":"3->4","dependentObject":"4"},
        {"object":"4","linkType":"4->7","dependentObject":"7", 'description': 'description 4->7'},
        // {"object":"1","linkType":"Влияет на","dependentObject":"То что указано тут"},
        // {"object":"То что указано тут","linkType":"Влияет на","dependentObject":"Вот это"},
      ]
  ) 

  return (
    <GraphContext.Provider value={{
      zoomView,
      setZoomView
    }}>
      <div className='App' onClick={e => setZoomView(false)}>
      <MyGraph data={data} height={'600px'} width={'600px'} rootElement='1'/>
    </div>
    </GraphContext.Provider>
  );

}

export default App