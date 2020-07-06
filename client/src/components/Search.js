import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <>
                <form>
                    <label>
                        Name:
    <input type="text" name="name" placeholder="search by name" />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </>)
    }

}

export default Search