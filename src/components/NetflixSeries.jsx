import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import styles from '../components/NetflixSeries.module.css'

const NetflixSeries = () => {
  return(
    <ul className={styles.container}>
    {seriesData.map((curElem)=>(
      <SeriesCard key={curElem.id} data={curElem}/>
    ))}
    </ul>
  )
};

export default NetflixSeries;
