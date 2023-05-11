import { FC, lazy } from "react";
import styles from "./Map.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const SpinnerItem = lazy(() => import("UI/Spinner/SpinnerItem"));

const Map: FC = () => {
  const center = { lat: 51.04, lng: -114.07 };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) {
    return (
      <div className={styles.spinner}>
        <SpinnerItem />
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={styles.mapcontainer}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
