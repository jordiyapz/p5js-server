import React from 'react';

class ItemCard extends React.Component {
    render () {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src="img/catttt.jpg" className="card-img-top" alt="cat" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
};

export default ItemCard;