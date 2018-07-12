import { HelloComponent } from '../../components';
import * as Actions from '../../actions/demo';
import { StoreState } from '../../entity';
import { connect } from 'react-redux';

/**
 * 1. 容器组件
 *    负责管理数据和业务逻辑，不负责 UI 的呈现
 *    带有内部状态
 *    使用 Redux 的 API
 */

//负责输入逻辑，即将state映射到 UI 组件的参数（props）
//第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象
export function mapStateToProps({demo: {enthusiasmLevel, languageName: name}}: StoreState) {
    return {
        enthusiasmLevel,
        name
    }
}

//负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
export function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(Actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(Actions.decrementEnthusiasm()),
    }
}

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    };
}

// 由 React-Redux 通过connect方法自动生成的容器组件
// HelloComponent是 UI 组件
// connect方法可以省略mapStateToProps参数，那样的话，
// UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新
/**
 * 1. 为了定义业务逻辑，需要给出下面两方面的信息
 *     输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
 *     输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
 * 2. connect方法接受两个参数：
 *     1).mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
 *     2).前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
 *     3).后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
 */
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HelloComponent);