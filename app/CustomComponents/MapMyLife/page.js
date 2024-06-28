"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import ChairIcon from '@mui/icons-material/Chair';
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


const MapComponent = dynamic(() => import('./MapComponent.jsx'), {
  ssr: false,
});

const CesiumViewer = dynamic(() => import('./CesiumViewer.jsx'), { 
  ssr: false 
});

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col" >
        <div className="page-title">
            <h1><ChairIcon style={{marginBottom: '4px'}} />  &nbsp; React Components :: Map My Life</h1>
        </div>
    
    
      <div className="main-content">
          <h1>Using Leaflet Mapping Library</h1>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <p>As an exercise in using Leaft and familiarizing myself with a mapping library, I set up a map
                    that references all the places I've lived and visited.
                </p>
            </Grid>
        </Grid>
        <br />

        <Grid container spacing={2}>
            <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}}>
                <Image 
                    src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png" 
                    alt="map pointer" 
                    width="20" 
                    height="30"
                    style={{float: 'left', marginRight: '20px'}} />
                &nbsp; <b>Places I've lived</b>
            </Grid>
            <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}}>
                <Image
                    src="/images/visited-circle.png"
                    alt="visited circle"
                    width="20"
                    height="20"
                    /> &nbsp; &nbsp; <b>Places I've visited</b>
            </Grid>
        </Grid>
        <br />
        <MapComponent />
        <br /><br />
        <h1>Using Cesium 3D Mapping Library</h1>
        <CesiumViewer />
      </div>
    </main>
  );
}
