import { useNavigate } from "react-router-dom";
import "./GoBack.scss"

const GoBack = ({modifier = ""} : {modifier?: string}) => {
    const navigate = useNavigate()

    return (
        <section className={`back${modifier && " back-"+modifier}`}>
            <button onClick={() => {navigate(-1)}}>Go back</button>
        </section>
    )
}

export default GoBack;
