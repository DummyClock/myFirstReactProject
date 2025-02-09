import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { skillList } = this.props

        return (
            <div id="key_skills" className="section">
                <div className="section_name">
                    <p>Key Skills</p>
                </div>
                <div className="section_info">
                    <div className="key_skill_col">
                        <p>
                            { skillList.s1 }<br />
                            { skillList.s2 }<br />
                            { skillList.s3 }<br />
                        </p>
                    </div>
                    <div className="key_skill_col">
                        <p>
                            { skillList.s4 }<br />
                            { skillList.s5 }<br />
                            { skillList.s6 }<br />
                        </p>
                    </div>
                    <div className="key_skill_col">
                        <p>
                            { skillList.s7 }<br />
                            { skillList.s8 }<br />
                            { skillList.s9 }<br />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
