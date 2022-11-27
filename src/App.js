import React, { useState } from 'react'
import MyGraph from './components/MyGraph/MyGraph'
import './styles/App.css'

const App = () => {
  
  const [data] = useState(
      [
        {"object":"инсулин","linkType":"повышает","dependentObject":"сахар"},
        {"object":"сахар","linkType":"повышает","dependentObject":"что-то"},
        {"object":"инсулин","linkType":"понижает ","dependentObject":"смерть"},
        {"object":"инсулин","linkType":"еетет","dependentObject":"йцу"},
        {"object":"инсулин","linkType":"йцуывф","dependentObject":"йцуйцу"},
        {"object":"qwe","linkType":"qwe","dependentObject":"qwe"},
        {"object":"инсулин","linkType":"повышает","dependentObject":"ожирение"},
        {"object":"ожирение","linkType":"повышает","dependentObject":"рак"},
        {"object":"йцукенг","linkType":"повышает","dependentObject":"рак"},
        {"object":"рак","linkType":"повышает","dependentObject":"смерть"}
      ]
  ) 

  return (
    <div className='App'>
      <MyGraph data={data} height={'700px'} width={'100%'} rootElement='инсулин' />
    </div>
  );

}

export default App