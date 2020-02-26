import React from 'react'

export const FilterItem = props => {

    const getFilters = (type) => {
        let set = new Set()

        for (let i = 0; i < props.flats.length; i++) {
            props.flats[i].hasOwnProperty(type) ? set.add(props.flats[i][type]) : null
        }
        
        return Array.from(set)
    }

    return (
        <div className="filter__item">
            {props.title ? <div className="filter__title">{props.title}</div> : null}

            <div className="filter__list">
                {getFilters(props.type).map((item, index) => (
                    <label className="filter__label" key={index}>
                        <input onChange={props.filtered} ref={props.refInput}  data-filter={item} className="filter__input" type="checkbox" />
                        <span className="btn filter__fakeinput">{item}</span>
                    </label>
                ))}
            </div>
        </div>  
    )
}