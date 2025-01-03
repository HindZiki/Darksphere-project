import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreCourses from '../../components/ExploreCourses/ExploreCourses'; // Assurez-vous du chemin exact
import TopicsDisplay from '../../components/TopicsDisplay/TopicsDisplay';

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreCourses category={category} setCategory={setCategory}/> 
      <TopicsDisplay category={category}/>
    </div>
  );
};

export default Home;

