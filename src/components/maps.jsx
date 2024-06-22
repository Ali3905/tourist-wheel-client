import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Maps = ({ center }) => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    const onLoad = (map) => {
        setMap(map);
    };

    const onMarkerLoad = (marker) => {
        setMarker(marker);
    };

    useEffect(() => {
        if (!map || !marker) return;

        map.addListener("drag", () => {
            marker.setPosition(map.getCenter());
            const markerPosition = marker.getPosition();
            console.log("Updated Marker Location While Dragging:", markerPosition.lat(), markerPosition.lng());
        });

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                map.setCenter(userLocation);
                marker.setPosition(userLocation);

                console.log("User Location:", userLocation.lat, userLocation.lng);
            });
        } else {
            console.log("Geolocation is not available in this browser.");
        }
    }, [map, marker, center]);

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCIWbUh6hK1P_ARYXLVwqm2B_IOeACS8is"
            libraries={["places"]}
        >
            <div style={{ height: "400px", width: "100%", position: "relative", overflow: "hidden" }}>
                <GoogleMap
                    id="map"
                    style={{ height: "400px"}}
                    zoom={14}
                    center={center || { lat: 0, lng: 0 }}
                    onLoad={onLoad}
                >
                    <MarkerF
                        position={center || { lat: 0, lng: 0 }}
                        onLoad={onMarkerLoad}
                        icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        title="User's Location"
                    />
                </GoogleMap>
            </div>
        </LoadScript>
    );
};

export default Maps;
