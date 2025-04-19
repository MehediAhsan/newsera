'use client'
import Chart from "react-apexcharts";

const Overview = () => {
    const sparkOptions = {
        chart: { type: "line", sparkline: { enabled: true } },
        stroke: { curve: "smooth", width: 2 },
        tooltip: {
            theme: "dark", 
            style: { fontSize: "14px", colors: ["#7367F0"] } 
        },
    };

    const sparkData = [
        { id: "spark1", value: 1213, label: "CLICKS", color: "#ff4560", gradient: "from-red-500 to-red-700", data: [10, 20, 15, 30, 25] },
        { id: "spark2", value: 422, label: "VIEWS", color: "#008ffb", gradient: "from-blue-500 to-blue-700", data: [5, 15, 10, 20, 18] },
        { id: "spark3", value: 311, label: "LEADS", color: "#00e396", gradient: "from-green-500 to-green-700", data: [8, 12, 18, 22, 17] },
        { id: "spark4", value: 22, label: "SALES", color: "#feb019", gradient: "from-yellow-500 to-yellow-700", data: [3, 7, 9, 14, 10] },
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
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                },
                barLabels: {
                    enabled: true,
                    useSeriesColors: true,
                    offsetX: -8,
                    fontSize: '16px',
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                },
            }
        },
        
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };
    const radialSeries = [76, 67, 61, 90];

    
    const lineOptions = {
        chart: { type: "line", toolbar: { show: false } },
        stroke: { curve: "smooth" },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May"],
            labels: { style: { colors: "#7367F0", fontSize: "14px" } },
        },
        yaxis: {
            labels: { style: { colors: "#7367F0", fontSize: "14px" } },
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "14px", colors: ["#7367F0"] }
        },
        grid: { strokeDashArray: 5 },
    };
    const lineSeries = [{ name: "Adwords", data: [30, 40, 35, 50, 49] }];

    
    const barOptions = {
        chart: { type: "bar" },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May"],
            labels: { style: { colors: "#7367F0", fontSize: "14px" } },
        },
        yaxis: {
            labels: { style: { colors: "#7367F0", fontSize: "14px" } },
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "14px", colors: ["#7367F0"] }
        },
    };
    const barSeries = [{ name: "Sales", data: [10, 15, 20, 25, 30] }];

    
    const areaOptions = {
        chart: { type: "area", toolbar: { show: false } },
        stroke: { curve: "smooth" },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May"],
            labels: { style: { colors: "#7367F0", fontSize: "14px" } },
        },
        yaxis: {
            labels: { style: { colors: "#7367F0", fontSize: "14px" } },
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "14px", colors: ["#7367F0"] }
        },
    };
    const areaSeries = [{ name: "Revenue", data: [15, 25, 20, 30, 40] }];

    return (
        <div className="container mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {sparkData.map((item) => (
                    <div key={item.id} className={`p-2 rounded-lg shadow-lg text-center bg-gradient-to-r ${item.gradient}`}
                    >
                        <h3 className="text-2xl font-bold">{item.value}</h3>
                        <h4 className="">{item.label}</h4>
                        <Chart options={{ ...sparkOptions, colors: [item.color] }} series={[{ data: item.data }]} type="line" height={50} />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-4 rounded-lg shadow-lg">
                    <Chart options={radialOptions} series={radialSeries} type="radialBar" height={250} />
                </div>
                <div className="p-4 rounded-lg shadow-lg">
                    <Chart options={lineOptions} series={lineSeries} type="line" height={250} />
                </div>
                <div className="p-4 rounded-lg shadow-lg">
                    <Chart options={barOptions} series={barSeries} type="bar" height={250} />
                </div>
                <div className="p-4 rounded-lg shadow-lg">
                    <Chart options={areaOptions} series={areaSeries} type="area" height={250} />
                </div>
            </div>
        </div>
    );
};

export default Overview;