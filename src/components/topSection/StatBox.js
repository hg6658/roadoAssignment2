
import {Chart as ChartJS} from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import StatBar from './StatBar';
export default function StatBox(props){

    const centerTextPlugin = {
        id: 'centerText',
        afterDraw: (chart) => {
            const ctx = chart.ctx;
            const canvas = chart.canvas;
    
            const total = chart.data.datasets.reduce((accumulator, dataset) => {
                return accumulator + dataset.data.reduce((acc, value) => acc + value, 0);
            }, 0);
    
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
    
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'bold 20px Arial';
    
            ctx.fillText(total, centerX, centerY);
        }
    };



    let data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [30, 20, 50], // Data values for each segment
                backgroundColor: ['#FFCB49', '#7464FF', '#4FD2B5'], // Background colors for each segment
                hoverBackgroundColor: ['#FFCB49', '#7464FF', '#4FD2B5'], // Hover background colors for each segment
                label: 'Dataset 1' // Optional label for the dataset
            }
        ]
    };
    const options = {
        plugins: {
            legend: {
                display: false // Hide the legend
            }
        },
        /*elements: {
            arc: {
                borderWidth: 20, // Adjust the width of the doughnut ring
                borderColor: '#ffffff' // Set the border color of the doughnut ring
            }
        },*/
        cutout: 60,
        animation: {
            onComplete: function (animation) {
                const chartInstance = animation.chart;
                const ctx = chartInstance.ctx;

                const total = chartInstance.data.datasets.reduce((accumulator, dataset) => {
                    return accumulator + dataset.data.reduce((acc, value) => acc + value, 0);
                }, 0);

                const centerX = (chartInstance.chartArea.left + chartInstance.chartArea.right) / 2;
                const centerY = (chartInstance.chartArea.top + chartInstance.chartArea.bottom) / 2;

                ctx.fillStyle = '#000000';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('Total', centerX, centerY);
                ctx.fillText(total, centerX, centerY+20);
            }
        }
    };
    let StatBarData = [
        {
            backgroundColor: `linear-gradient(90deg, #FFFFFF 0%, #FFCB49 100%)`,
            data: 50,
            label: 'UpComing'
        },
        {
            backgroundColor:`linear-gradient(90deg, #FFFFFF 0%, #7464FF 100%)`,
            data: 100,
            label: 'Ongoing'
        },
        {
            backgroundColor:`linear-gradient(90deg, #FFFFFF 0%, #4FD2B5 100%)`,
            data: 50,
            label: 'Completed'
        }
    ]
    return <div className="stats-box" id="stat1">
    <div id="boxHeading">{props.data.name}</div>    
    <div className="doughnut">
        <Doughnut data={data} options={options}/>
    </div>
    <StatBar data={StatBarData[0]}/>
    <StatBar data={StatBarData[1]}/>
    <StatBar data={StatBarData[2]}/>
</div>
;
}