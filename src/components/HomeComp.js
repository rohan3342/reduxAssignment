import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemComp from '../components/ItemComp';
import { connect } from 'react-redux';
import { getData, deleteData } from '../services/Home/action';

class HomeComp extends Component {
  constructor({ navigation, props }) {
    super(props);
    this.navigation = navigation;
  }

  componentDidMount() {
    this.props.getData();
  }

  deleteItem = id => {
    Alert.alert('Are you Sure?', 'Do you want to delete this Item ?', [
      {
        text: 'Yes',
        onPress: () => this.props.deleteData(id),
        style: 'destructive',
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  updateItem = (title, data, userId, id) => {
    this.navigation.navigate('UpdateItemComp', {
      title,
      data,
      userId,
      id,
    });
  };

  renderItem = ({ item }) => (
    <ItemComp
      userId={item.userId}
      id={item.id}
      title={item.title}
      data={item.body}
      updateItem={this.updateItem}
      deleteItem={this.deleteItem}
    />
  );

  render() {
    const { data: content } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Posts</Text>
          <TouchableOpacity
            style={styles.AddBtn}
            onPress={() => this.navigation.navigate('AddItemComp')}>
            <Icon name="add-circle-outline" size={35} color="#1687a7" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={content}
          renderItem={item => this.renderItem(item)}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 70,
    backgroundColor: '#1687a7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
  },
  AddBtn: {
    position: 'absolute',
    backgroundColor: '#d3e0ea',
    zIndex: 1,
    padding: 5,
    borderRadius: 15,
    right: 20,
  },
  ListView: {
    flex: 2,
    borderColor: 'blue',
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  data: state.home.data,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  deleteData: id => dispatch(deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComp);
