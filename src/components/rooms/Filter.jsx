import React, { useState, useEffect, useRef } from 'react'
import { FilterItem } from './FilterItem.jsx'

import flats from '../../json/flats.json'

export class Filter extends React.Component {

    state = {
        inputsRefs: [],
        getInputsRef: el => {
            this.state.inputsRefs.push(el)
        }
    }

    filtered = () => {
        let setFlatsList = new Set()
        const filterBy = this.state.inputsRefs.filter(item => item.checked === true).map(elem => Number(elem.dataset.filter))

        flats.forEach((elem, index) => {
            filterBy.includes(elem.rooms) ? setFlatsList.add(elem) : null 
            filterBy.includes(elem.area) ? setFlatsList.add(elem) : null 
        })

        this.props.getFilter(Array.from(setFlatsList))
    }

    render() {
        return (
            <div className="rooms__filter">
                {this.props.flatsInfo.map((flat, index) => (
                    <FilterItem 
                        key={index} 
                        refInput={this.state.getInputsRef} 
                        filtered={this.filtered} 
                        title={flat.title} 
                        type={flat.type} 
                        flats={flats}
                    />
                ))}
            </div>
        )
    }
}

//flatsInfo 
Filter.defaultProps = {
    flatsInfo: [
        {
            title: "Количество комнат",
            type: "rooms"
        },
        {
            title: "Площадь",
            type: "area"
        }
    ]
}