import { createContext,useState } from "react";

export const QrContext = createContext();

export const QrProvider = (props) => {
    const [text,setText] = useState("");
    return(
        <QrContext.Provider value={[text,setText]}>
            {props.children}
        </QrContext.Provider>
    );
}