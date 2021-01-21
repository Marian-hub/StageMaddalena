import React, { Component } from 'react'
import axios from 'axios'
import {
    Button
} from 'reactstrap'
class DeleteMeeting extends Component {
    constructor(props) {
        super(props)
    }
    deleteMeeting = () => {
        const { date } = this.props
        axios.delete("http://localhost:5000/deleteMeeting", {
            params: {
                Date: date
            }
        }).then(result => {
            console.log(result)
        }).catch(error => {
            if (error) {
                return error
            }
        })
    }
    render() {
        return (
            <Button
                color="primary"
                onClick={() => {
                    this.deleteMeeting()
                }}
            >delete meeting
            </Button>
        )
    }

}

export default DeleteMeeting