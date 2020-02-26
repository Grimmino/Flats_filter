import React, { useState } from 'react'

import { Filter } from './Filter.jsx'

const Rooms = props => {

    const [cardRooms, setCardRooms] = useState([]);
    
    const getFilter = (setFlatsList) => {
        setCardRooms(setFlatsList)
    }

    return (
        <div className="rooms">
            <Filter getFilter={getFilter}/>
        
            <div className="rooms__info">
                {cardRooms.map((item, index) => (
                    <div key={index}>Колличество комнат в квартире-{item.id} площадью {item.area} равно: {item.rooms}</div>
                ))}
            </div>
        </div>
    )
}

export default Rooms