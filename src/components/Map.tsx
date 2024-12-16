import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Apartment } from "@/types/apartment";

// Replace with your Mapbox access token
mapboxgl.accessToken = "pk.your_mapbox_token_here";

interface MapProps {
  properties: Apartment[];
}

const Map = ({ properties }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-74.0060, 40.7128],
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Remove existing markers
    const markers = document.getElementsByClassName("mapboxgl-marker");
    while (markers[0]) {
      markers[0].remove();
    }

    // Add markers for properties
    properties.forEach((property) => {
      if (property.location) {
        const marker = new mapboxgl.Marker()
          .setLngLat([property.location.lng, property.location.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3 class="font-semibold">${property.address}</h3>
               <p class="text-sm">$${property.rentAmount}/month</p>`
            )
          )
          .addTo(map.current!);
      }
    });
  }, [properties]);

  return <div ref={mapContainer} className="w-full h-full" />;
};

export default Map;