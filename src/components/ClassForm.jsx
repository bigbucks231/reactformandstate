import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails: [{
                name: "",
                email: "",
                password: "",
            }]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.name)
        console.log(this.state.email)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <section style={{ margin: "2rem" }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input 
                            type='text' 
                            name='name' 
                            value={this.state.name} 
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input 
                            name='email' 
                            value={this.state.email}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input 
                            name='password' 
                            value={this.state.password}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <button>Submit</button>
                </form>

                {this.state.loginDetails.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p>{item.email}</p>
                            <p>{item.password}</p>
                        </div>
                    )
                })}
            </section>
        );
    }
}

export default ClassForm;
