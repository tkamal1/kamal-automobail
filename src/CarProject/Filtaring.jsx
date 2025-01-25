import React from 'react'
import Search from './Search'
import Filter from './Filter'
const Filtaring = ({searchitem,onSearchItem , onFilter,filter}) => {
  return (
    <div className='flex flex-row gap-4 p-4 mb-4'>
      <Search searchitem={searchitem} onSearchItem={onSearchItem}/>
      <Filter onFilter={onFilter} filter={filter}/>
    </div>
  )
}

export default Filtaring