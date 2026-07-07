import { useState } from 'react'
import type { ProduceItem } from './interfaces/Types'
import * as Data from './assets/JSONData'

import './App.css'

function App() {
  function showList(): ProduceItem[] {
    const produceList: ProduceItem[] = []

    for (let i = 0; i < Data.produceList.length; i++) {
      let element = Data.produceList[i];
      produceList.push(element);
    }
    console.log(produceList);
    return produceList;
  }

  return (
    <>
      <button onClick={showList}>Show List</button>
    </>
  )
}

export default App
