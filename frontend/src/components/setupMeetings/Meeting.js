import React, { Component } from 'react'
import DeleteMeeting from './DeleteMeeting'
class Meeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    renderGuests() {
        const { guests, date } = this.props
        return (
            <div>
                GUESTS:{guests.map((guest, index) => {
                return (
                    <div key={index}>
                        {guest}
                    </div>
                )
            })}
                <DeleteMeeting date={date} />
            </div>
        )
    }
    render() {
        const { date, guests } = this.props
        const { clicked } = this.state
        if (clicked) {
            return (
                <div>
                    <label
                        onClick={() => {
                            this.setState({
                                clicked: !clicked
                            })
                        }}
                    >DATE:{date} guest number : {guests.length}
                    </label>
                    {this.renderGuests()}
                </div>
            )
        } else {
            return (
                <div>
                    <label
                        onClick={() => {
                            this.setState({
                                clicked: !clicked
                            })
                        }}
                    >DATE:{date} guest number : {guests.length}

                    </label>
                </div>
            )
        }

    }

}
export default Meeting