import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images);
    const images = props.images.map(image => {
        // implementing key to the list
        return <ImageCard key={image.id} image={image} />;
    })
    return (
        <div className="image-list" style={{ marginTop: '30px'}}>
            {images}
        </div>
    );
}


export default ImageList;