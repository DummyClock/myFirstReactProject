import React, { Component } from 'react';
class WorkExperience extends Component{
    render() {
        const { workExp } = this.props

        return(
            <div id="work_exp" class="section">
                <div class="section_name">
                    <p>Work Experience</p>
                </div>
                <div class="section_info">
                    <p class="entry_header">{ workExp.job1.job_title }</p>
                    <p class="entry_details">{ workExp.job1.job_desc }</p>
                    <p class="entry_header">{ workExp.job2.job_title }</p>
                    <p class="entry_details">{ workExp.job2.job_desc }</p>
                </div>
            </div>
        )
    }
}

export default WorkExperience;