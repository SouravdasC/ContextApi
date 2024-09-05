import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = (props) => {

    const [value, setValue] = useState(5)
    return (
        <CounterContext.Provider value={{value, setValue}}>
            {props.children}
        </CounterContext.Provider>
    )
}