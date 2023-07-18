import {useState} from "react";

export const ButtonTest = () => {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(v => v + 1)}>count : {count}</button>
    )

}