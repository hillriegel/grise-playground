import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Item} from './types';

interface ItemsDisplayProps {
    items: Item[];
    loading: boolean;
}

export default function ItemsDisplay({ items, loading }: ItemsDisplayProps) {
    return (
        <Card>
            <TableContainer component={Paper} style={{display: 'flex', alignItems: 'stretch', justifyContent: 'center'}}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h2>Artist</h2></TableCell>
                            <TableCell><h2>Album</h2></TableCell>
                            <TableCell><h2>Genres</h2></TableCell>
                        </TableRow>
                    </TableHead>
                    {loading ? (
                        // If loading, display the spinner centrally
                        <TableBody style={{ height: '520px', minWidth: 650, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <CircularProgress/>
                        </TableBody>
                    ) : (
                        <TableBody>
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            <h3>{item.name || "No name available"}</h3>
                                        </TableCell>
                                        <TableCell>
                                            {item.images.length > 0 && (
                                                <Image src={item.images[0].url} alt={`${item.name} album cover`} width={100} height={100} layout="fixed" />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.genres.join(', ') || "No genres available"}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} style={{ textAlign: 'center' }}>
                                        No items available. Please check back later.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </Card>
    );
}
