import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                personalData.education && personalData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.University}</h3>
                          <p className="info">
                          <span>&bull;</span> <a className="date">{item.DateOfCompletion}</a>
                          </p>
                          <p>
                            <a>{item.DegreeOrCertificate}</a>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                personalData.work && personalData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.JobTitle}
                          <span>&bull;</span> <a className="date">{item.DateOfJoin}-{item.DateOfLeaving}</a></p>
                          <p>
                          Description: {item.Description}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {personalData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  personalData.skills && personalData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}