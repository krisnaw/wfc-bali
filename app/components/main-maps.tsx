import 'mapbox-gl/dist/mapbox-gl.css';
import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl'

export function MainMaps() {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc25hLXciLCJhIjoiY2x4Y2Q5OGYzMGxyZTJqczM4bDYwaTk2aSJ9.WUsbiIjUFDYxXKgf6cHIpQ'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
        });

        return () => {
            mapRef.current.remove()
        }
    }, [])

    return (
        <div className="h-full w-full">
            <div id='map-container' ref={mapContainerRef}/>
        </div>
    )
}
