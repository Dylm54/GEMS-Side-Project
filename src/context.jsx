import { useState, useContext, createContext } from "react";

export const StateContext = createContext();

export const MenuClickContext = () => {
    return useContext(StateContext)
}

export const Context = ({ children }) => {
    const [MenuClickState, setMenuClickState] = useState(false);

    const handleStateChange = (value) => {
        setMenuClickState(value)
    }

    return (
        <>
            <StateContext.Provider value={[MenuClickState, handleStateChange]}>               
                    {children}             
            </StateContext.Provider>
        </>
    )
}