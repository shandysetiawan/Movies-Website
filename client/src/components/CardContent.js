import React, { Component } from 'react';

class CardContent extends Component {

    render() {
        return (
            <>
                <img src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} className="card-img-top" alt={this.props.movie.poster_path}></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="card-text">{this.props.movie.overview}</p>
                </div>
            </>)
    }

}

export default CardContent