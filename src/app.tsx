import './app.css'
import { useState } from "preact/hooks";
export const App = () => {
  const [arr, _setArray] = useState(Array.from({length: 15}, (_value, index) => index + 1));
  const numbers = Array.from({length: 10}, (_value, index) => index + 1)
  return (
    <>
       <h1 class="heading1"><span>Multiplication table chart</span></h1>
       <div class="numbers-table">
         {arr.length && arr.map((item,i) => (
              <>
                 <ul key={i} class="table-list">
                   {numbers.map((n,j) => <li key={j}>{item} * {n} = {(item) * (n)}</li>)}
                 </ul>
              </>
         ))}
      </div>
    </>
  )
}