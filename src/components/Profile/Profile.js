import React, { Component } from 'react';
import Api from '../../utils/Api'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'



class Profile extends Component {

  render() {
    const { id, name } = this.props
    console.log(this.props);

      return (
        <div className="main-content-child apartment-list-parent">
        <ul id="apartment-list">
        <h2>List of Apartments</h2>
        </ul>
      </div>
      );
    }
  }




  const mapStateToProps = (state, ownProps) => {
    const profile = state.profiles.profilesById[ownProps.profileId]
    const { name } = profile
    return {
      name,
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({

  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
