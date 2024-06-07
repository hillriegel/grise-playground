'use client'

import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import SlideshowModal from './SlideshowModal';
import { PORTFOLIO_DATA } from './portfolio-data';
import Grid from '@mui/material/Grid';
import CollectionsIcon from '@mui/icons-material/Collections';

interface ImageItem {
    link: string;
    text: string;
}


export default function Portfolio() {
  
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedItemImages, setSelectedItemImages] = useState<ImageItem[]>([]);

    const handlePortfolioItemClick = (itemImages: ImageItem[]) => {
        setSelectedItemImages(itemImages);
        setModalOpen(true);
    };

    return (
        <div className="flex min-h-screen flex-col">
        <div className="page-title">
            <h1><CollectionsIcon style={{marginBottom: '4px'}} /> &nbsp; Portfolio</h1>
        </div>

      <div className="main-content">

        <main className="flex flex-col p-6" >
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <Grid container spacing={2}>
                    {Object.keys(PORTFOLIO_DATA).map(key => (
                        <Grid item xs={12} sm={6} key={key} onClick={() => handlePortfolioItemClick(PORTFOLIO_DATA[key].imageSet)}>
                            <PortfolioItem id={key}/>
                        </Grid>
                    ))}
                    <SlideshowModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        images={selectedItemImages}
                    />
                </Grid>
            </div>
        </main>
        </div>
        </div>
    );
};