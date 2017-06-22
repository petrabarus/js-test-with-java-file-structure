import React from 'react';

import Shape from './../Shape';

export default class Rectangle extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
