import React, { Component } from 'react';
import Api from '../../utils/Api'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'



class Profile extends Component {

  render() {
    const { id } = this.props

      return (
        <div>
          hi
        </div>
      );
    }
  }




  const mapStateToProps = (state, ownProps) => {
    const profile = state.profiles.profilesById[ownProps.profileId]
    const { id } = profile
    return {
      id,
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({

  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
