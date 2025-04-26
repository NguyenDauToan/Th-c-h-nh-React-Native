import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";
import { fetchContacts } from "../utility/Api";
import ContactListItem from "../components/ContactListItem";
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from "../sharing/store";
import { useDispatch,useSelector } from "react-redux";
const Contact = ({ navigation }) => {
  const {contacts,loading,error} = useSelector((state) =>state);
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
  }, []); // chỉ gọi 1 lần sau khi mount
  const contactsSorted = contacts.slice().sort((a,b) => a.name.localeCompare(b.name))
  const renderItem = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate("Profile", { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large" />}
      {error && <Text>Error loading contacts...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
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
});

export default Contact;
