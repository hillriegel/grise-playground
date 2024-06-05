import GitHubIcon from '@mui/icons-material/GitHub';

export default function GithubButton({ label, link }) {

    return (
        <div style={{marginTop: '60px'}}>
        <h3>checkout the repository here:</h3>
        <div  className="link-button glow-effect">
            <a href={link} target="new"><GitHubIcon style={{marginRight: '10px'}}/>{label}</a>
        </div>
        </div>
    )
}