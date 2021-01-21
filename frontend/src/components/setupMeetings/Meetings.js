import React, { Component } from 'react'
import axios from 'axios'
import Meeting from './Meeting'
import CreateMeeting from './CreateMeeting'
class Meetings extends Component {
    constructor() {
        super()
        this.state = {
            meetings: []
        }
    }
    getMeetings() {
        axios.get("http://localhost:5000/getMeeting")
            .then(response => {
                this.setState({
                    meetings: response.data
                })
            }
            ).catch(err => {
                return err
            })
    }
    componentDidMount() {
        this.getMeetings()

    }
    render() {
        const { meetings } = this.state
        return (
            <div>
                {meetings.map((meeting, index) => {
                    return (
                        <div key={index}>
                            <Meeting
                                date={meeting.date}
                                guests={meeting.guests}
                            />
                        </div>
                    )
                })}
                {this.getMeetings()}
                <CreateMeeting />
            </div>
        )
    }
}
export default Meetings