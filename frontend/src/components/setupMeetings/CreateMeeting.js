import React, { Component } from 'react'
import axios from 'axios'
import {
    Button,
    Form
} from 'reactstrap'
import Basic from './ImageDragDrop'
class CreateMeeting extends Component {
    constructor() {
        super()
        this.state = {
            date: " ",
            guests: [" "],
            logo: ' ',
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
        const { date, guests, logo } = this.state
        const fd = new FormData()
        fd.append('image', this.state.logo)
        axios.post("http://localhost:5000/createMeeting", {
            date: date,
            guests: guests,
            logo: logo,
        }).then(response => {
            console.log(response)
        }).catch(err => {
            if (err) {
                return err
            }
        })
        this.setState({
            clickedState: false
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
    hanelFileSelection = e => {
        console.log(e.target.files[0])
        this.setState({
            logo: e.target.files[0]
        })
    }
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

                                            <Button
                                                color="success"
                                                onClick={() => this.handleAddClick()}
                                            >Add
                                            </Button>
                                        }
                                        {
                                            guests.length - 1 !== 0 &&
                                            <Button color="danger"
                                                onClick={() => this.handleRemove(index)}
                                            >Remove
                                            </Button>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Basic></Basic>
                    <div>
                        <Button
                            color="dark"
                            onClick={() => {
                                this.setState({
                                    clickedState: !clickedState
                                })
                            }}
                        >create meeting
                    </Button>
                    </div>
                </div >
            )
        } else {
            return (
                <div>
                    <Button
                        color="dark"
                        onClick={() => {
                            this.setState({
                                clickedState: !clickedState
                            })
                        }}
                    >create meeting
                    </Button>
                </div>
            )
        }
    }
}

export default CreateMeeting