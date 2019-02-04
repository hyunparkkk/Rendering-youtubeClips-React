import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    
    onChangeHandler = (e) =>{
        this.setState({
            term: e.target.value
        })
    }

    onSubmitHandler = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div style={{marginTop: "2%"}}className="search-bar ui segment">
                <form onSubmit={this.onSubmitHandler}className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input onChange={this.onChangeHandler}type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;