
import styles from "./page.module.css";
import SnakeGame from "./components/SnakeGame";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <div className="page-title">
          <h1><SportsEsportsIcon style={{marginTop: '-14px'}} /> &nbsp; Games :: Smale</h1>
        </div>

        <br />
        <div className="main-content">
                <SnakeGame />
        </div>
    </main>
  );
}
