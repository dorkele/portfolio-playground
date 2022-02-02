import React from "react";
import styles from "./ChaoticHome.module.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'

const icon = new L.Icon({
    iconUrl: require('../../../public/images/oko1.png'),
    iconSize: new L.Point(75),
});

function ChaoticHome() {

    return (
        <div className={styles.home}>
            <h1>You are home.</h1>
            {/* <img src="public/images/20180517_211443.jpg" /> */}
            <MapContainer className={styles.map} center={[44.85592,13.84956]} zoom={100} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle 
                    center={[44.85592,13.84956]} 
                    // icon={icon}
                    color="red"
                    fillColor="#f03"
                    fillOpacity={0.5}
                    radius={10}
                >
                    <Popup >
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Circle>
            </MapContainer>
        </div>
    );
}

export default ChaoticHome;
