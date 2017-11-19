import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, } from 'redux';
import { increaseValue, increaseAsync } from './redux/actions';
import { AppState, Action } from './redux/store';

interface Props {
    value: number;
    increaseValue?: () => void;
    increaseAsync?: () => void;
}

const mapStateToProps = (state: AppState) => ({ value: state.value });
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    increaseValue: () => dispatch(increaseValue()),
    increaseAsync: () => dispatch(increaseAsync()),
});

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators(
//     {
//         increaseValue: increaseValue,
//     }, 
//     dispatch
// );

interface StateToProps {
    value: number;
}

interface DispatchToProps {
    increaseValue: () => void;
    increaseAsync: () => void;
}

// @connect(mapStateToProps, mapDispatchToProps)

class MyCounter extends React.Component<Props, {}> {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <div>My value is {this.props.value}</div>
                <button onClick={this.props.increaseAsync}>Increase</button>
            </div>
        );
    }
}

// function MyCounter(props: Props) {
//     return (
//         <div style={{ padding: 10 }}>
//             <div>My value is {props.value}</div>
//             <button onClick={props.increaseValue}>Increase</button>
//         </div>
//     );
// }

function mergeProps(stateProps: {}, dispatchProps: {}, ownProps: {}) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect<StateToProps, DispatchToProps, { name?: string }, {}>
(mapStateToProps, mapDispatchToProps, mergeProps)(MyCounter as any);
