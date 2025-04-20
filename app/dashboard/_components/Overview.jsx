'use client'
import Chart from "react-apexcharts";

const Overview = () => {
    const sparkOptions = {
        chart: {
            type: "line",
            sparkline: { enabled: true },
            animations: { enabled: false }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "14px" },
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                formatter: function (val) {
                    return val.toLocaleString();
                }
            }
        },
        colors: ["#fff"],
        fill: {
            opacity: 0.3,
            type: "solid"
        }
    };

    const sparkData = [
        {
            id: "spark1",
            value: "124,523",
            label: "PAGE VIEWS",
            color: "#008ffb",
            gradient: "from-blue-500 to-blue-700",
            data: [45000, 52000, 48000, 61000, 58000, 72000, 68000, 89000, 85000, 93000, 124000, 115000]
        },
        {
            id: "spark2",
            value: "87,421",
            label: "UNIQUE VISITORS",
            color: "#00e396",
            gradient: "from-green-500 to-green-700",
            data: [32000, 38000, 35000, 42000, 40000, 48000, 45000, 52000, 50000, 61000, 87000, 82000]
        },
        {
            id: "spark3",
            value: "42,156",
            label: "NEW SUBSCRIBERS",
            color: "#feb019",
            gradient: "from-yellow-500 to-yellow-700",
            data: [12000, 15000, 18000, 21000, 19000, 23000, 25000, 28000, 31000, 35000, 42000, 39000]
        },
        {
            id: "spark4",
            value: "3.2m",
            label: "SOCIAL SHARES",
            color: "#ff4560",
            gradient: "from-red-500 to-red-700",
            data: [1.2, 1.5, 1.8, 2.1, 2.3, 2.5, 2.7, 2.9, 3.0, 3.1, 3.2, 3.1]
        },
    ];

    const radialOptions = {
        chart: {
            height: 250,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#008ffb', '#00e396', '#feb019', '#ff4560'],
        labels: ['Avg. Time on Page', 'Return Visitors', 'Article Completion', 'Newsletter Open Rate'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 60,
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName, opts) {
                return seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%"
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };
    const radialSeries = [68, 72, 55, 42];

    const lineOptions = {
        chart: {
            type: "line",
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        stroke: {
            curve: "smooth",
            width: 3
        },
        colors: ['#008ffb'],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px"
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px"
                },
                formatter: function (val) {
                    return (val / 1000) + 'k';
                }
            },
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "12px" },
            y: {
                formatter: function (val) {
                    return val.toLocaleString();
                }
            }
        },
        grid: {
            borderColor: '#f3f4f6',
            strokeDashArray: 5,
            padding: {
                top: 0,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 5,
            colors: ['#008ffb'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        }
    };
    const lineSeries = [{
        name: "Monthly Page Views",
        data: [45000, 52000, 48000, 61000, 58000, 72000, 68000, 89000, 85000, 93000, 124000, 115000]
    }];

    const barOptions = {
        chart: {
            type: "bar",
            toolbar: { show: false }
        },
        colors: ['#00e396'],
        xaxis: {
            categories: ["Politics", "Business", "Technology", "Sports", "Entertainment", "Health"],
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px"
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px"
                },
                formatter: function (val) {
                    return (val / 1000) + 'k';
                }
            },
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "12px" },
            y: {
                formatter: function (val) {
                    return val.toLocaleString() + ' views';
                }
            }
        },
        grid: {
            borderColor: '#f3f4f6',
            strokeDashArray: 5,
            padding: {
                top: 0,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: '55%',
            }
        },
        dataLabels: {
            enabled: false
        }
    };
    const barSeries = [{
        name: "Category Views",
        data: [125000, 98000, 115000, 82000, 75000, 68000]
    }];

    const areaOptions = {
        chart: {
            type: "area",
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        colors: ['#feb019'],
        stroke: {
            curve: "smooth",
            width: 3
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
            }
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px"
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px"
                },
                formatter: function (val) {
                    return (val / 1000) + 'k';
                }
            },
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "12px" },
            y: {
                formatter: function (val) {
                    return val.toLocaleString() + ' users';
                }
            }
        },
        grid: {
            borderColor: '#f3f4f6',
            strokeDashArray: 5,
            padding: {
                top: 0,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 5,
            colors: ['#feb019'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        }
    };
    const areaSeries = [{
        name: "Daily Active Users",
        data: [32000, 41000, 38000, 51000, 49000, 62000, 58000]
    }];

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold text-secondary mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {sparkData.map((item) => (
                    <div key={item.id} className={`p-4 rounded-lg shadow text-white bg-gradient-to-r ${item.gradient}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold">{item.value}</h3>
                                <h4 className="text-sm opacity-80">{item.label}</h4>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Chart
                                options={{
                                    ...sparkOptions,
                                    colors: [item.color],
                                    chart: {
                                        ...sparkOptions.chart,
                                        animations: { enabled: false }
                                    }
                                }}
                                series={[{ data: item.data }]}
                                type="line"
                                height={60}
                                width="100%"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-950 p-4 rounded-lg border border-dark">
                    <h2 className="text-lg font-semibold text-secondary mb-4">Monthly Page Views</h2>
                    <Chart
                        options={lineOptions}
                        series={lineSeries}
                        type="line"
                        height={300}
                        width="100%"
                    />
                </div>

                <div className="bg-gray-950 p-4 rounded-lg border border-dark">
                    <h2 className="text-lg font-semibold text-secondary mb-4">User Engagement Metrics</h2>
                    <Chart
                        options={radialOptions}
                        series={radialSeries}
                        type="radialBar"
                        height={300}
                        width="100%"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-950 p-4 rounded-lg border border-dark">
                    <h2 className="text-lg font-semibold text-secondary mb-4">Top Categories by Views</h2>
                    <Chart
                        options={barOptions}
                        series={barSeries}
                        type="bar"
                        height={300}
                        width="100%"
                    />
                </div>

                <div className="bg-gray-950 p-4 rounded-lg border border-dark">
                    <h2 className="text-lg font-semibold text-secondary mb-4">Weekly Active Users</h2>
                    <Chart
                        options={areaOptions}
                        series={areaSeries}
                        type="area"
                        height={300}
                        width="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;