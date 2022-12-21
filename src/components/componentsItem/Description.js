const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <div className="descriptionContainer">
                <span className="descriptionTitle">Description</span> 
                <p className="descriptionContent">
                    {props.descriptionContent}
                </p>   
            </div>

            <span className="cant">
                cantitad: {props.cantidad}
            </span>

            <span className="price">
                {props.precio}
            </span>


        </div>
    )
}

export default Description;