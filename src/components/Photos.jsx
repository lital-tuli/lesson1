import { useEffect, useState } from "react";

function Photos() {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((res) => res.json())
      .then((photos) => setPhotos(photos));
  });
  return (
    <>
      <h2>Photos</h2>

      {photos.length ? (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Thumbnail</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo) => (
              <tr key={photo.id}>
                <td>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </td>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Photos</p>
      )}
    </>
  );
}

export default Photos;