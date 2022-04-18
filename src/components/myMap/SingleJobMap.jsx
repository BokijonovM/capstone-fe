import React, { useState, useEffect } from "react";
import "./style.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import imageLogo from "../assets/geo-alt.svg";
import { Icon } from "leaflet";
import { useSelector } from "react-redux";

const myIcon = new Icon({
  iconUrl: imageLogo,
  iconSize: [32, 32],
});

const position = [52.233334, 21.016666];

function SingleJobMap({ job }) {
  const [isLoading, setIsLoading] = useState(true);

  const singleJob = useSelector((state) => state.singleJob);

  useEffect(() => {
    if (job) {
      setIsLoading(false);
    }
  }, []);
  return (
    <MapContainer
      style={{ height: "100%", zIndex: "-1 !important" }}
      center={[52.233334, 21.016666]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">JobLand</a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          {singleJob?.companyName} <br />
          {singleJob?.title} <br />${singleJob?.salary}
        </Popup>
      </Marker>
      <ZoomControl position="topright" />
    </MapContainer>
  );
}

export default SingleJobMap;
