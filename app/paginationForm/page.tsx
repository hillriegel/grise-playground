'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import HomeBody from '@/app/homeBody';
import ItemsDisplay from './ItemsDisplay';
import PaginationBar from './PaginationBar';
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';
import UnstyledPaginationIntroduction from './SampleMuiPagination';
import FetchSpotify from './fetchSpotify';
import {Image, Item} from './types';

const Pagination = () => {

  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState (
      {
        pageNumber: 1,
        itemsToDisplay: [{
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7Eu1txygG6nJttLHbZdQOh"
          },
          "followers" : {
            "href" : null,
            "total" : 724298
          },
          "genres" : [ "electronica", "folktronica", "indietronica", "intelligent dance music", "trip hop" ],
          "href" : "https://api.spotify.com/v1/artists/7Eu1txygG6nJttLHbZdQOh",
          "id" : "7Eu1txygG6nJttLHbZdQOh",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab6761610000e5eb21c0ea7fc21ab3038d111ec2",
            "width" : 640
          }, {
            "height" : 320,
            "url" : "https://i.scdn.co/image/ab6761610000517421c0ea7fc21ab3038d111ec2",
            "width" : 320
          }, {
            "height" : 160,
            "url" : "https://i.scdn.co/image/ab6761610000f17821c0ea7fc21ab3038d111ec2",
            "width" : 160
          } ],
          "name" : "Four Tet",
          "popularity" : 60,
          "type" : "artist",
          "uri" : "spotify:artist:7Eu1txygG6nJttLHbZdQOh"
        }]
      }
  )

  const updateItemsDisplayed = (newState:any) => {
    setItems(prevState => ({
        ...prevState,
        ...newState
    }));
  };



/**
 * Simulates fetching paginated data from an API.
 * @param {number} currentPage - The current page number to fetch data for.
 * @param {number} itemsPerPage - The number of items to fetch per page.
 * @returns {Promise<Object>} A promise that resolves to an object containing the data for the current page.
 */



  return (
    <main className="flex min-h-screen flex-col" style={{margin: '30px'}}>
      <h1>Example of a Pagination Display</h1>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
      <p>This is another interview task where I was given 1 1/2 hours to complete it. I'm enjoying learning to code under pressure with the clock ticking and someone looking over my shoulder. I may
        not be great at it now, but I'm excited to get better.
      </p>
      <p>
        It&apos;s also another example where I found myself at a disadvantage having used Material-UI components for so long. Material-UI provides a nice pagination component, and I would always just import and use that:
      </p>
      <div style={{marginTop: '20px'}}>
        <h2>Material-UI Pagination</h2>
        <UnstyledPaginationIntroduction />
        </div>
      </Grid>
      </Grid>
      <p>
        After the test was over, I went back and did the exercise in my own time.
      </p>
      <br />
      <hr />

      <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
          <div style={{padding: '24px', backgroundColor: '#dddddd', marginTop: '30px', borderRadius: '10px'}}>
            <Grid  container >
              <Grid xs={6} sm={9} >
                <h2>Artists similar to Grisecon</h2>
              </Grid>
                <Grid xs={4} sm={3} style={{paddingTop: '20px'}}>
                  <SearchBar />
                </Grid>
            </Grid>

            
           

            <br />
            <ItemsDisplay items={items.itemsToDisplay} loading={loading}/>
            <PaginationBar items={items} updateItemsDisplayed={updateItemsDisplayed} setLoading={setLoading} />
          </div>

          </Grid>
          <Grid item xs={12} sm={5} >
          <div style={{padding: '24px', marginRight: '20px'}}>
            <h2>Coding Task</h2>
            <p>You are tasked with implementing a basic pagination component in React for a web application. 
            The component should display a list of items fetched from a server, showing only a limited number of items per page and allowing the user to navigate through different pages.
            </p>
            <br />
            <h2>Requirements</h2>
            <p>
            <b>Component Structure</b><br /> 
            Create a Pagination component that accepts props for totalItems (total number of items to paginate), 
            itemsPerPage (number of items to display per page), and fetchData (a function to fetch data for the current page).
            </p>
            <p>
            <b>State Management</b><br/>
            Use React&apos;s state management to keep track of the current page number and the items to be displayed.
            </p>
            <p>
            <b>Fetching Data</b><br />
            Implement the fetchData function that simulates fetching paginated data from a server. For simplicity, this can just slice the array of mock data based on the current page and itemsPerPage.
            </p>
            <p>
            <b>Navigation Controls</b><br />
            Render buttons or links for navigating to the next, previous, first, and last pages. The navigation controls should be disabled appropriately if the user is on the first or last page.
            </p>
            <p> 
            <b>Display Items</b><br />
            Render the items for the current page, displaying some placeholder content for each item (e.g., &quot;Item #1&quot;, &quot;Item #2&quot;, etc.).
            </p>
            <p>
            <b>Efficiency and Code Quality</b><br /> 
            Ensure the pagination logic is efficient and the component code is clean and understandable.
            </p>
            <p>
            <b>Navigation and search UI</b><br /> 
            Implement adaptive navigation controls and a responsive and efficient (debounce) search input field. Ensure that the search functionality works in conjunction with the pagination, updating the list of items based on the search query and current page.
            </p>
            <p>
            <b>Bonus</b><br />
            Implement error handling for the data fetching process.
            Add a feature to jump directly to a specific page number.
            Provide a dropdown to select the number of items displayed per page.
            Make sure we load the app with the latest page that the user has viewed
            Add unit tests to check core logic
            Add a button on each item and after a click, mark this item with a label that says: “touched”, add the ability to view touched items even after page reload
            </p>
            <p>
            <b>Deliverables</b><br />
            Complete React component code for the Pagination component, integrating advanced state management, rendering logic, and debounce functionality.
            A brief explanation of the logic used for integrating search with pagination, special features, and considerations for performance and scalability.
            </p>
            </div>
          </Grid>
      </Grid>
    
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
         
        </div>
      </div>

    </main>
  );
}

export default Pagination; 
