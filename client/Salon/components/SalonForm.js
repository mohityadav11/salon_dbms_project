import React from 'react';

class SalonForm extends React.Component {
  state = {
    name: '',
    location: '',
    contact_no: '',
    website_link: '',
    email: '',
  };

  handleFieldChange = field => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[field]: value}));
    };
  };

  handleSubmit = e => {
    const salon = {
      name: this.state.name,
      location: this.state.location,
      contact_no: this.state.contact_no,
      website_link: this.state.website_link,
      email: this.state.email,
    };

    this.props.onSubmit (salon);
  };

  render () {
    return (
      <div>
        <h2 variant="h5">{this.props.title}</h2>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleFieldChange ('name')}
        />
        <input
          placeholder="Location"
          value={this.state.location}
          onChange={this.handleFieldChange ('location')}
        />
        <input
          placeholder="Contact No"
          value={this.state.contact_no}
          onChange={this.handleFieldChange ('contact_no')}
        />
        <input
          placeholder="Website Link"
          value={this.state.website_link}
          onChange={this.handleFieldChange ('website_link')}
        />
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleFieldChange ('email')}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default SalonForm;
