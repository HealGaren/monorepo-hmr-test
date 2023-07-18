import {useState} from "react";
import {Button} from "ui-kit-vite";

export const ButtonTest = () => {
    const [count, setCount] = useState(0);

    return (
        <Button
            onClick={() => setCount(v => v + 1)}
            label={`count : ${count}`}
        />
    )

}