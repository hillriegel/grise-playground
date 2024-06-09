// PortfolioItem.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PORTFOLIO_DATA } from './portfolio-data';
import { PortfolioData } from './types';
import './portfolioStyles.css';

interface PortfolioItemProps {
    id: keyof PortfolioData; // This ensures that id is a valid key of PortfolioData
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ id }) => {
    const item = PORTFOLIO_DATA[id as keyof typeof PORTFOLIO_DATA];

    return (
        <div className="item-card" style={{height: '650px'}}>
            <h2>{item.title}</h2>
                    <Image  
                        src={item.mainImg}
                        width={800}
                        height={760}
                        alt={item.mainImg_alt}
                        style={{borderRadius: '4px', border: 'solid 1px #444444'}}
                    />
                <div className="tag-container">
                    {item.tags.map((tag) => 
                        <div className="tag" key={tag}>{tag}</div>)}
                </div>           
        </div>
    );
};

export default PortfolioItem;
