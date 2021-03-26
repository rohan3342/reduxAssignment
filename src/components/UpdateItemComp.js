import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { updateData } from '../services/Home/action';
import Icon from 'react-native-vector-icons/MaterialIcons';

class UpdateItemComp extends Component {
  constructor({ route, navigation, props }) {
    super(props);
    this.navigation = navigation;
    const { userId, id, title, data } = route.params;
    this.state = {
      userId: userId.toString(),
      id: id.toString(),
      title: title,
      data: data,
    };
  }

  changeId = userId => {
    this.setState({ userId: userId });
  };

  changeTitle = title => {
    this.setState({ title: title });
  };

  changeData = data => {
    this.setState({ data: data });
  };

  UpdateBtn = () => {
    const { title, data, userId, id } = this.state;
    const DATA = { userId: userId, id: id, title: title, body: data };
    Alert.alert('Are you Sure?', 'Do you want to Update this Item ?', [
      {
        text: 'Yes',
        onPress: () => {
          this.setState({ userId: '', id: '', title: '', data: '' });
          this.props.updateData(DATA);
          this.navigation.goBack();
        },
      },
      { text: 'Cancel' },
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => this.navigation.goBack()}>
          <Icon name="cancel" size={25} color="#1687a7" />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Edit Post</Text>
        <View style={styles.txtInputWrapper}>
          <TextInput
            style={styles.txtInput}
            placeholder="userid"
            value={this.state.userId}
            onChangeText={text => this.changeId(text)}
          />
          <TextInput
            style={styles.txtInput}
            value={this.state.title}
            placeholder="title"
            onChangeText={text => this.changeTitle(text)}
          />
          <TextInput
            multiline
            maxLength={500}
            value={this.state.data}
            style={[styles.txtInput, styles.data]}
            placeholder="data"
            onChangeText={text => this.changeData(text)}
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={this.UpdateBtn}>
          <Text style={styles.addBtnTxt}>Finish</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: '5%',
  },
  headerTxt: {
    fontSize: 30,
    color: '#1687a7',
  },
  txtInputWrapper: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  txtInput: {
    fontSize: 16,
    borderColor: '#1687a7',
    borderWidth: 1,
    width: '90%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'justify',
  },
  data: {
    height: 180,
  },
  cancelBtn: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  addBtn: {
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1687a7',
    borderRadius: 10,
  },
  addBtnTxt: {
    fontSize: 24,
    color: 'white',
  },
});

const mapDispatchToProps = dispatch => ({
  updateData: data => dispatch(updateData(data)),
});

export default connect(null, mapDispatchToProps)(UpdateItemComp);
