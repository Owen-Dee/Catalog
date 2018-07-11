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

/**
 * 1.UI 组件
 *   只负责 UI 的呈现，不带有任何业务逻辑
 *   没有状态（即不使用this.state这个变量）
 *   所有数据都由参数（this.props）提供
 *   不使用任何 Redux 的 API
 */
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