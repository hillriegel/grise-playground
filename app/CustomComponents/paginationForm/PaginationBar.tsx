'use client'

import React, { useState, useEffect, useRef, useCallback, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import fetchData from './fetchData';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {APIResponse, PaginationBarProps} from './types';
import './pagination.css';

export default function PaginationBar({itemsDisplayed, setItemsDisplayed, setLoading}: PaginationBarProps) {
    
    //the API doesn't accept page parameters so we start with a fixed set of data with 20 items
    const [numItems, setNumItems] = useState(20);
    //we start with a default number of rows to display
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [numPages, setNumPages] = useState(4);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] =  useState(false);

    const changeNumberOfRows = (event: ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
    }

    const handleGet = useCallback((place: string) => {
        let pn = itemsDisplayed.pageNumber;
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

        fetchData(pn, rowsPerPage)
            .then((result: APIResponse) => {
                console.log('result = ', result);
                console.log('setting rangeStart to ', result.rangeStart);
                setItemsDisplayed({ pageNumber: pn, rangeStart: result.rangeStart, rangeEnd: result.rangeEnd, itemsToDisplay: result.data });
                setNumItems(result.totalItems);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [itemsDisplayed.pageNumber, numPages, setItemsDisplayed, setLoading, rowsPerPage]);

    useEffect(() => {
        handleGet('first');
      }, [handleGet, rowsPerPage]);

    return (
        <div className="button-bar">
            <div className="rows-per-page">
                Rows per page: <select className="row-select" onChange={(e)=>changeNumberOfRows(e)}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        </select>
            </div>
            <div className="pagination-text">
                {itemsDisplayed.rangeStart} - {itemsDisplayed.rangeEnd} of {numItems}
            </div>
            <Button className="button-item" onClick={() => handleGet('first')} variant="contained" disabled={prevDisabled}><FirstPageIcon /></Button>
            <Button className="button-item" onClick={() => handleGet('prev')} variant="contained"  disabled={prevDisabled}><ArrowBackIosIcon style={{width: '16px'}} /></Button>
            <Button className="button-item" onClick={() => handleGet('next')} variant="contained"  disabled={nextDisabled}><ArrowForwardIosIcon  style={{width: '16px'}}/></Button>
            <Button className="button-item" onClick={() => handleGet('last')} variant="contained"  disabled={nextDisabled}><LastPageIcon /></Button>
        </div>
);
}

