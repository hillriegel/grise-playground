'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import ItemsDisplay from './ItemsDisplay';
import PaginationBar from './PaginationBar';
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';
import UnstyledPaginationIntroduction from './SampleMuiPagination';
//import FetchSpotify from './fetchSpotify';

const Pagination = () => {
  const [loading, setLoading] = useState(false);

  /*initialize the items to display with the first 5 items
  this would be set when the component first loads and the initial items are retrieved
  from the API. In this case, they are hardcoded. For this to work as designed, the API
  would need to accept a page number and a number of items to return */
  const [itemsDisplayed, setItemsDisplayed] = useState (
      {
        pageNumber: 1,
        rangeStart: 1,
        rangeEnd: 5,
        itemsToDisplay: [      {
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
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4aEnNH9PuU1HF3TsZTru54"
          },
          "followers" : {
            "href" : null,
            "total" : 661469
          },
          "genres" : [ "alternative dance", "art pop", "electronica", "folktronica", "indietronica", "intelligent dance music", "trip hop" ],
          "href" : "https://api.spotify.com/v1/artists/4aEnNH9PuU1HF3TsZTru54",
          "id" : "4aEnNH9PuU1HF3TsZTru54",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab6761610000e5ebf9da16d673af005d53bab9cc",
            "width" : 640
          }, {
            "height" : 320,
            "url" : "https://i.scdn.co/image/ab67616100005174f9da16d673af005d53bab9cc",
            "width" : 320
          }, {
            "height" : 160,
            "url" : "https://i.scdn.co/image/ab6761610000f178f9da16d673af005d53bab9cc",
            "width" : 160
          } ],
          "name" : "Caribou",
          "popularity" : 52,
          "type" : "artist",
          "uri" : "spotify:artist:4aEnNH9PuU1HF3TsZTru54"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
          },
          "followers" : {
            "href" : null,
            "total" : 681949
          },
          "genres" : [ "chillwave", "downtempo", "electronica", "indietronica", "intelligent dance music" ],
          "href" : "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
          "id" : "5oOhM2DFWab8XhSdQiITry",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab6761610000e5eb4dc28dcee5516d2e89690525",
            "width" : 640
          }, {
            "height" : 320,
            "url" : "https://i.scdn.co/image/ab676161000051744dc28dcee5516d2e89690525",
            "width" : 320
          }, {
            "height" : 160,
            "url" : "https://i.scdn.co/image/ab6761610000f1784dc28dcee5516d2e89690525",
            "width" : 160
          } ],
          "name" : "Tycho",
          "popularity" : 53,
          "type" : "artist",
          "uri" : "spotify:artist:5oOhM2DFWab8XhSdQiITry"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2exkZbmNqMKnT8LRWuxWgy"
          },
          "followers" : {
            "href" : null,
            "total" : 715317
          },
          "genres" : [ "electronica", "indietronica" ],
          "href" : "https://api.spotify.com/v1/artists/2exkZbmNqMKnT8LRWuxWgy",
          "id" : "2exkZbmNqMKnT8LRWuxWgy",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab6761610000e5eb55a94b7fa21c9dbb2b986229",
            "width" : 640
          }, {
            "height" : 320,
            "url" : "https://i.scdn.co/image/ab6761610000517455a94b7fa21c9dbb2b986229",
            "width" : 320
          }, {
            "height" : 160,
            "url" : "https://i.scdn.co/image/ab6761610000f17855a94b7fa21c9dbb2b986229",
            "width" : 160
          } ],
          "name" : "Moderat",
          "popularity" : 54,
          "type" : "artist",
          "uri" : "spotify:artist:2exkZbmNqMKnT8LRWuxWgy"
        },
        {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7zrkALJ9ayRjzysp4QYoEg"
          },
          "followers" : {
            "href" : null,
            "total" : 379306
          },
          "genres" : [ "electronica", "future garage", "indie soul" ],
          "href" : "https://api.spotify.com/v1/artists/7zrkALJ9ayRjzysp4QYoEg",
          "id" : "7zrkALJ9ayRjzysp4QYoEg",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab6761610000e5ebbeaea33eaf23808b73167155",
            "width" : 640
          }, {
            "height" : 320,
            "url" : "https://i.scdn.co/image/ab67616100005174beaea33eaf23808b73167155",
            "width" : 320
          }, {
            "height" : 160,
            "url" : "https://i.scdn.co/image/ab6761610000f178beaea33eaf23808b73167155",
            "width" : 160
          } ],
          "name" : "Maribou State",
          "popularity" : 61,
          "type" : "artist",
          "uri" : "spotify:artist:7zrkALJ9ayRjzysp4QYoEg"
        } ]
      }
  )

  return (
    <main className="flex min-h-screen flex-col" >
    <div className="page-title">
        <h1>React Components: Custom Pagination</h1>
    </div>


  <div className="main-content">
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
    
              <p>
                After the test was over, I went back and did the exercise in my own time.
              </p>
              <br />
              <h2>Custom Pagination Component</h2>
              <div className="component">
                <Grid  container >
                  <Grid xs={6} sm={9} >
                    <h2 className="white">Artists similar to Grisecon</h2>
                  </Grid>
                    <Grid xs={4} sm={3} style={{paddingTop: '20px'}}>
                      <SearchBar />
                    </Grid>
                </Grid>
                  <br />
                  <ItemsDisplay items={itemsDisplayed.itemsToDisplay} loading={loading}/>
                  <PaginationBar itemsDisplayed={itemsDisplayed} setItemsDisplayed={setItemsDisplayed} setLoading={setLoading} />
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

    </div>
    </main>
  );
}

export default Pagination; 
