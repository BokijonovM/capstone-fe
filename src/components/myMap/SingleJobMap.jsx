import React, { useState } from "react";
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
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const myIcon = new Icon({
  iconUrl: imageLogo,
  iconSize: [32, 32],
});

const position = [52.233334, 21.016666];

function SingleJobMap() {
  const [isLoaded, setIsLoaded] = useState(false);
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
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ZoomControl position="topright" />
    </MapContainer>
  );
}

export default SingleJobMap;
