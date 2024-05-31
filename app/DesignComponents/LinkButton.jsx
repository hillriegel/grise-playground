import ConstructionIcon from '@mui/icons-material/Construction';

export default function LinkButton({ label, link }) {

    return (
        <div style={{marginTop: '30px'}}>
            <div className="link-button">
                <a href={link} target="new"><ConstructionIcon style={{marginRight: '10px'}}/>{label}</a>
            </div>
        </div>
    )
}