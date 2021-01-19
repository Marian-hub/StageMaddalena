import React, { Component } from 'react'
class Meeting extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { date, guests } = this.props
        return (
            <div>
                DATE: {date}<br />
                GUESTS:{guests.map((guest, index) => {
                return (
                    <div key={index}>
                        {guest}
                    </div>
                )
            })}
            </div>
        )
    }

}
export default Meeting