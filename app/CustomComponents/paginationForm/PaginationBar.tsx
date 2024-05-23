import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import fetchData from './fetchData';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { APIResponse, PaginationBarProps } from './types';
import './pagination.css';

export default function PaginationBar({ itemsDisplayed, setItemsDisplayed, setLoading }: PaginationBarProps) {
    const [numItems, setNumItems] = useState(20);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [numPages, setNumPages] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const changeNumberOfRows = (event: ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
    };

    const handleGet = useCallback((newPageNumber: number) => {
        setCurrentPage(newPageNumber);
        setLoading(true);

        fetchData(newPageNumber, rowsPerPage)
            .then((result: APIResponse) => {
                setItemsDisplayed({ pageNumber: newPageNumber, rangeStart: result.rangeStart, rangeEnd: result.rangeEnd, itemsToDisplay: result.data });
                setNumItems(result.totalItems);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [rowsPerPage, setItemsDisplayed, setLoading]);

    useEffect(() => {
        handleGet(1); // Initial fetch on component mount or rowsPerPage change
    }, [handleGet]);

    return (
        <div className="button-bar">
            <div className="rows-per-page">
                Rows per page: &nbsp;
                <select className="row-select" onChange={changeNumberOfRows}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div className="pagination-text">
                {itemsDisplayed.rangeStart} - {itemsDisplayed.rangeEnd} of {numItems}
            </div>
            <Button className="button-item" onClick={() => handleGet(1)} variant="contained" disabled={currentPage === 1}><FirstPageIcon /></Button>
            <Button className="button-item" onClick={() => handleGet(currentPage - 1)} variant="contained" disabled={currentPage === 1}><ArrowBackIosIcon style={{width: '16px'}} /></Button>
            <Button className="button-item" onClick={() => handleGet(currentPage + 1)} variant="contained" disabled={currentPage === numPages}><ArrowForwardIosIcon style={{width: '16px'}}/></Button>
            <Button className="button-item" onClick={() => handleGet(numPages)} variant="contained" disabled={currentPage === numPages}><LastPageIcon /></Button>
        </div>
    );
}
