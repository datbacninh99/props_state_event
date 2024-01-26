import React, { Component } from 'react';

class ChildClass extends Component {
    render() {
        return (
            <div>
                <p>{this.props.studentName}: {this.props.children}</p>
            </div>
        );
    }
}

export default ChildClass;