import 'mapbox-gl/dist/mapbox-gl.css';

export function MainMaps() {
    // const mapRef = useRef<mapboxgl.Map | null>(null)
    // const mapContainerRef = useRef<HTMLDivElement | null>(null)
    // useEffect(() => {
    //     mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc25hLXciLCJhIjoiY2x4Y2Q5OGYzMGxyZTJqczM4bDYwaTk2aSJ9.WUsbiIjUFDYxXKgf6cHIpQ'
    //     // @ts-ignore
    //     mapRef.current = new mapboxgl.Map({
    //         container: mapContainerRef.current,
    //     });
    //
    //     return () => {
    //         // @ts-ignore
    //         mapRef.current.remove()
    //     }
    // }, [])

    return (
        <div className="h-screen pb-24 pt-12 px-8">
            <div id='map-container' className="rounded-2xl"/>
        </div>
    )
}
