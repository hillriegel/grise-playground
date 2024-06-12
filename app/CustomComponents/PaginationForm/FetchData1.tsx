
import {Item, APIResponse} from './components/types';
import {GriseconRelatedArtists} from './GriseconRelatedArtists';

export default function FetchData(currentPage: number, itemsPerPage: number): Promise<APIResponse> {

    // Mock data array with 20 items
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
                rangeStart: currentPage * itemsPerPage - (itemsPerPage -1),
                rangeEnd: currentPage * itemsPerPage,
                totalItems: artists.length,
                data: pageItems,
                totalPages: Math.ceil(20 / itemsPerPage),
            });
        }, 1000); // Simulate network latency with 1 second delay
    })
  }
