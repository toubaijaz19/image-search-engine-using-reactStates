import react from 'react';

class SearchBar extends react.Component{
    state = { inputValue : ''};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    }
    render(){
        return (
            <div className="">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Image Search</label>
                        <div className="inline field">
                            <input 
                                type="text"
                                value={this.state.inputValue} 
                                onChange={e => this.setState({inputValue : e.target.value})} 
                                className="twelve wide field"
                            /> 
                            <a onClick={this.onFormSubmit} className="ui secondary button"> Submit </a>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;