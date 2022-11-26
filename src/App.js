import React, { useState } from 'react'
import MyGraph from './components/MyGraph/MyGraph'


const App = () => {
  
  const [data, setData] = useState(
    [
        { "object": "Sports", "linkType": "Какое-то действие", "dependentObject": "Water sports" },
        { "object": "Water sports", "linkType": "Какое-то действие", "dependentObject": "Water aerobics" },
        { "object": "Water aerobics", "linkType": "Какое-то действие", "dependentObject": "Здоровье" },
        { "object": "Water aerobics", "linkType": "Какое-то действие", "dependentObject": "Сила" },
        { "object": "Water aerobics", "linkType": "Какое-то действие", "dependentObject": "Выносливость" },
        { "object": "Water sports", "linkType": "Какое-то действие", "dependentObject": "Swimming" },
        { "object": "Water sports", "linkType": "Действие", "dependentObject": "Diving" },
        { "object": "Diving", "linkType": "Действие", "dependentObject": "Дахытельная система" },
        { "object": "Diving", "linkType": "Действие", "dependentObject": "Интерес" },
        { "object": "Water sports", "linkType": "Действие", "dependentObject": "Water Polo" },
        { "object": "Sports", "linkType": "Действие", "dependentObject": "Team sports" },
        { "object": "Team sports", "linkType": "Действие", "dependentObject": "Basketball" },
        { "object": "Team sports", "linkType": "Действие", "dependentObject": "Baseball" },
        { "object": "Team sports", "linkType": "Еще какое-то действие", "dependentObject": "Football" },
        { "object": "Team sports", "linkType": "Действие", "dependentObject": "Hockey" },
        { "object": "Sports", "linkType": "Действие", "dependentObject": "Individual sports" },
        { "object": "Individual sports", "linkType": "Еще какое-то действие", "dependentObject": "Tennis" },
        { "object": "Individual sports", "linkType": "Еще какое-то действие", "dependentObject": "Golf" },
        { "object": "Individual sports", "linkType": "Еще какое-то действие", "dependentObject": "Cycling" },
        { "object": "Individual sports", "linkType": "Действие 2", "dependentObject": "Track" },
        { "object": "Individual sports", "linkType": "Действие 2", "dependentObject": "Swimming" },
        { "object": "Sports", "linkType": "Действие 2", "dependentObject": "Contact sports" },
        { "object": "Contact sports", "linkType": "Действие 2", "dependentObject": "Rugby" },
        { "object": "Contact sports", "linkType": "Действие 2", "dependentObject": "Soccer" },
        { "object": "Contact sports", "linkType": "Действие 2", "dependentObject": "Boxing" },
        { "object": "Contact sports", "linkType": "Действие 2", "dependentObject": "MMA" },
        { "object": "Contact sports", "linkType": "Действие 2", "dependentObject": "Basketball" },
        // { "object": "Инсулин", "linkType": "Повышает", "dependentObject": "Ожирение" },
        // { "object": "Инсулин", "linkType": "Повышает", "dependentObject": "Сахар" },
        // { "object": "Сахар", "linkType": "Повышает", "dependentObject": "Ожирение" },
        // { "object": "Инсулин", "linkType": "Понижает", "dependentObject": "Смерть" },
        // { "object": "Ожирение", "linkType": "Повышает", "dependentObject": "Рак" },
        // { "object": "Инсулин", "linkType": "Повышает", "dependentObject": "Что-то не знаю что, нужен большой текст" },
        // { "object": "Что-то не знаю что, нужен большой текст", "linkType": "Делает что-то с длинным текстом", "dependentObject": "Тоже большой текст, чтобы было видно отбражение" },
        // { "object": "Что-то не знаю что, нужен большой текст", "linkType": "Повышает", "dependentObject": "Смерть" }
    ]
  ) 

  return (
    <div>
      <MyGraph data={data}/>
    </div>
  );

}

export default App