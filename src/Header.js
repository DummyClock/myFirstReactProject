import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div id="resume_title">
                    <p id="name">{ this.props.personalInfo.name }</p>
                    <p id="subtitle">{ this.props.personalInfo.subtitle }</p>
                </div>
                <div id="contact_info">
                    <p>Email: <a href='#'>{ this.props.contactInfo.email }</a></p>
                    <p>Web: { this.props.contactInfo.web }</p>
                    <p>Mobile:{ this.props.contactInfo.mobile }</p>
                </div>
            </header>
        )
    }
}

export default Header;