import './App.scss';
import Highcharts, { arrayMax } from 'highcharts';
import { React, useRef, useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';
import moment from 'moment';

function BarChart() {

    const refContainer = useRef(null);
    const [dataSource, setDataSource] = useState([]);


    useEffect(() => {
        axios.get(`https://api.github.com/repositories/19438/issues`)
            .then((response) => {
                let gres = response.data;
                let cats = [];
                let ys = [];
                let d;
                for (var i = 0; i < gres.length; i++) {
                    cats.push(
                        moment(gres[i].created_at).format('DD MMM, YYYY,hh:mm')
                    );
                    ys.push(gres[i].comments)
                }

                let m = arrayMax(ys);
                const chart = Highcharts.chart(refContainer.current, {
                    chart: {

                        type: 'column'
                    }, // type of the chart
                    plotOptions: {
                        column: {
                            animation: {
                                duration: 1500
                            }
                        }
                    },
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    enabled: false
                                }
                            }
                        }]
                    },
                    title: {
                        text: 'Github repo stats'
                    }, // title of the chart
                    subtitle: {
                        text: 'Note: Only displaying active issues (at least 1 comment)'
                    }, // subtitle of the chart
                    xAxis: {
                        categories: cats, // the categories of the X Axis
                        crosshair: true
                    },
                    yAxis: {
                        min: 1, // minimum value of the Y Axis
                        max: m,
                        title: {
                            text: 'Issues & comments'
                        } // the title of the Y Axis
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    }, // tooltip appears when hovering over a point
                    credits: {
                        enabled: false
                    },
                    series: dataSource // set of the data
                });
                if (dataSource.length > 0) {
                    chart.hideLoading();
                }
                else {
                    chart.showLoading();
                }
            }).catch((err) => console.log(err));


    }, [dataSource]);



    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://api.github.com/repositories/19438/issues`)
                .then((response) => {
                    let res = response.data;
                    let ActiveSeries = [];
                    let HyperSeries = [];
                    let SuperSeries = [];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].comments >= 1 && res[i].comments < 5) {
                            ActiveSeries.push({
                                'name': res[i].user.login,
                                y: res[i].comments
                            }
                            );
                        }
                        if (res[i].comments >= 5 && res[i].comments < 10) {
                            HyperSeries.push({
                                'name': res[i].user.login,
                                y: res[i].comments
                            }
                            );
                        }
                        if (res[i].comments >= 10) {
                            SuperSeries.push({
                                'name': res[i].user.login,
                                y: res[i].comments
                            }
                            );
                        }
                    }
                    setDataSource([
                        {
                            name: 'Active issues (atleast than 1 comment)',
                            data: ActiveSeries,
                            color: '#2ecc71',


                        },
                        {
                            name: 'Very active issues (more than 5 comments)',
                            data: HyperSeries,
                            color: 'orange',

                        },
                        {
                            name: 'Hyper active issues (more than 10 comments)',
                            data: SuperSeries,
                            color: 'red',

                        }

                    ]);

                }).catch((err) => console.log(err));

        }, 1000);
    }, []);

    return (

        <div ref={refContainer} style={
            {
                animationDuration: '2s',
                animationDelay: '0.9s',
                width: '75%'
            }
        } class="animate__animated animate__fadeIn" />
    );


}

function PieChart() {
    const pieContainer = useRef(null);

    const [PieSource, setPieSource] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://api.github.com/repositories/19438/issues').then((response) => {
                let res = response.data;
                let Pies = [];
                for (var i = 0; i < res.length; i++) {
                    if (res[i].comments >= 1 && res[i].comments < 5) {
                        Pies.push({
                            'name': 'IssueID:' + res[i].number,
                            y: res[i].comments
                        }
                        );
                    }
                    setPieSource([
                        {
                            name: 'Comments',
                            data: Pies
                        }
                    ])
                }
            }).catch((error) => console.log(error))

        }, 100)

    }, [])

    useEffect(() => {
        const PieChart = Highcharts.chart(pieContainer.current, {
            chart: {
                backgroundColor: '#5a36e8',
                type: 'pie',
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                style: {
                    color: '#fff',
                    fontSize: '0px',
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    animation: {
                        duration: 1000
                    },
                    dataLabels: {
                        color: '#fff',

                        fontFamily: 'monospace',
                        format: '{point.name}: {point.percentage:.1f} %'
                    },
                    innerSize: '0%'
                }
            },
            series: PieSource
        });
    }, [PieSource])


    return (<div ref={pieContainer} class="animate__animated animate__fadeIn" >
    </div>)

}

export { BarChart, PieChart };
