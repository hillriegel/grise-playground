'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import fetchData from './fetchData';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Item, UpdateState, APIResponse, PaginationBarProps} from './types';
import './pagination.css';

export default function PaginationBar({items, updateItemsDisplayed, setLoading}: PaginationBarProps) {
    const [numItems, setNumItems] = useState(0);
    const [numPages, setNumPages] = useState(0);
    const [itemsDisplayed, setItemsDisplayed] = useState(0);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] =  useState(false);


    const handleGet = useCallback((place: string) => {
        let pn = items.pageNumber;
        switch (place) {
            case 'first':
                pn = 1;
                setPrevDisabled(true);
                break;
            case 'prev':
                if (pn > 1) {
                    pn--;
                } else {
                    setPrevDisabled(true);
                }
                break;
            case 'next':
                if (pn < numPages) {
                    pn++;
                    setPrevDisabled(false);
                } else {
                    setNextDisabled(true);
                }
                break;
            case 'last':
                setNextDisabled(true);
                setPrevDisabled(false);
                pn = numPages;
                break;
        }

        setLoading(true);
        fetchData(pn, 4)
            .then((result: APIResponse) => {
                updateItemsDisplayed({ pageNumber: pn, itemsToDisplay: result.data });
                setNumItems(result.totalItems);
                setNumPages(result.totalPages);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [items.pageNumber, numPages, updateItemsDisplayed, setLoading]);

    return (
        <div className="button-bar">
            <div className="rows-per-page">
                Rows per page: 
            </div>
            <div className="pagination-text">
                1 - 5 of {numItems}
            </div>
            <Button className="button-item" onClick={() => handleGet('first')} variant="contained" disabled={prevDisabled}><FirstPageIcon /></Button>
            <Button className="button-item" onClick={() => handleGet('prev')} variant="contained"  disabled={prevDisabled}><ArrowBackIosIcon style={{width: '16px'}} /></Button>
            <Button className="button-item" onClick={() => handleGet('next')} variant="contained"  disabled={nextDisabled}><ArrowForwardIosIcon  style={{width: '16px'}}/></Button>
            <Button className="button-item" onClick={() => handleGet('last')} variant="contained"  disabled={nextDisabled}><LastPageIcon /></Button>
        </div>
);
}

