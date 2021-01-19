import React, { Component } from 'react'
import axios from 'axios'
import Meetings from './Meetings'
class CreateMeeting extends Component {
    constructor() {
        super()
        this.state = {
            date: " ",
            guests: [" "],
            clickedState: false
        }
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state.guests,
            [e.target.name]: value
        })

    }
    handleAddClick() {
        const list = [...this.state.guests, " "]
        console.log(list)
        this.setState({
            guests: list
        })
    }
    handleRemove(index) {
        const list = [...this.state.guests]
        list.splice(index, 1)
        this.setState({
            guests: list
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { date, guests } = this.state
        axios.post("http://localhost:5000/createMeeting", {
            date: date,
            guests: guests
        }).then(response => {
           console.log(response)
        }).catch(err => {
            if (err) {
                return err
            }
        })
    }
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.guests];
        list[index] = value;
        this.setState({
            guests: list
        })
    };
    render() {
        const { date, guests, clickedState } = this.state
        if (clickedState) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="date"
                            value={date}
                            placeholder="Date"
                            onChange={this.handleChange}
                        />

                        <input
                            type="submit"
                            value="submit"
                        />
                    </form>
                    <div>
                        {guests.map((guest, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="enter name"
                                        value={guest.name}
                                        onChange={(e) => this.handleInputChange(e, index)}
                                    >
                                    </input>
                                    <div>
                                        {
                                            <button
                                                onClick={() => this.handleAddClick()}
                                            >Add
                                        </button>
                                        }
                                        {
                                            guests.length -1  !==0 && <button
                                                onClick={() => this.handleRemove(index)}
                                            >Remove
                                        </button>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                    <button
                    onClick={()=>{this.setState({
                        clickedState:!clickedState
                    })}}
                    >create meeting
                    </button>
                </div>
                </div>
            )
        } else {
            return (
                <div>
                    <button
                    onClick={()=>{this.setState({
                        clickedState:!clickedState
                    })}}
                    >create meeting
                    </button>
                </div>
            )
        }
    }
}

export default CreateMeeting