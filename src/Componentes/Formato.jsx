import {React} from 'react';
import './bloq.css';

export default function Display({ items }) {
  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imageUrl} alt={item.name} className="card-image" />
          <h3>{item.name}</h3>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>
      ))}
    </div>
  );
}
