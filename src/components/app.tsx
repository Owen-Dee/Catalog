import * as React from 'react';
import './app.scss';

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
        return (
            <div className="app-control">
                <div>Halo</div>

                <h1 className="size-control">Count: {this.state.count}</h1>
                <button className="button-control" onClick={this.add.bind(this)}>增加1</button>
            </div>
        );
    }
}