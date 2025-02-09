import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  //Initializes States (even if not declared, react will automatically run constructor + super())
  constructor(props){
    super(props)
    this.state = {    // declare internal state variables for the component
      personalInfo:{
        name: "Zh Rimel",
        subtitle: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      personal_profile_details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      workExp: {
        job1: {
          job_title: "Job Title at Company (August 2022 – December 2023)",
          job_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        job2: {
          job_title: "Job Title at Company (August 2022 – December 2023)",
          job_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      },
      skills: {
        s1:"A Key skill",
        s2:"A Key skill",
        s3:"A Key skill",
        s4:"A Key skill",
        s5:"A Key skill",
        s6:"A Key skill",
        s7:"A Key skill",
        s8:"A Key skill",
        s9:"A Key skill",
      },
      education: {
        e1: {
            school: "New Jersey Institute of Technology",
            degree: "BS in Computer Science",
            year: "2018 - 2022",
            gpa: "3.9",
        },
        e2: {
          school: "New Jersey Institute of Technology",
          degree: "BS in Computer Science",
          year: "2018 - 2022",
          gpa: "3.9",
        },
      }
    }
  }

  //Render Function
  render() {
    return (
      <div>
        <Header personalInfo={this.state.personalInfo} contactInfo={this.state.contactInfo} />
        <PersonalProfile personal_profile_details={this.state.personal_profile_details} />
        <WorkExperience workExp={this.state.workExp} />
        <Skills skillList={ this.state.skills } />
        <Education edu={ this.state.education } />
      </div>
    );
  }
}
export default App;