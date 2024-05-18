
import {Item, APIResponse} from './types';
import {GriseconRelatedArtists} from './GriseconRelatedArtists';

export default function fetchData(currentPage: number, itemsPerPage: number): Promise<APIResponse> {

    // Mock data array with 1000 items
    
    const artists = GriseconRelatedArtists.artists;
  
    return new Promise<APIResponse>((resolve, reject) => {
        // Simulate a delay to mimic network request
        setTimeout(() => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageItems = artists.slice(startIndex, endIndex);
  
            resolve({
                currentPage: currentPage,
                itemsPerPage: itemsPerPage,
                totalItems: artists.length,
                totalPages: Math.ceil(artists.length / itemsPerPage),
                data: pageItems,
            });
        }, 1000); // Simulate network latency with 1 second delay
    })
  }
