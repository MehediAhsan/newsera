'use client';

import Chart from 'react-apexcharts';

const Overview = () => {
  const sparkData = [
    {
      id: 'spark1',
      value: '124,523',
      label: 'Page views',
      color: '#f97316',
      gradient: 'from-orange-500 to-amber-400',
      data: [45000, 52000, 48000, 61000, 58000, 72000, 68000, 89000, 85000, 93000, 124000, 115000],
    },
    {
      id: 'spark2',
      value: '87,421',
      label: 'Unique readers',
      color: '#38bdf8',
      gradient: 'from-sky-500 to-cyan-400',
      data: [32000, 38000, 35000, 42000, 40000, 48000, 45000, 52000, 50000, 61000, 87000, 82000],
    },
    {
      id: 'spark3',
      value: '42,156',
      label: 'New subscribers',
      color: '#34d399',
      gradient: 'from-emerald-500 to-teal-400',
      data: [12000, 15000, 18000, 21000, 19000, 23000, 25000, 28000, 31000, 35000, 42000, 39000],
    },
    {
      id: 'spark4',
      value: '3.2M',
      label: 'Social shares',
      color: '#f472b6',
      gradient: 'from-pink-500 to-rose-400',
      data: [1.2, 1.5, 1.8, 2.1, 2.3, 2.5, 2.7, 2.9, 3.0, 3.1, 3.2, 3.1],
    },
  ];

  const sparkOptions = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
      animations: { enabled: false },
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth', width: 2 },
    tooltip: {
      theme: 'dark',
      x: { show: false },
      y: { formatter: (value) => value.toLocaleString() },
    },
    colors: ['#ffffff'],
    fill: { type: 'gradient', opacity: 0.2 },
    grid: { show: false },
  };

  const lineOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: '#94a3b8',
    },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#f97316'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${Math.round(value / 1000)}k`,
      },
    },
    grid: { borderColor: '#1e293b', strokeDashArray: 4 },
    tooltip: {
      theme: 'dark',
      y: { formatter: (value) => value.toLocaleString() },
    },
    markers: { size: 0 },
    dataLabels: { enabled: false },
  };

  const lineSeries = [{ name: 'Monthly page views', data: [45000, 52000, 48000, 61000, 58000, 72000, 68000, 89000, 85000, 93000, 124000, 115000] }];

  const radialOptions = {
    chart: { type: 'radialBar', toolbar: { show: false } },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 270,
        hollow: { margin: 5, size: '30%', background: 'transparent' },
        dataLabels: {
          name: { show: false },
          value: { show: false },
        },
      },
    },
    colors: ['#f97316', '#38bdf8', '#34d399', '#f472b6'],
    labels: ['Avg. time', 'Return visitors', 'Completion', 'Newsletter'],
    legend: {
      show: true,
      position: 'left',
      offsetY: 15,
      labels: { colors: '#cbd5e1' },
      markers: { size: 0 },
      formatter: (seriesName, opts) => `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}%`,
    },
    responsive: [{
      breakpoint: 480,
      options: { legend: { position: 'bottom', horizontalAlign: 'center' } },
    }],
  };

  const radialSeries = [68, 72, 55, 42];

  const barOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      foreColor: '#cbd5e1',
    },
    colors: ['#f97316'],
    xaxis: {
      categories: ['Politics', 'Business', 'Technology', 'Sports', 'Culture', 'Health'],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { labels: { formatter: (value) => `${Math.round(value / 1000)}k` } },
    grid: { borderColor: '#1e293b', strokeDashArray: 4 },
    tooltip: {
      theme: 'dark',
      y: { formatter: (value) => `${value.toLocaleString()} views` },
    },
    plotOptions: {
      bar: { borderRadius: 6, columnWidth: '55%' },
    },
  };

  const barSeries = [{ name: 'Views', data: [120000, 173000, 198000, 145000, 117000, 136000] }];

  return (
    <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950 p-5 text-white sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-orange-300">Overview</p>
          <h2 className="mt-2 text-2xl font-black text-white">Editorial performance</h2>
        </div>
        <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
          +18.7% this month
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {sparkData.map((item) => (
          <div key={item.id} className={`overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-4 shadow-lg shadow-slate-950/40`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">{item.label}</div>
                <div className="mt-2 text-2xl font-black text-white">{item.value}</div>
              </div>
              <div className="w-20">
                <Chart options={{ ...sparkOptions, colors: [item.color] }} series={[{ data: item.data }]} type="line" height={52} width="100%" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Traffic overview</div>
              <h3 className="mt-1 text-xl font-bold text-white">Reader engagement</h3>
            </div>
            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
              Live
            </span>
          </div>
          <Chart options={lineOptions} series={lineSeries} type="line" height={300} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
          <div className="mb-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Performance</div>
            <h3 className="mt-1 text-xl font-bold text-white">Channel health</h3>
          </div>
          <Chart options={radialOptions} series={radialSeries} type="radialBar" height={300} />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
          <div className="mb-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Sections</div>
            <h3 className="mt-1 text-xl font-bold text-white">Top categories</h3>
          </div>
          <Chart options={barOptions} series={barSeries} type="bar" height={300} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
          <div className="mb-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Live feed</div>
            <h3 className="mt-1 text-xl font-bold text-white">Recent activity</h3>
          </div>
          <div className="space-y-3">
            {[
              ['Tech', 'AI roundup published', '2 mins ago'],
              ['Sports', 'Bangladesh vs India preview rising fast', '9 mins ago'],
              ['Business', 'Digital economy report updated', '15 mins ago'],
              ['Culture', 'Three editor picks crossed 4k reads', '22 mins ago'],
            ].map(([label, title, time]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-slate-950 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">{label}</span>
                  <span className="text-[10px] text-slate-400">{time}</span>
                </div>
                <p className="mt-2 text-sm text-slate-200">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
