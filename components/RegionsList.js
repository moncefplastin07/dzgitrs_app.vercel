import Link from 'next/link'
import React, { useState } from 'react';
export default function RegionsList({allRegionsList}) {
  const [regionsList, setRegionsList] = useState(allRegionsList);

  const searchByRegion = (event) =>{
    const searchQuery = event.target.value
    const filteredRegionsList = allRegionsList.filter((region)=> region.country.toLowerCase().includes(searchQuery.toLowerCase()) == true)
    setRegionsList(filteredRegionsList)
  }
  return (

    <div className="dark:bg-black dark:text-white font-mono flex flex-col items-center ring-inset min-h-screen py-2">
        <input onChange={searchByRegion} placeholder='Search ..' className='dark:bg-black'></input>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        { regionsList?.length ? <ul className='text-left grid grid-cols-4 xs:grid-cols-2 xs:text-center gap-4'>
             
            {
              regionsList.map(country=> (
                <li key={country.country} className={`${country.slug == 'israel' ? 'line-through text-red-800 bg-red-200 border-red-500' : ''} border-green-500 duration-200 ease-in-out	hover:border-l-4 hover:pl-2`}>
                  <Link href={country.slug !== 'israel' ? country.slug : '#' }><a title={country.slug !== 'israel' ? country.country : 'A country that encourages terrorism' }>{country.country}</a></Link>
                </li>
              ))
            }
          </ul> :'لا توجد احصائيات'  }
        </div>
      </div>
      
  )
}