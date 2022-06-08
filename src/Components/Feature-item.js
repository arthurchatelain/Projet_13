export default function FeatureItem(props) {
    return (
        <div className="feature-item">
            <img src={require("../Assets/Images/" + props.img)} alt="Feature Icon" className="feature-icon"/>
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}