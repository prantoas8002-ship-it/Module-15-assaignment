import { useState } from "react";

function PhotoCard({ photo }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card">
        <img src={photo.thumbnailUrl} alt={photo.title} />

        <div className="card-content">
          <h3>{photo.title}</h3>

          <p>
            <strong>Photo ID:</strong> {photo.id}
          </p>

          <p>
            <strong>Album ID:</strong> {photo.albumId}
          </p>

          <button
            className="details-btn"
            onClick={() => setShowModal(true)}
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={photo.url} alt={photo.title} />

            <h2>{photo.title}</h2>

            <p>Photo ID: {photo.id}</p>
            <p>Album ID: {photo.albumId}</p>

            <button onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoCard;