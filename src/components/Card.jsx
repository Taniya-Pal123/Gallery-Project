import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.e.url} target='_blank'>
          <div className='h-40 w-56 b g-white overflow-hidden rounded-2xl'>
         <img className='h-full w-full object-cover rounded-2xl' src={props.e.download_url} alt="" />
        </div> 
      <h2 className='font-bold text-lg text-amber-50
       italic'>{props.e.author}</h2>
        </a>
    </div>
  )
}

export default Card
