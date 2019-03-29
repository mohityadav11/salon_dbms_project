import React from 'react';

class ServiceForm extends React.Component {
  state = {
    name: '',
    tag: '',
    brand: '',
    benefits: '',
    points_to_remember: '',
    recommended_for: '',
    cost: '',
  };

  onFieldChange = name => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[name]: value}));
    };
  };

  handleSubmit = () => {
    const service = {
      name: this.state.name,
      tag: this.state.tag,
      brand: this.state.brand,
      benefits: this.state.benefits,
      points_to_remember: this.state.points_to_remember,
      recommended_for: this.state.recommended_for,
      cost: this.state.cost,
      salon_id: this.props.salonId,
    };

    this.props.onSubmit (service);
  };

  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onFieldChange ('name')}
        />
        <select value={this.state.tag} onChange={this.onFieldChange ('tag')}>
          <option value="">Choose Tag</option>
          <option value="waxing">Waxing</option>
          <option value="facial">Facial</option>
          <option value="pedicure">Pedicure</option>
          <option value="manicure">Manicure</option>
          <option value="hair">Hair</option>
          <option value="threading">Threading</option>
          <option value="bleach">Bleach</option>
          <option value="detan">Detan</option>
        </select>
        <input
          type="text"
          placeholder="brand"
          value={this.state.brand}
          onChange={this.onFieldChange ('brand')}
        />
        <textarea
          rows="5"
          placeholder="Benefits"
          value={this.state.benefits}
          onChange={this.onFieldChange ('benefits')}
        />
        <textarea
          rows="5"
          placeholder="Points To Remember"
          value={this.state.points_to_remember}
          onChange={this.onFieldChange ('points_to_remember')}
        />
        <textarea
          rows="5"
          placeholder="Recommended For"
          value={this.state.recommended_for}
          onChange={this.onFieldChange ('recommended_for')}
        />
        <input
          type="number"
          placeholder="Cost"
          value={this.state.cost}
          onChange={this.onFieldChange ('cost')}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default ServiceForm;
