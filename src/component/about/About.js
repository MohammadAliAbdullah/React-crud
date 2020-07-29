import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            username: "",
            email: "",
            password: ""
        }

    }

    onchangeHandler = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }

    onclikHandler() {
        const url = "http://localhost/React/react_route/backend/postData.php"
        alert(url);

        const data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post(url, data)
            .then(res => {
                console.log(res)
                // alert('successfully entry');
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>http Post Data </h1>
                    <p>{this.state.name}</p>
                    <p>{this.state.username}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.password}</p>

                    <form method="post">
                        <label>Name</label>
                        <input type="text" onChange={this.onchangeHandler} name="name"></input> <br></br>
                        <label>User Name</label>
                        <input type="text" name="username" onChange={this.onchangeHandler}></input> <br></br>
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.onchangeHandler}></input> <br></br>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.onchangeHandler}></input> <br></br>
                        <button onClick={this.onclikHandler}>submit</button>

                    </form>

                </header>
            </div>
        );
    }
}

export default About;

