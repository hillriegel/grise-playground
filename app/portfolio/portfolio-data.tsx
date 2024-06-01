import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
    'sinch_rm': {
        title: 'Sinch Report Manager',
        mainImg: '/images/portfolio/report_manager3.png',
        mainImg_alt: 'Sinch Report Manager',
        description: 'Here&apos; some text about the Sinch Report Manager ',
        imageSet: [
            { 
                link: '/images/portfolio/report_manager1.png', 
                text: '<h2>The Sinch Report Manager</h2> The Report Manager has been rebranded three times in the 10+ years that I worked on it. <p> It is a collection of reports each set up as it\'s own microservice, with different databases and different APIs. My task was to unify this into one common platform and also unify the user athentication.' 
            },
            { link: '/images/portfolio/report_manager2.png', text: '<h2>Chart.js</h2> For charting, I used Chart.js. JSON data objecgt returned by the APIs was quite complex with many nested objects. This data had to be extracted and formulated to produce the charts.' },
            { link: '/images/portfolio/report_manager3.png', text: '<h2>Heatmap Table</h2> The heatmap rendered into a table is a custom component that required a sophisticated algorithm to generate the colors and maintain a palette that allowed the numbers to be legible.' },
            { link: '/images/portfolio/report_manager4.png', text: 'blurb about the image' },
        ]
    },
    'sinch_dashboard': {
        title: 'Sinch CustomerDashboard',
        mainImg: '/images/portfolio/sinch_dashboard2.png',
        mainImg_alt: 'Sinch Customer Dashboard',
        description: 'Here&apos; some text about the Sinch Customer Dashboard',
        imageSet: [
            { link: '/images/portfolio/sinch_dashboard2.png', text: 'blurb about the image' },
            { link: '/images/portfolio/sinch_dashboard3.png', text: 'blurb about the image' },
            { link: '/images/portfolio/sinch_dashboard4.png', text: 'blurb about the image' },
            { link: '/images/portfolio/sinch_dashboard5.png', text: 'blurb about the image' },
            { link: '/images/portfolio/sinch_dashboard6.png', text: 'blurb about the image' },
        ]
    },
}