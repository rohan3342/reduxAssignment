import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemComp = ({ userId, id, title, data, updateItem, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => updateItem(title, data, userId, id)}>
          <Icon style={styles.icon} name="edit" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(id)}>
          <Icon style={styles.icon} name="delete" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleTxt}>{title}</Text>
      <Text style={styles.dataTxt}>{data}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#d3e0ea',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 15,
  },
  icon: {
    marginHorizontal: 5,
  },
  titleTxt: {
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  dataTxt: {
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 10,
  },
});

export default ItemComp;
