import { createContext,useState } from "react";

export const SubmitContext = createContext();

export const SubmitProvider = (props) => {
    const [submit,setSubmit] = useState(false);
    return(
        <SubmitContext.Provider value={[submit,setSubmit]}>
            {props.children}
        </SubmitContext.Provider>
    );
}