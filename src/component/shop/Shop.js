import React, { Component } from 'react';
import axios from 'axios';

class Shop extends Component {

    constructor() {
        super();
        this.state = {
            name: []
        }
    }

    // react life cycle --
    // componentDidMount use for get data from server ....
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    name: res.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    child = (namelist) => {
        return (

            <tr>
                <td>{namelist.name}</td>
                <td>{namelist.username}</td>
                <td>{namelist.email}</td>
            </tr>

        )
    }

    render() {
        const nam = this.state.name
        const namList = nam.map(this.child);

        return (
            <div>
                <header className="App-header">
                    <h1>http Get Data</h1>
                    <table className="table">
                        <thead style={{color:"red"}}>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </thead>
                        <body>
                            {namList}
                        </body>
                    </table>
                </header>
            </div>
        );
    }
}

export default Shop;
