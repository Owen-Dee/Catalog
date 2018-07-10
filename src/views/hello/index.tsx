import { HelloComponent } from '../../components';
import * as Actions from '../../actions/demo';
import { StoreState } from '../../entity';
import { connect } from 'react-redux';

export function mapStateToProps({demo: {enthusiasmLevel, languageName: name}}: StoreState) {
    return {
        enthusiasmLevel,
        name
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HelloComponent);