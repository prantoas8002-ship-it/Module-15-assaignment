import PhotoCard from "./PhotoCard";

function PhotoGallery({ photos }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoGallery;