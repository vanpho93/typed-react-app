1. How to create react app using typescript?

```shell
create-react-app my-app --scripts-version=react-scripts-ts
```

2. Define a very simple redux store with thunk

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface AppState {
    value: number;
}

export interface Action {
    type: string;
}

const reducer = (state: AppState = { value: 1 }, action: Action): AppState => {
    if (action.type === 'INCR') return { ...state, value: state.value + 1 };
    return state;
};

export const store = createStore(
    reducer,
    applyMiddleware(thunk as any)
);
```
3. Create sync and async actions

```javascript
import { Action } from './store';
import { Dispatch } from 'redux';

export const increaseValue = (): Action => ({ type: 'INCR' });

export const increaseAsync = () => {
    return (dispatch: Dispatch<Action>) => {
        return dispatch({ type: 'INCR' });
    };
};
```

4. How to create new typed stateless component?

```javascript
interface Props {
    value: number;
    increaseValue?: () => void;
    increaseAsync?: () => void;
}

function MyCounter(props: Props) {
    return (
        <div style={{ padding: 10 }}>
            <div>My value is {props.value}</div>
            <button onClick={props.increaseValue}>Increase</button>
        </div>
    );
}
```
5. How to connect a stateless component and defined OwnProps

```javascript

const mapStateToProps = (state: AppState) => ({ value: state.value });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    increaseValue: () => dispatch(increaseValue()),
    increaseAsync: () => dispatch(increaseAsync()),
});

interface StateToProps {
    value: number;
}

interface DispatchToProps {
    increaseValue: () => void;
    increaseAsync: () => void;
}

export default connect<StateToProps, DispatchToProps, { name?: string }, { name: string }> (mapStateToProps, mapDispatchToProps)(MyCounter);

```

6. How to connect a statefull component to store

```javascript
function mergeProps(stateProps: {}, dispatchProps: {}, ownProps: {}) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect<StateToProps, DispatchToProps, { name?: string }, {}>
(mapStateToProps, mapDispatchToProps, mergeProps)(MyCounter as any);

```
