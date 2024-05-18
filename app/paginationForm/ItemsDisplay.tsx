'use client'
import React, {useState} from 'react';
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
interface Image {
    url: string;

}
interface Item {
    id: number;
    name: string;
    images: Image[];
    uri: string;
    genres: string[];
}

interface ItemsDisplayProps {
    items: Item[];  // This specifies that `items` is an array of `Item` objects
    loading: boolean;
}


export default function ItemsDisplay({ items, loading }: ItemsDisplayProps) {

    console.log('items = ', items)

    return (
        <Card >
             {loading ? (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}>
                    <CircularProgress />
                </div>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><h2>Artist</h2></TableCell>
                            <TableCell><h2>Album</h2></TableCell>
                            <TableCell><h2>Genres</h2></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.length > 0 ? items.map((item) => (
                               <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {item.name || "No name available"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.images.length > 2 && ( // Ensure there are enough images
                                            <Image src={item.images[0].url} alt={`${item.name} album cover`} width={100} height={100} />
                                        )}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div>{item.genres.join(', ') || "No URI available"}</div>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <Grid item xs={12}>
                                    <p>No items available. Please check back later.</p>
                                </Grid>
                            )}
                        </TableBody>
                    </Table>
                    </TableContainer>
            )}
      </Card>      
    );
}