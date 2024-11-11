// REDUX HOOKS:
import useReports from "../../hooks/useReports";

const Chart = () => {
  const { chartData } = useReports();
  // console.log({chartData});
  return ( 
    <div className="chart">chart</div>
   );
}
 
export default Chart;