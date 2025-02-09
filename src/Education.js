import React, { Component } from 'react';

class Education extends Component {
    render(){
        const { edu } = this.props

        return(
            <div id="education" className="section">
                <div className="section_name">
                    <p>Education</p>
                </div>
                <div className="section_info"> 
                    <p className="entry_header">{ edu.e1.school }</p>
                    <p className="entry_details">{ edu.e1.degree }<br />
                        { edu.e1.year }<br />
                        { edu.e1.gpa }<br />
                    </p>
                    <p className="entry_header">{ edu.e2.school }</p>
                    <p className="entry_details">{ edu.e2.degree }<br />
                        { edu.e2.year }<br />
                        { edu.e2.gpa }<br />
                    </p>
                </div>
            </div>
        )
    }
}

export default Education;