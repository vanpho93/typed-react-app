1. How to create react app using typescript?

```shell
create-react-app my-app --scripts-version=react-scripts-ts
```

2. How to create new typed stateless component?

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