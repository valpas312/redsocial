import { useContext } from "react";
import { contexto } from "../App";

const useElement = (e, n) => {

    const [user, setUser] = useContext(contexto);

    if (user.name) {
        return e;
    } else {
        return n;
    }
}

export default useElement;