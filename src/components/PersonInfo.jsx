import React from 'react'
import Header from './Header';
import Contacts from './Contacts';
import Languages from './Languages';
import Objectives from './Objectives';
export default function PersonInfo() {
  return (
    <div className='pInfo'>
      <Header/>
      <Contacts/>
      <Languages/>
      <Objectives/>
    </div>
  )
}
