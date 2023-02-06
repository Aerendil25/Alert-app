import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement 
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement 
)

function chartApp() {
    const data = { 
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            // get data from API
            data: [5, 6, 5, 6, 3, 2, 7], 
            backgroundColor: "transparent",
            borderColor: "rgb(127, 127, 255)",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: 0.1
        }]
    };
    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 1,
                max: 7,
                ticks: {
                    stepSize: 1,
                    callback: (value) => value
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };
    return (
        <>
            <h4 className="chart-header">Issues graph</h4>
            <div className="chart">
                <Line data={data} options={options}>
                </Line>
            </div>
        </>
    )
}

export default chartApp;