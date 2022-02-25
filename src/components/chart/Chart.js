import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const maxValueToTal = Math.max(...dataPointValues);

  return <div className='chart'>
    {dataPoints.map((dataPoint) => {
      return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValueToTal} label={dataPoint.label} />
    })}
  </div>;
};

export default Chart;