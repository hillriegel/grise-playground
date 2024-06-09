import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
    'sinch_rm': {
        title: 'Sinch Report Manager',
        mainImg: '/images/portfolio/report_manager3.png',
        mainImg_alt: 'Sinch Report Manager',
        description: 'Here&apos; some text about the Sinch Report Manager ',
        tags: ['JavaScript', 'jQUERY', 'Bootstrap', 'Authorization', 'Restful APIs', 'Data Visualization', 'Project Manager', 'CI/CD', 'Jira', 'Figma', 'Photoshop', 'Illustrator', 'Agile','Enterprise','0-1/Greenfield', 'Complete Redesign', 'Authorization'],
        imageSet: [
            { 
                link: '/images/portfolio/report_manager1.png', 
                text: `<h2>The Sinch Report Manager</h2> The Report Manager has been rebranded three times in 
                    the 10+ years that I worked on it. It was initially the Sybase Unified Platform and then became the SAP Report Manager. It went through many stages and iterations
                    with added functionality each time. 
                    <p>I worked on one mammoth project for 10 years.</p> 
                    <p> It is a collection of reports each set up as it\'s own microservice, with different databases and different APIs. My task was to unify this into one common platform and also unify the user athentication.</p>`
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
        tags: ['React', 'React Router', 'Node', 'Material-UI', 'Webpack', 'gRPC', 'GraphQL', 'CSS', 'HTML5', 'UI/UX', 'User Testing', 'Data Intensive', 'BFF', 'Jest'],
        imageSet: [
            { link: '/images/portfolio/sinch_dashboard2.png', text: 'I worked with some very talented and dedicated UI designers at Sinch. They provided Figma layouts and were committed to getting the designs as perfectly implemented as possible. I learned a lot about being detail-oriented from the design experts at Sinch. ' },
            { link: '/images/portfolio/sinch_dashboard3.png', text: 'There&apos;s a stereotype that coders don&apos;t care about design, or don&apos;t have an eye for it. It is definitely true that as I got more and more into the lines of code and getting the page to perform and display the information it needed to, as a trained designer, I still took time to appreciate the aesthetics.' },
            { link: '/images/portfolio/sinch_dashboard4.png', text: '<p>There are many aspects to this project that make it the most sophisticated application I have worked on. Multiple BFFs hitting multiple backends, complicated backends, both gRPC/node and Java BFFs, a series of 10 fully self-contained modules, 4 different teams including a core team, and the added challenge of international working hours, Honduras, Brazil, India, Pland, Sweden.<p><p>I learned a lot from my fellow developers.' },
            { link: '/images/portfolio/sinch_dashboard5.png', text: '<p>Another challenging and also wonderful thing about this project was that it came equipped with a fully-reallized design system based off of Material-UI. It was an interesting combination of custom components and add-ons to Material-UIs components. To implement it meant finding the components, which existed without any documentation. Is there a pagination component? Probably. Probably two. Which one should I use? Oh, this one does not do...</p><p>And, at the same time, once you know the components, it is very satisfying to be able to work with them.</p><p>This also meant that progression and updating were difficult. The system was based off of MUI-3, and MUI-4 came with many improvements. I ended up having to create custom components.</p>' },
            { link: '/images/portfolio/sinch_dashboard6.png', text: 'Ideally, I would like to work with and have co-ownership of developing, maintaining, and improving a design system with other UI/UX professionals. This project underscored the importance of being able to regularly improve and refresh the design components. When the design system istelf is structured with version dependencies, like MUI3, it hinders development in other areas.</p>' },
        ]
    },
    'adam_wolpert': {
        title: 'Adam Wolpert Gallery',
        mainImg: '/images/portfolio/adam_wolpert2.png',
        mainImg_alt: 'Adam Wolpert Website',
        description: 'Here&apos; some text about the Sinch Customer Dashboard',
        tags: ['HTML5', 'Design', 'CSS'],
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
        tags: ['3D','Photoshop', 'Digital Painting','Graphic Design'],
        imageSet: [
            { link: '/images/portfolio/octoplasm_1.png', text: 'The album art for Octoplasm featured a portrait of my friend, Raul. It was created using 3D software and then digitally pained in Photoshop to add the matches and smoke.' },
            { link: '/images/portfolio/owl_witch.png', text: 'This is not a 3D portrait. It was created using Procreate on the Ipad.'},
            { link: '/images/portfolio/luismesa_metalsnake_thumb.png', text: 'Wire-frame modeling, model building, skin texture, 3D Render, Photoshop painting' },
            { link: '/images/portfolio/raul_alchemy_thumb.png', text: 'Wire-frame modeling, model building, skin texture, 3D Render, Photoshop painting' },
            { link: '/images/portfolio/ryuichi_deva_thumb.png', text: 'Wire-frame modeling, model building, skin texture, 3D Render, Photoshop painting' },
            { link: '/images/portfolio/wag_thumb.png', text: 'Wire-frame modeling, model building, skin texture, 3D Render, Photoshop painting' },
        ]
    }
}