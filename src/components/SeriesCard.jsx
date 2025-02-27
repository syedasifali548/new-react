import React from 'react'
import styles from '../components/NetflixSeries.module.css'
import styled from 'styled-components';
const SeriesCard = ({data}) => {
    const {id,img_url,name,rating,description,genre,cast,watch_url} = data;
    const Button = styled.button`
    background: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  
    &:hover {
      background: #0056b3;
    }
  
    &:active {
      background: #004494;
    }
  `;
    const ratingClass = rating >= 8.5 ? styles.hit_series : styles.avg_series;
  return (
    <li key={id} className={styles.card}>
    <div>
      <img
        src={img_url}
        alt="netflix-pic"
        width="40%"
        height="40%"
      />
    </div>
    <div className={styles.card_content}>
    <h2>Name:{name}</h2>
    <h3>
    Rating:
    <span className={`${styles.rating}${styles.ratingClass}`}>
    {rating}
    </span>
    </h3>
    
    <p>Summery:{description}</p>
    <p>Genre:{genre}</p>
    <p className='text-3xl font-bold underline'>Genre:{cast}</p>
    <a href={watch_url} target="blank">
    <Button>Watch Now</Button>
    </a>
    </div>
  </li>    
 
  )
}

export default SeriesCard