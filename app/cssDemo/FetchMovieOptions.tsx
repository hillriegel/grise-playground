
// FetchMovies.js
async function FetchMovies() {

    const authToken = process.env.REACT_APP_API_KEY;

    // Using HeadersInit to ensure correct typing
    const headers: HeadersInit = {
        'Accept': 'application/json',
    };

    // Only add Authorization header if authToken is not undefined
    if (authToken) {
        headers['Authorization'] = `${authToken}`;
    }

    const options: RequestInit = {
        method: 'GET',
        headers: headers
    };


    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return await response.json(); // Return the JSON data
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        throw error; 
    }
}

export default FetchMovies;
