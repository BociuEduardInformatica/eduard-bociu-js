import React from 'react';
import SkillItem from './SkillItem';
import axios from 'axios';

class App extends React.Component {
  baseUrl = 'http://localhost:8080/persons';
  state = {
    skillInputValue: '',
  };

  onSkillChange = (event) => {
    // this has to be App
    let value = event.target.value;

    this.setState({
      skillInputValue: value,
    });
  };

  renderSkillList() {
    if (this.state.skills.length < 1) {
      return null;
    }

    const skillItems = this.state.skills.map((skill) => {
      return <SkillItem label={skill}></SkillItem>;
    });

    return <ul>{SkillItem}</ul>;
  }

  addSkill() {
    if (this.state.skillInputValue.length < 1) {
      return;
    }

    this.setState({
      skills: [...this.state.skills, this.state.skillInputValue],
    });
  }

  onSubmitForm = (event) => {
    event.preventDefault();

    const requestBody = {
      name: this.state.nameInputValue,
      skills: this.skills,
    };

    axios.post(this.baseUrl, requestBody).then(() => {
      this.setState({
        skills: [],
        nameInputValue: '',
        skillInputValue: '',
      });
    });
  };

  render() {
    return (
      <div className="container mt-2">
        <h1>Persons form</h1>

        <form onSubmit={this.onSubmitForm}>
          <fieldset>
            <div>
              <input type="text" name="name" placeholder="Name"></input>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <input
                type="text"
                name="skill"
                placeholder="Skill"
                value={this.state.skillInputValue}
                onChange={this.onSkillChange}
              ></input>
              <button type="button">Add Skill</button>
            </div>
            {this.renderSkillList()}
          </fieldset>
          <fieldset>
            <button type="submit"></button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
