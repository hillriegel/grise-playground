import CropFreeIcon from '@mui/icons-material/CropFree';
import './Card.css';

export default function Card({flipped, value, onClick}) {
    console.log('flipped = ', flipped);
    let cardClassName = 'card';
    if (!flipped) {
        cardClassName += ' card-back';
    }

    return (
        <div className={cardClassName} onClick={onClick}>
            {flipped && value}
            {!flipped && <CropFreeIcon />}
        </div>
    )
}