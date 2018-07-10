import * as React from 'react';
import './index.scss';
import App from '../app/app';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const getExclamationMarks = (numChars: number) => {
    return numChars + 1;
};

export default class HelloComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {name, enthusiasmLevel = 1, onIncrement, onDecrement} = this.props;
        if (enthusiasmLevel <= 0) {
            console.error('You could be a little more enthusiastic!');
        }

        return(
            <div className="hello">
                <div className="greeting">
                    Hello {name + enthusiasmLevel}
                </div>
                <div>
                    <button onClick={onIncrement}>Add  1</button>
                    <button onClick={onDecrement}>Plus 1</button>
                </div>
                <App />
            </div>
        );
    }
}