1. How to create react app using typescript?

<code>create-react-app my-app --scripts-version=react-scripts-ts</code>

2. How to create new typed stateless component?

<pre>
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
</pre>