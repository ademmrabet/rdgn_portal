import React from 'react'
import Cards from './Cards'

function Consultants() {
  return (
    <div className='consultants-cintainer'>
        <button className='adding-consultants'>Add</button>
        <button className='removing-consultants'>remove</button>
        <div className='Consultant-card'>
            <Cards/>
        </div>
    </div>
  )
}

export default Consultants