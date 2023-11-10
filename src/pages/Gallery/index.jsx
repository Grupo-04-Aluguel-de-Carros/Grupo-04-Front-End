import './gallery.css'; 

export default function Gallery(){
    return (
        <div className="image-gallery-container">
            <div className="main-image">
                <img src="main.jpg" alt="Main" />
            </div>
            <div className="grid-container">
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" />
                <img src="image4.jpg" alt="Image 4" />
            </div>
            <div className="view-more">
                Ver Mais
            </div>
        </div>
    );
}

