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
                <p>
                    {item.user['name']} - {item.user['email']}
                </p>
                <p>
                    {item.user['phone']} - {item.user['address']['city']}
                </p>
                <br />
                <p>{item.user['company']['name']}</p>
            </div>
        </Link>
    );
}

export default ProblemCard
