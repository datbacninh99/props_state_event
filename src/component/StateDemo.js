import React, { Component } from 'react';

class StateDemo extends Component {
    // Khởi tạo state - constructor
    constructor() {
        super();
        this.state = {
            studentName: "Nguyễn Văn A"
        }
    }
    handleChangeStudent = () => {
        // Thay đổi state
        this.setState({
            studentName: "Nguyễn Văn B"
        })
    }
    render() {
        console.log("Render Component")
        return (
            <div>
                <p>Rikkei Academy chào mừng bạn {this.state.studentName}</p>
                <button onClick={this.handleChangeStudent}>Change Student</button>
            </div>
        );
    }
}

export default StateDemo;