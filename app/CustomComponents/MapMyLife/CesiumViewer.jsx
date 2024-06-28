"use client";

import { useEffect, useRef} from 'react';
import { 
  Viewer, 
  Terrain, 
  Ion, 
  Cartesian3, 
  Color,
  HeightReference,
  Math as CesiumMath, 
  createOsmBuildingsAsync } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";


Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZmU3MWM1MS00ZTc2LTQyNzQtYTVhNy05ZmMyNTE0MjEwODQiLCJpZCI6MjI1MjQ0LCJpYXQiOjE3MTk2MDYxNDF9.SQoWFr1DrY_IjG4G6LUPmfWtd83XxcgoYyJEoV_X3jI';


export default function CesiumViewer() {
  const cesiumContainerRef = useRef(null);


  useEffect(() => {
    let viewer;

    if (cesiumContainerRef.current) {
      //Initialize the Cesium viewer
      const viewer = new Viewer(cesiumContainerRef.current, {
        terrain: Terrain.fromWorldTerrain(),
      });

      async function addBuildingTileset(viewer) {
        // Add Cesium OSM Buildings, a global 3D buildings layer.
        if (viewer && viewer.scene) {
          const buildingTileset = await createOsmBuildingsAsync();
          viewer.scene.primitives.add(buildingTileset);
        }
      }

      addBuildingTileset();



      viewer.entities.add({
        position: Cartesian3.fromDegrees(-122.174605, 37.78562),
        billboard: {
          image: '/map-marker-2-48.png', // URL to the marker image
          width: 32,
          height: 32,
          heightReference: HeightReference.RELATIVE_TO_GROUND, // Ensure the marker is above the terrain
          disableDepthTestDistance: Number.POSITIVE_INFINITY, // Render the marker on top of the terrain
        }
      });


      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(-122.174605, 37.7845, 150),
    
        orientation: {
          heading: CesiumMath.toRadians(4.0),
          pitch: CesiumMath.toRadians(-30.0),
        }
      });



      return () => {
        viewer.destroy();
      };
    
    }
  }, []);

  
  return (
    <main>
      <div ref={cesiumContainerRef} style={{ width: '100%', height: '50vh' }} />
    </main>
  );
}
