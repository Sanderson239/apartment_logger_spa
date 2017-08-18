import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux'
import { fetchProfiles } from '../../actions'
import { bindActionCreators } from 'redux'


class Profiles extends Component {

  componentDidMount() {
  this.props.fetchProfiles();
}



  render() {

    const { profileIds } = this.props;
    return (
      <div>
        {`${profileIds}`}
      </div>
    );
  }
}


const mapStateToProps = state => {
  const profileIds = state.profiles.ids
  const profilesById = state.profiles.profilesById;
  return {
    profileIds,
    profilesById,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProfiles,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles)
