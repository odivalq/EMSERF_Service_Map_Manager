import React from 'react'
import './Card.css'

function Card({title,imageUrl,body,crew}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div> 
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='card-crew'>
                    <p>{crew}</p>
                </div>
            </div>            
            <div className='btn'>
                <button>
                    <a>
                        Detalhes da Sede
                    </a>
                </button>
            </div>                        
        </div>
    )
}

export default Card;