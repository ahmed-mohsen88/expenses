import React from 'react'
import Expensesform from '../expensesform/expensesform'

function Shower() {
const adding = (t,a,d)=>{

    console.log(t,a,d)
}

  return (
    <div>
        <Expensesform  onsaved={adding} />
    </div>
  )
}

export default Shower