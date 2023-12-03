import React from "react";
import "./FormComponents.css"

export const Input = ({ inputType, inputText, setInputValue, inputValue, required }) => {
    return (
        <input
            type={inputType}
            placeholder={inputText}
            required={required}
            onChange={setInputValue}
            value={inputValue}
        />
    )
}

export const Button = ({ buttonText, buttonType, buttonFunction }) => {
    return (
        <button
            type={buttonType}
            onClick={buttonFunction}
        > {buttonText}</button>
    )
}