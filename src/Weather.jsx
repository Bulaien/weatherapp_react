export default function Weather({ weather }) {
  const { name, temp, sky, lat, lon } = weather;

  return (
    <div className="flex justify-center">
      {name ? (
        <div>
          <h1 className="text-3xl text-white font-bold">Ort: {name}</h1>
          <p className="text-3xl text-white font-bold">
            Temperatur: {Math.floor(temp)}°C
          </p>
          <p className="text-3xl text-white font-bold">Himmel: {sky}</p>
          <p className="text-3xl text-white font-bold">Latitude: {lat}</p>
          <p className="text-3xl text-white font-bold">Longitude: {lon}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-white font-bold">Bitte Ort eingeben</h1>
        </div>
      )}
    </div>
  );
}
