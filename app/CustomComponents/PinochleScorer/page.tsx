'use client'

import React from 'react';
import GithubButton from '../../DesignComponents/GithubButton';
import CodeToHTMLDisplay from '../../utils/convertCodeToHtml';
import {
  Paper,
  Button,
  TextField,
  Grid
} from '@mui/material';
import ChairIcon from '@mui/icons-material/Chair';

const PinochleScorer = () => {

    const pinochleCode = `
    const classPoints = {
        'Show Dix': 10,
        'Royal Marriage': 40,
        'Common Marriage': 20,
        'Pinochle': 40,
        'Double Pinochle': 300,
        'Aces Around': 100,
        'Kings Around': 80,
        'Queens Around': 60,
        'Jacks Around': 40,
        'Run (150)': 150,
        'Double Run': 1500,
    };
    
    const cardPoints = {
        Aces: 11,
        Tens: 10,
        Kings: 4,
        Queens: 3,
        Jacks: 2,
    };
    
    function ScorePage() {
        const initialPlayerScores: PlayerScoresData = {
            player1: { name: "Paula", totalScore: 0, 
                      scoreList: [{ class: 'start', points: 0 }] },
            player2: { name: "Joy", totalScore: 0, 
                      scoreList: [{ class: 'start', points: 0 }] }
        };
    
        const initialCardCounts = {
            player1: { Aces: 0, Tens: 0, Kings: 0, Queens: 0, Jacks: 0 },
            player2: { Aces: 0, Tens: 0, Kings: 0, Queens: 0, Jacks: 0 }
        };
    
        const [playerScores, setPlayerScores] = useState<PlayerScoresData>(initialPlayerScores);
        const [cardCounts, setCardCounts] = useState(initialCardCounts);
        const [showNameForm, setShowNameForm] = useState(false);
    
        const resetAll = () => {
            setPlayerScores(initialPlayerScores);
            setCardCounts(initialCardCounts);
        };
    
        const handleNameSubmit = (name: string, playerId: PlayerId) => {
            setShowNameForm(false);
            setPlayerScores(prevScores => ({
                ...prevScores,
                [playerId]: { ...prevScores[playerId], name: name }
            }));
        };
    
        const isValidClass = (key: any): key is keyof typeof classPoints => {
            return key in classPoints;
        };
    
        const updateScore = (scoreClass: string, playerId: PlayerId) => {
            if (isValidClass(scoreClass)) {
                setPlayerScores(prevScores => {
                    const updatedScores = { ...prevScores };
                    const currentList = [...updatedScores[playerId].scoreList];
                    const scoreIndex = currentList.findIndex(item => item.class === scoreClass);
    
                    if (scoreIndex !== -1) {
                        currentList[scoreIndex] = {
                            ...currentList[scoreIndex],
                            points: currentList[scoreIndex].points + classPoints[scoreClass]
                        };
                    } else {
                        currentList.push({ class: scoreClass, points: classPoints[scoreClass] });
                    }
    
                    // Recalculate totalScore
                    const totalScore = currentList.reduce((total, item) => total + item.points, 0);
    
                    updatedScores[playerId].scoreList = currentList;
                    updatedScores[playerId].totalScore = totalScore;
    
                    return updatedScores;
                });
            } else {
               console.log('error');
            }
        };
    
        const deleteMeldItem = (playerId: PlayerId, scoreClass: string) => {
            setPlayerScores(prevScores => {
                const updatedScores = { ...prevScores };
                const currentList = [...updatedScores[playerId].scoreList];
                const newList = currentList.filter(item => item.class !== scoreClass);
    
                // Recalculate totalScore
                const totalScore = newList.reduce((total, item) => total + item.points, 0);
    
                updatedScores[playerId].scoreList = newList;
                updatedScores[playerId].totalScore = totalScore;
    
                return updatedScores;
            });
        };
    
        const handleIncrement = useCallback((cardType: keyof typeof cardPoints, playerId: PlayerId) => {
            setPlayerScores(prevScores => {
                const updatedScores = { ...prevScores };
                updatedScores[playerId].totalScore += cardPoints[cardType];
                return updatedScores;
            });
    
            setCardCounts(prevCounts => {
                const updatedCounts = { ...prevCounts };
    
                updatedCounts[playerId][cardType] ++;
                return updatedCounts;
            });
        }, []);
    
        const handleDecrement = useCallback((cardType: keyof typeof cardPoints, playerId: PlayerId) => {
            setPlayerScores(prevScores => {
                const updatedScores = { ...prevScores };
                updatedScores[playerId].totalScore -= cardPoints[cardType];
                return updatedScores;
            });
    
            setCardCounts(prevCounts => {
                const updatedCounts = { ...prevCounts };
                if (updatedCounts[playerId][cardType] > 0) {
                    updatedCounts[playerId][cardType] -= 1;
                }
                return updatedCounts;
            });
        }, []);`;
    
    return (
      <main className="flex min-h-screen flex-col">
      <div className="page-title">
        <h1><ChairIcon style={{marginTop: '4px'}} /> &nbsp; React Components :: Pinochle Scorer</h1>
      </div>
      <br />
      <div className="main-content">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <h2>Keeping Score</h2>
            <p>Often my dining room table looks like a pinochle parlor. My mother and sister play a few quick games almost every day. They use a big stack
              of scratch paper and keep score by hand. Watching them scribble on the paper and keep track of the scores for different melds and then counting
              up the points from the tricks made me think
              there could be an easier way to do it with an app.
            </p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <GithubButton label="pinochle-scorer" link="https://github.com/hillriegel/pinochle-scorer"/>
      
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
          
              <div>
                <iframe src="https://pinochle-scorer.vercel.app/"
                  title="Embedded React App"
                  width="100%"
                  height="850px"
                  style={{ border: 'solid 1px #ddaa00' }}>
                </iframe>
              </div>
           </Paper>

        </Grid>
        </Grid>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <h2>Managing State</h2>
            <p>
              There isn't really anything super complicated about this code except the components need to pass a lot of state around or lift state.
            </p>
            <p>The majority of the state is kept in the parent component and that means it will be reset if the page is reloaded.</p>
            <p>A second pass at this component would be to add Redux to it and keep state in a central place. A third pass would be to set up a MongoDB and 
              allow the users to keep track of their wins and chart those wins over time. (My mother is convinced that my sister always wins.)
            </p>
          </Grid>
          <Grid item xs={12} sm={9}>

          <div className="code-content" style={{padding: '10px'}}>
              <CodeToHTMLDisplay code={pinochleCode} />
              <br />
          </div>   
          </Grid>
        </Grid>
        </div>
      </main>
    );
};

export default PinochleScorer;
