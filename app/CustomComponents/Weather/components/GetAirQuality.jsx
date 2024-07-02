import { useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';

export default function GetAirQuality({lat, long}) {

    const [overallAqi, setOverallAqi] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const svgRef = useRef();

    const API_KEY = 'ZHndFVwNq4K506Ao4f4lOg==Z2pRmhAExqQRxa42';
    const URL = `https://api.api-ninjas.com/v1/airquality?lat=${lat}&lon=${long}`
    //const URL = `https://api.api-ninjas.com/v1/airquality?city=Oakland`;


    useEffect(() => {
        const getAQ = async () => {
            try {
                const response = await fetch(URL, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': API_KEY
                    }
                });
                if (!response.ok) {
                    throw new Error('Air Quality Network Response was not ok.')
                }
                const result = await response.json();
                setOverallAqi(result.overall_aqi);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getAQ();

    },[lat,long]);

    useEffect(() => {
        if (overallAqi !== null) {
          const svg = d3.select(svgRef.current);
          const width = 600;
          const height = 100;
          const margin = { top: 20, right: 30, bottom: 40, left: 90 };
    
          svg.selectAll('*').remove(); // Clear previous chart
    
          // Define the gradient
          svg.append("defs")
            .append("linearGradient")
            .attr("id", "colorGradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%")
            .selectAll("stop")
            .data([
              { offset: "0%", color: "blue" },
              { offset: "25%", color: "green" },
              { offset: "50%", color: "yellow" },
              { offset: "75%", color: "orange" },
              { offset: "90%", color: "red" },
              { offset: "100%", color: "purple" }
            ])
            .enter().append("stop")
            .attr("offset", d => d.offset)
            .attr("stop-color", d => d.color);
    
          const x = d3.scaleLinear()
            .domain([0, 500])
            .range([margin.left, width - margin.right]);
    
          svg.append('g')
            .selectAll('rect')
            .data([overallAqi])
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', x(0))
            .attr('y', margin.top)
            .attr('width', 500)
            .attr('height', height - margin.top - margin.bottom)
            .attr('fill', 'url(#colorGradient)');
    
          svg.append('g')
            .attr('transform', `translate(0,${margin.top})`)
            .call(d3.axisTop(x).ticks(10, "~s"));
    
          svg.append('text')
            .attr('class', 'bar-label')
            .attr('x', x(overallAqi)+20)
            .attr('y', margin.top + (height - margin.top - margin.bottom) / 2)
            .attr('dy', '0.35em')
            .attr('fill', 'white')
            .attr('text-anchor', 'middle')
            .text(overallAqi.toFixed(2));
        }
      }, [overallAqi]);

    if (loading) {
        return <div>Air Quality Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={{marginTop: '20px'}}>
            <h2 style={{color: "#ffffff"}}>Air Quality</h2>
            <div style={{marginLeft: '-85px'}}>
            
            <svg ref={svgRef} width="600" height="400"></svg>
            </div>
        </div>
    );
}