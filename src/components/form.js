import React from 'react';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            user: "daniel-sockness"
        };
    }

    handleChanges = e => {
        this.setState({
            user: e.target.value
        });
    };

  render(props) {
    return (
      <div className="form-container">
        <form>
            <input 
            onChange={this.handleChanges}
            name="user"
            type="text"
            value={this.state.user} />
            <button type="submit" onClick={e => {
                e.preventDefault();
                if(this.state.user == "") {
                    alert("You must enter a user");
                } else {
                    this.props.changeUser(this.state.user);
                }
            }}>Change User</button>
        </form>
      </div>
    );
  }
}

export default Form;
