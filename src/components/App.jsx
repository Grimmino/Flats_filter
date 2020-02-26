import React from 'react'

import Rooms from './rooms/Rooms.jsx'

export default class App extends React.Component { 
    render() {
        return (
            <div className="page">
                <h1 className="page__title">Планировки</h1>

                <div className="page__content">
                    <Rooms />
                </div>
            </div>
        )
    }
}
