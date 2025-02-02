// App.js
import React from "react";
import "./App.css";
class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );

        return (
            <div className="App">
                <h1 className="green">Reading and displaying data from json file</h1>
                <h3>Here is the https://jsonplaceholder.typicode.com/users , and below is the data rendered result: </h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;