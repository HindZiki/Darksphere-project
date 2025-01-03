import React, { useContext } from 'react';
import './TopicsDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import TopicsItem from '../TopicsItem/TopicsItem';

const TopicsDisplay = () => {
  const { Topics_list } = useContext(StoreContext);

  return (
    <div className="Topics-display" id="Topics-display">
      <h2>Key Programming Topics and Concepts</h2>
      <div className="Topics-display-list">
        {Topics_list.map((item, index) => (
          <TopicsItem
            key={index}
            _id={item._id}
            name={item.name}
            description={item.description} // Corrigé ici
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicsDisplay;

