import React, { Component } from 'react'
import DeleteMeeting from './DeleteMeeting'
import {
    Label
} from 'reactstrap'

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
                    <Label
                        color="danger"
                        onClick={() => {
                            this.setState({
                                clicked: !clicked
                            })
                        }}
                    >DATE:{date} guest number : {guests.length}
                    </Label>
                    {this.renderGuests()}
                </div>
            )
        } else {
            return (
                <div>
                    <Label
                        color="danger"
                        onClick={() => {
                            this.setState({
                                clicked: !clicked
                            })
                        }}
                    >DATE:{date} guest number : {guests.length}

                    </Label>
                </div>
            )
        }

    }

}
export default Meeting