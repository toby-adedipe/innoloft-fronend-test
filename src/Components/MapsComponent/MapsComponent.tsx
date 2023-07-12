import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { ComponentProps, useMemo } from "react";

interface Props extends ComponentProps<"div"> {
  lat: number,
  long: number,
}

const MapsComponent = ({lat, long}: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_API_KEY),
  });

  const center = useMemo(() => ({ lat, lng: long }), [lat, long]);

  return (
    <div className="map-component h-full w-full">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container w-full h-full"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat, lng: long}} />
        </GoogleMap>
      )}
    </div>
  );
};

export default MapsComponent;