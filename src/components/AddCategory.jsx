import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValues, setinputValues] = useState('');

    const onInputChange = ({ target }) => {
        setinputValues(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue=inputValues.trim();
        if (newInputValue.length <= 1) return;
        // onAddCategory((cat) => [...cat, inputValues]);
        onNewCategory(newInputValue);
        setinputValues('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValues}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}
