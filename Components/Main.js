import React from 'react';
import FeedScreen from './Main/Feed';
import AddScreen from './Main/Add';
import ProfileScreen from './Main/Profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../Redux/Actions/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} 
          options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={26} />)}} />
        <Tab.Screen name="Add" component={AddScreen} 
          options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-box" color={color} size={26} />)}} />
        <Tab.Screen name="Profile" component={ProfileScreen} 
          options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-circle" color={color} size={26} />)}} /> 
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = dispatch => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main);