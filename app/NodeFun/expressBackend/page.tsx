'use client'

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';


export default function CssDemo() {
    type FlexDirection = 'row' | 'column';
    type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

    const [alignment, setAlignment] = useState<AlignItems>('flex-start');
    const [direction, setDirection] = useState<FlexDirection>('row');

    return (
        <main className="flex min-h-screen flex-col" >
            <div style={{border: 'solid 1px', 
            padding: '20px', 
            marginLeft: '-40px', 
            width: '810px',
            backgroundColor: '#155263'}}>
                <h1>Node Fun | Express Background with MongoDB in the Cloud</h1></div>


          <div className="main-content">
               
                <h2>Example of FlexBox styling</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <p>I like to remember what justify-content vs. align-content vs. align-items does. I made this
                            handy little interactive display so that I could set the styles and see the layout 
                            change dynamically.
                        </p>
                        <br />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className="css-content">
                            height: 400px;<br />
                            display: flex;<br />
                            padding: 20px;<br />
                            margin: 20px;<br />
                            justify-content: center;<br />
                            align-content: flex-start;<br />
                            border-radius: 5px;<br />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                     </Grid>
                </Grid>

                <br />

            <div className="features-buttons">
                <i>Align items affects vertical placement</i><br />
                <button className={`btn btn-primary ${alignment === 'flex-start' ? 'selected' : ''}`} onClick={()=>setAlignment('flex-start')}>align-items: flex-start</button>
                <button className={`btn btn-primary ${alignment === 'flex-end' ? 'selected' : ''}`} onClick={()=>setAlignment('flex-end')}>align-items: flex-end</button>
                <button className={`btn btn-primary ${alignment === 'center' ? 'selected' : ''}`} onClick={()=>setAlignment('center')}>align-items: center</button>
                <button className={`btn btn-primary ${alignment === 'baseline' ? 'selected' : ''}`} onClick={()=>setAlignment('baseline')}>align-items: baseline</button>
                <button className={`btn btn-primary ${alignment === 'stretch' ? 'selected' : ''}`} onClick={()=>setAlignment('stretch')}>align-items: stretch</button>
                <br />
                <i>Flex-Direction: row or column</i><br />
                <button className={`btn btn-primary ${direction === 'row' ? 'selected' : ''}`} onClick={()=>setDirection('row')}>flex-direction: row</button>
                <button className={`btn btn-primary ${direction === 'column' ? 'selected' : ''}`} onClick={()=>setDirection('column')}>flex-direction: column</button>
    
            </div>
              </div>
              <div style={{margin: '20px'}}>
              <section className="component flexbox-row" style={{ alignItems: alignment, flexDirection: direction}}>
                  <div className="feature alt-bkg">
                      <div><h3>Griseconica Remixed</h3></div>
                      <br />
                      <iframe src="https://open.spotify.com/embed/album/0JkQJUi8MJFNLG7AvpXBeL?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <p>Released in April, 2024, <i>Griseconica Remixed</i> is a collection of dance mixes (120-128 bpm) of tracks
                      from the album <i>Griseconica</i>.</p>
                      <p><b>cover art by Grisecon</b></p>
                  </div>
                  <div className="feature alt-bkg">
                      <h3>Griseconica</h3>
                      <br />
                      <iframe src="https://open.spotify.com/embed/album/0xuPPPmCs1gClEtGP84pAI?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <p>This album is centered around a track called &quot;Behold.&quot; &quot;Behold&quot; itself was spawned from &quot;Grass / Ocean&apos;s Poem&quot;
                        a track that has been shazam-ed around the world tens of thousands of times.
                        </p>
                        <p> The album also features a sort of sibling track
                        called "Tight Monolith / Song of Myself." Both tracks feature spoken word readings of excerpts from the poetry of Walt Whitman.
                      </p>
                      <p><b>Cover art by Michael Koehler</b></p>
                  </div>
                  <div className="feature alt-bkg">
                      <h3>Backseat Driving</h3>
                      <br />
                      <iframe  src="https://open.spotify.com/embed/album/0ody1YxJZqNqTMNSqG3vNy?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <p>The dream that we would have FSD and be able to enjoy a little fun time in the backseat of our car while we 
                        took a trip down the PCH seems forever out of reach.
                        </p><p>It&apos;s the inspiration for this album, a road trip album, and a nod
                        to the AOR rock of the late 70s (Donald Fagan&apos;s &quot;The Nightfly&quot; in particular).
                        </p>
                        <p><b>cover art by Niko</b></p>
                  </div>
              </section>
              </div>
              <br />
              <div style={{margin: '20px'}}>
              <h2>Example of a Grid</h2>
              <br />
              <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className="css-content">
                            display: grid;<br />
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        </div>
                    </Grid>
                </Grid>
              </div>
              <section className="cards">
                  <div className="card">
                      <h3>Card 1</h3>
                      <p>This is a description of card 1.</p>
                  </div>
                  <div className="card">
                      <h3>Card 2</h3>
                      <p>This is a description of card 2.</p>
                  </div>
                  <div className="card">
                      <h3>Card 3</h3>
                      <p>This is a description of card 3.</p>
                  </div>
              </section>

             
          </main>
    );
};
