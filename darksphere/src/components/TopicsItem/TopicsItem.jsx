import React from 'react';
import './TopicsItem.css';
import { Link } from 'react-router-dom';

const TopicsItem = ({ _id, name, description, image }) => {
  return (
    <Link to={`/courses/${_id}`} className="Topics-item"> {/* Navigation dynamique */}
      <div className="Topics-item-img-container">
        <img className="Topics-item-image" src={image} alt={name} />
      </div>
      <div className="Topics-item-info">
        <div className="Topics-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="Topics-item-desc">{description}</p>
      </div>
    </Link>
  );
};

export default TopicsItem;

