import React, { Component } from 'react'

class SearchForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="bookSearch">Search for a Book</label>
                    <input 
                        onChange={this.props.handleChange}
                        name="bookTitle"
                        type="text" 
                        className="form-control" 
                        id="bookTitle" 
                        placeholder="Give me a book name..."
                     />
                </div>
                <button type="submit" class="btn btn-primary">
                    Search
                </button>
            </form>
        );
    }
}

export default SearchForm;