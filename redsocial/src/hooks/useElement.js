import { useContext } from "react";
import { contexto } from "../App";

const useElement = (e) => {

    const [user, setUser] = useContext(contexto);

    if (user.name) {
        return `<${e}/>`;
    } else {
        return "Log in to see this page";
    }
}

export default useElement;