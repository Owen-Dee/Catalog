import * as React from 'react';
import './app.scss';

function ListItem(props) {
    return(
        <li>{props.value}</li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => {
        return <ListItem key={number} value={number} />
    });

    return(
        <ul>{listItems}</ul>
    );
}

interface appState {
    count: number
}

export default class App extends React.Component<any, appState> {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    add() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const numbers = [1, 2, 3, 4, 5, 6 ,7 , 8];
        return (
            <div className="app-control">
                <NumberList numbers={numbers}/>
                <h1 className="size-control">Count: {this.state.count}</h1>
                <button className="button-control" onClick={this.add.bind(this)}>增加1</button>
            </div>
        );
    }
}