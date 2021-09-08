import react from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends react.Component{
    state = { images: [] };
    onSearchSubmit = async (searchValue) => {
        
        console.log(searchValue);
        // get images from unsplash API
        const response = await unsplash.get('search/photos', {
            params: { query: searchValue }
            
        });
        this.setState({ images: response.data.results });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images
                <ImageList images={this.state.images}  />
            </div>
        );
    }
    
}

export default App;