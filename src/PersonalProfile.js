import React, { Component } from 'react';
class PersonalProfile extends Component{

    render() {
        const { personal_profile_details } = this.props;

        return(
            <div id="personal_profile" class="section">
                <div class="section_name">
                    <p>Personal Profile</p>
                </div>
                <div class="section_info">
                    <p class="entry_details">
                        { personal_profile_details }
                    </p>
                </div>
            </div>
        )
    }
} 

export default PersonalProfile;