import React, { Component } from 'react';

class EventDemo extends Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Rikkei',
            lastName: 'Academy'
        }
    }

    handleClick1() {
        alert("Button 1 was clicked");
    }

    handleClick2() {
        alert("Button 2 was clicked");
    }

    handleClick3 = (message) => {
        alert(message);
    }

    handleClick4 = (message) => {
        alert(message);
    }

    handleClick5 = () => {
        alert(this.state.firstName + " " + this.state.lastName);
    }

    handleLink = (event) => {
        alert("Bạn vừa thăm website của Rikkei Academy");
        // Chặn sự kiện mặc định
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick1()}>Button 1</button>
                <button onClick={this.handleClick2}>Button 2</button>
                <button onClick={this.handleClick3("Button 3 was clicked")}>Button 3</button>
                {/* Gọi hàm có tham số --> gọi theo arrow function */}
                <button onClick={() => this.handleClick4("Button 4 was clicked")}>Button 4</button>
                <button onClick={this.handleClick5}>Button 5</button>
                <a href='https://rikkei.edu.vn/' onClick={this.handleLink}>Rikkei Academy</a>
            </div>
        );
    }
}

export default EventDemo;  