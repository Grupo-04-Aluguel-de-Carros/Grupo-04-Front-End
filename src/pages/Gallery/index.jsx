import './gallery.css'; 

export default function Gallery(){
    return (
        <div className="image-gallery-container">
            <div className="main-image">
                <img src="main.jpg" alt="Main" />
            </div>
            <div className="grid-container">
                <img src="https://www.disalconsorcio.com.br/blog/wp-content/uploads/2022/10/Land-Rover-Range-Rover-Evoque-862x485.jpg" alt="Image 1" />
                <img src="https://t.ctcdn.com.br/PxeocFIZfYdeMDeYy6P1a6sr7dM=/6720x3780/smart/i775472.jpeg" alt="Image 2" />
                <img src="https://cdn.motor1.com/images/mgl/jlx4eR/s3/cn023_001rm.jpg" alt="Image 3" />
                <img src="https://s2-autoesporte.glbimg.com/urXsJqq6pYqJ-Ugyi9naDMU-mUs=/0x0:1400x859/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/9/z/SSDzclSwmA9oFGrgl43Q/jeep-compass-limited-15.jpg" alt="Image 4" />
            </div>
            <div className="view-more">
                Ver Mais
            </div>
        </div>
    );
}

