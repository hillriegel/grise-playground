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
        <div className="item-card">
            <h2>{item.title}</h2>

                
                    <Image  
                        src={item.mainImg}
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt={item.mainImg_alt}
                    />
                    <Image
                        src="/images/portfolio/report_manager3_sm.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Sinch Report Manager"
                    />
            
        </div>
    );
};

export default PortfolioItem;
