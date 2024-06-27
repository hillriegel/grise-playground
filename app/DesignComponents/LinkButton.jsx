import ConstructionIcon from '@mui/icons-material/Construction';
import Link from 'next/link';
export default function LinkButton({ label, link }) {

    return (
        <div style={{marginTop: '30px'}}>
            <div className="link-button">
                <Link href={link}><ConstructionIcon style={{marginRight: '10px'}}/>{label}</Link>
            </div>
        </div>
    )
}