import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../Redux/Actions/index';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render () {

    const { currentUser } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>
          {currentUser ? `${currentUser.name} logged in!` : null }
        </Text>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = dispatch => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main);