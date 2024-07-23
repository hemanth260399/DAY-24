import PropTypes from "prop-types";
const Coursecard = ({ name, image, language }) => {
    return (
        <>
            <div className="card-deck" style={{ width: "22rem", display: "inline-block", margin: "40px 10px 50px 100px" }}>
                <div className="card" style={{ backgroundColor: "whitesmoke", border: "3px double blue", padding: 5 }} >
                    <img src={image} style={{ height: 200, width: 308 }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6>Language : {language}</h6>
                        <h6>EMI Options Available</h6>
                        <h6>Placement Guidance</h6>
                        <h6>1:1 Mentor Doubt Clearing Sessions</h6>
                    </div>
                </div>
            </div>
        </>
    )

}
Coursecard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    language: PropTypes.string
}


export default Coursecard;
