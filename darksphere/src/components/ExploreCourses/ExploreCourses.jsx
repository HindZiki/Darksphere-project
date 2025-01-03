import React from 'react'
import './ExploreCourses.css'
import {courses_list} from '../../assets/assets'

const ExploreCourses = ({category,setCategory}) => {
  return (
    <div className='Explore-Courses' id='explore-courses'>
      <h1>Explore our courses</h1>
      <p className='explore-courses-text'>The "Course Menu" section of DarkSphere is dedicated to providing users with easy access to a variety of courses related to coding and software engineering. Each course is clearly presented, with detailed descriptions and links to the necessary resources to get started. This part of the platform aims to provide structured and accessible learning, allowing students to progress at their own pace while exploring key concepts in software development.</p>

      <div className="explore-courses-list">
    {courses_list.map((item,index)=>{
       
       return(
            <div key={index} className="explore-courses-list-item">
            <div className="course-image-container">
                <img src={item.cours_image} alt={item.cours_name} className="course-image"/>
              </div>
              <p className="course-title">{item.cours_name}</p>
            </div>
        )
    })}
</div>
    </div>
  )
}

export default ExploreCourses
