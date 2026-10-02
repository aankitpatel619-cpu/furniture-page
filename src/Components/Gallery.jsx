const galleryItems = [
    <img src="src/assets/Gallery-img-1 (1).jpg" alt="Gallery Image 1" />,
    <img src="src/assets/Gallery-img-2 (2).jpg" alt="Gallery Image 2" />,
    <img src="src/assets/Gallery-img-3 (3).jpg" alt="Gallery Image 3" />,
    <img src="src/assets/Gallery-img-4 (4).jpg" alt="Gallery Image 4" />,
    <img src="src/assets/Gallery-img-5 (5).jpg" alt="Gallery Image 5" />,
    <img src="src/assets/Gallery-img-6 (6).jpg" alt="Gallery Image 6" />,
    <img src="src/assets/Gallery-img-7 (7).jpg" alt="Gallery Image 7" />,
    <img src="src/assets/Gallery-img-8 (8).jpg" alt="Gallery Image 8" />,   
];

function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-heading">

        <p>Share your setup with</p>

        <h2>#FurniroFurniture</h2>

      </div>

      <div className="gallery-grid">

        {galleryItems.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
          >
            <span>{item}</span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;