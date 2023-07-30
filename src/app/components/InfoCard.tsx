function InfoCard(props) {
    return (

        <div className="card">

            <div className="card-title">
                <h2>{props.dataObject.impairment}</h2>
                <button className="btn" >Click to activate</button>
            </div>


            <div className="card-body">
                <p>{props.dataObject.about}</p>
                <p>{props.dataObject.about2}</p>

                <a href={props.dataObject.website}>Learn More about {props.dataObject.impairment}</a>
            </div>
        </div>


    )
}

export default InfoCard;