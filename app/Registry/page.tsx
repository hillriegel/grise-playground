'use client'

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import GithubButton from '../DesignComponents/GithubButton';
import PatternIcon from '@mui/icons-material/Pattern';
import { REPOSITORIES } from './repositories';
import './repositories.css';


export default function Registry() {

    const [searchTags, setSearchTags] = useState('');
    const [filteredRepositories, setFilteredRepositories] = useState(REPOSITORIES);

    useEffect(() => {
        const tags = searchTags.split(',').map(tag => tag.trim().toLowerCase());
        const filtered = REPOSITORIES.filter(repo =>
            repo.tags.some(tag => tags.includes(tag))
        );
        setFilteredRepositories(filtered);
    }, [searchTags])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTags(event.target.value);
        
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const tags = searchTags.split(',').map(tag => tag.trim().toLowerCase());
        const filtered = REPOSITORIES.filter(repo =>
            repo.tags.some(tag => tags.includes(tag))
        );
        setFilteredRepositories(filtered);
    };

    function handleClear() {
        setSearchTags('');
    }
    return (
        <main className="flex min-h-screen flex-col">
        <div className="page-title">
            <h1><PatternIcon style={{marginBottom: '4px'}} /> &nbsp; Design Patterns :: Registry</h1>
        </div>

        <div className="main-content">
               
                <h2>Design Patterns</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7}>
                      
                        <p>The idea here is to use all the different projects and apps as references
                            for design patterns. There are so many useful patterns in these projects
                            but it could be difficult to remember which projects have certain patterns. By
                            labeling the projects and apps with tags that identify the subjects of their
                            design patterns, you can search for a tag, identify the projects that
                            make use of those patterns, and then locate the pattern.
                        </p>
                        <p>This should also have the ability to add new projects, add and edit tags.</p>
                        <p>The challenge here would be to find a way to attach tags to specific blocks of code 
                            that could then be pulled up.
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
                                    <Grid item xs={6}>
                                        <button style={{marginTop: '0px'}} onClick={handleClick}>Search</button>
                                    </Grid>
                                </Grid>
                            
                                
                                </div>
                        </form>


                        <br />

                        <h1>Matching Projects</h1>

                        <ul className="repo-list">
                        {filteredRepositories && filteredRepositories.map((repo) => {
                            return (
                                <li key={repo.id} className="repo-item">
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Image src={repo.image} width="200" height="147" alt={repo.name} />
                                        </Grid>
                                        <Grid item xs={8}>
                                        <Link href={repo.url}><h3>{repo.name}</h3></Link>
                                        
                                            {repo.tags.join(', ')}
                                        </Grid>
                                    </Grid>

                                </li>
                            )
                        })}
                        </ul>

                    </Grid>
                </Grid>

               </div>
          </main>
    );
};
