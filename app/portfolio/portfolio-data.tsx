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
                text: `<h2>The Sinch Report Manager</h2> The Report Manager has been rebranded three times in 
                    the 10+ years that I worked on it. It was initially the Sybase Unified Platform and then became the SAP Report Manager. It went through many stages and iterations
                    with added functionality each time. 
                    <p>My portfolio seems a little thin when I worked on one mammoth project for 10 years.</p> <p> It is a collection of reports each set up as it\'s own microservice, with different databases and different APIs. My task was to unify this into one common platform and also unify the user athentication.`
            },
            { link: '/images/portfolio/report_manager4.png', text: '<h2>Chart.js</h2> For charting, I used Chart.js. JSON data objecgt returned by the APIs was quite complex with many nested objects. This data had to be extracted and formulated to produce the charts.' },
            { link: '/images/portfolio/report_manager3.png', text: '<h2>Heatmap Table</h2> The heatmap rendered into a table is a custom component that required a sophisticated algorithm to generate the colors and maintain a palette that allowed the numbers to be legible.' },

        ]
    },
    'sinch_dashboard': {
        title: 'Sinch Customer Dashboard',
        mainImg: '/images/portfolio/sinch_dashboard2.png',
        mainImg_alt: 'Sinch Customer Dashboard',
        description: 'Here&apos; some text about the Sinch Customer Dashboard',
        imageSet: [
            { link: '/images/portfolio/sinch_dashboard2.png', text: 'I worked with some very talented and dedicated UI designers at Sinch. They provided Figma layouts and were committed to getting the designs as perfectly implemented as possible. I learned a lot about being detail-oriented from the design experts at Sinch. ' },
            { link: '/images/portfolio/sinch_dashboard3.png', text: 'There&apos;s a stereotype that coders don&apos;t care about design, or don&apos;t have an eye for it. It is definitely true that as I got more and more into the lines of code and getting the page to perform and display the information it needed to, as a trained designer, I still took time to appreciate the aesthetics.' },
            { link: '/images/portfolio/sinch_dashboard4.png', text: 'blurb about the image' },
            { link: '/images/portfolio/sinch_dashboard5.png', text: 'blurb about the image' },
            { link: '/images/portfolio/sinch_dashboard6.png', text: 'blurb about the image' },
        ]
    },
    'adam_wolpert': {
        title: 'Adam Wolpert Gallery',
        mainImg: '/images/portfolio/adam_wolpert2.png',
        mainImg_alt: 'Adam Wolpert Website',
        description: 'Here&apos; some text about the Sinch Customer Dashboard',
        imageSet: [
            { link: '/images/portfolio/adam_wolpert2.png', text: 'blurb about the image' },
            { link: '/images/portfolio/adam_wolpert3.png', text: 'blurb about the image' },
        ]
    },
    'portraits': {
        title: 'Digital (3D) Portraits',
        mainImg: '/images/portfolio/octoplasm_1.png',
        mainImg_alt: 'Portraits',
        description: 'Here&apos; some text about the Sinch Customer Dashboard',
        imageSet: [
            { link: '/images/portfolio/octoplasm_1.png', text: 'The album art for Octoplasm featured a portrait of my friend, Raul. It was created using 3D software and then digitally pained in Photoshop to add the matches and smoke.' },
            { link: '/images/portfolio/luismesa_metalsnake_thumb.png', text: 'blurb about the image' },
            { link: '/images/portfolio/raul_alchemy_thumb.png', text: 'blurb about the image' },
            { link: '/images/portfolio/ryuichi_deva_thumb.png', text: 'blurb about the image' },
            { link: '/images/portfolio/wag_thumb.png', text: 'blurb about the image' },
            { link: '/images/portfolio/wylu_thumb.png', text: 'blurb about the image' },
        ]
    }
}