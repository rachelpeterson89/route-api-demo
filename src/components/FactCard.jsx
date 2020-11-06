const FactCard = props => {
    
    const { fact } = props;

    return (
        <div className="card col-12">
            <div className="card-body">
                <h2 className="card-title">{ fact.text }</h2>
            </div>
        </div>
    )
}

export default FactCard;