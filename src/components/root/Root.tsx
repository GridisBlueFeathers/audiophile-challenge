import { FC } from "react";
import { 
    Outlet,
} from "react-router-dom";

const Root:FC = () => {
    return(
        <Outlet/>
    )
}

export default Root;