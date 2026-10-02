function RoomInspiration() {
  return (
    <section className="inspiration">

      <div className="inspiration-content">

        <h2>
          50+ Beautiful
          <br />
          rooms
          <br />
          inspiration
        </h2>

        <p>
          Our designer already made a lot of
          beautiful prototype of rooms that inspire.
        </p>

        <button>
          Explore More
        </button>

      </div>

      <div className="inspiration-images">

        <div className="inspiration-card">

          <div className="large-placeholder">
            <span><img src="src/assets/Gallery-img-6 (6).jpg" alt="Room Image" /></span>
          </div>

          <div className="room-label">
            <small>1 - Bed Room</small>
            <h3>Inner Peace</h3>
          </div>

        </div>

        <div className="inspiration-card">

          <div className="large-placeholder">
            <span><img src="src/assets/Gallery-img-6 (6).jpg" alt="Room Image" /></span>
          </div>

        </div>

      </div>

      <div className="slider-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}

export default RoomInspiration;