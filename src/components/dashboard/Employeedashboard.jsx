import React from 'react'
import Header from '../../others/Header'
import Tasklist from '../../others/Tasklist'
import Giventask from '../../others/Giventask'
const Employeedashboard = () => {
  return (
    <div className=" h-full w-full bg-gray-800 ">
    <Header></Header>
    <Tasklist></Tasklist>
    <Giventask></Giventask>
    </div>
  )
}

export default Employeedashboard