import React, { Component } from 'react';

class CardContent extends Component {

    render() {
        return (
            <>
                <img src={this.props.movie.poster_path} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="card-text">{this.props.movie.overview}</p>
                </div>
            </>)
    }

}

export default CardContent