import React, { useState } from 'react'
import { Filter } from './Filter.jsx'

import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'

const Rooms = props => {

    const [cardRooms, setCardRooms] = useState([]);
    
    const getFilter = (setFlatsList) => {
        setCardRooms(setFlatsList)
    }

    return (
        <div className="rooms">
            <Filter getFilter={getFilter}/>
        
            <div className="rooms__info grid">
                {cardRooms.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="card__content">
                                <span>Колличество комнат в квартире-{item.id} площадью {item.area} равно: {item.rooms}</span>
                                <span>Цена {item.price}</span>
                                <span>Блок {item.block}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms