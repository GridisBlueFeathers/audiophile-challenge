import { useNavigate } from "react-router-dom";
import "./GoBack.scss"

const GoBack = () => {
    const navigate = useNavigate()

    return (
        <section className="back">
            <button onClick={() => {navigate(-1)}}>Go back</button>
        </section>
    )
}

export default GoBack;
