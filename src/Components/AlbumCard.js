import {Link} from "react-router-dom";
import Logo from '../Images/logohere.png'

function ProblemCard({item}){

    return (
        <Link
            to={`/Album`}
            className={"card-margin align-left is-row is-card"}
        >
            <div className="is-50">
                <div className="image-container">
                    <img className="card-logo" src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="is-50">
                <h3>{item.title}</h3>
            </div>
        </Link>
    );
}

export default ProblemCard
