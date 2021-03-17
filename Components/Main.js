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
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>
          User logged in!
        </Text>
      </View>
    );
  }
}

const mapDispatchProps = dispatch => bindActionCreators({fetchUser}, dispatch)

export default connect(null, mapDispatchProps)(Main);