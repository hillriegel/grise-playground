'use client'

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import GithubButton from '../DesignComponents/GithubButton';
import PatternIcon from '@mui/icons-material/Pattern';
import { REPOSITORIES } from './repositories';
import './repositories.css';
import LinkIcon from '@mui/icons-material/Link';
import { debounce } from 'lodash'; // You might need to install lodash if not already installed

export default function Registry() {

    const [searchTags, setSearchTags] = useState('');
    const [filteredRepositories, setFilteredRepositories] = useState(REPOSITORIES);

    useEffect(() => {
        filterRepositories(searchTags);
    }, [searchTags]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTags(event.target.value);
    };

    const filterRepositories = debounce((tags: string) => {
        if (!tags.trim()) {
            setFilteredRepositories(REPOSITORIES);
        } else {
            const inputTags = tags.split(',').map(tag => tag.trim().toLowerCase());
            const filtered = REPOSITORIES.filter(repo =>
                repo.tags.some(repoTag =>
                    inputTags.includes(repoTag.toLowerCase())
                )
            );
            setFilteredRepositories(filtered);
        }
    }, 300); // Adjust debounce time as needed

    function handleClear() {
        setSearchTags('');
        setFilteredRepositories(REPOSITORIES);
    }


    return (
        <main className="flex min-h-screen flex-col">
        <div className="page-title">
            <h1><PatternIcon style={{marginBottom: '4px'}} /> &nbsp; Design Patterns :: Registry</h1>
        </div>

        <div className="main-content">
               
                <h2>Design Patterns</h2>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                      
                        <p>
                            Design patterns are the heart of coding. Remembering how to handle actions on routes, or
                            the most efficient pattern for using refs, or what the custom hooks provided by tanstack are 
                            is a big task. 
                        </p>
                        <p>
                            But setting up projects and identifying them with tags such as "single page" or "redux", I can
                            quickly enter a tag or series of tags and call up the projects that make use of those design
                            patterns. From there I can follow the link to the github repository and quickly pull up the code.
                        </p>

                        <form>
                            <div className="search-container">
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <div className="search-input" >
                                            <input 
                                                type="text" 
                                                className="input-field" 
                                                value={searchTags} 
                                                onChange={handleInputChange} 
                                                placeholder="enter tags to search"
                                            />
                                            {searchTags !== '' &&
                                                <button
                                                    className="clear-button"
                                                    onClick={handleClear} >
                                                        X
                                                </button>
                                            }
                                        </div>
                                    </Grid>
                
                               </Grid>
                            
                                
                                </div>
                        </form>


                        <br />

                        <h1>Matching Projects</h1>

                        <ul className="repo-list">
                            {filteredRepositories && filteredRepositories.map((repo) => (
                                <li key={repo.id} className="repo-item">
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Image 
                                                className="simage"
                                                src={repo.image}
                                                width="200" 
                                                height="147" alt={repo.name} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Link href={repo.url} target="_blank" rel="noopener noreferrer"> {/* Improved link attributes for security and accessibility */}
                                                <div className="git-link">
                                                    <LinkIcon /> {repo.name}
                                                </div>
                                            </Link>
                                            {repo.tags.join(', ')}
                                        </Grid>
                                    </Grid>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>

               </div>
          </main>
    );
};
