import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { fetchContacts } from '../utility/Api';
import ContactThumbnail from '../components/ContactThumbnail'; // Gõ đúng tên
import { fetchContactsLoading,fetchContactsSuccess,fetchContactsError } from '../sharing/store';
const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  const {contacts,loading,error} = useSelector((state)=> state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsLoading())
        fetchContacts()
          .then(
            contacts=>
            {
              dispatch(fetchContactsSuccess(contacts))
            }
          )
          .catch(
            e=> {
              dispatch(fetchContactsError())
            }
          )
  }, []); // Thêm dependency rỗng để tránh gọi lặp

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  const favorites = contacts.filter((contact) => contact.favorite);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text>Error loading favorites.</Text>}
      {!loading && !error && (
        favorites.length > 0 ? (
          <FlatList
            data={favorites}
            keyExtractor={keyExtractor}
            numColumns={3}
            contentContainerStyle={styles.list}
            renderItem={renderFavoriteThumbnail}
          />
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No favorite contacts found.
          </Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default Favorites;
