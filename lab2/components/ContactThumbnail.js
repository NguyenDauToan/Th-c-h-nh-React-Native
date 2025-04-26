import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // ✅ Thay thế Icon

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = {
    color: textColor,
  };
  const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </ImageComponent>

      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <MaterialIcons name="phone" size={16} color={textColor} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

export default ContactThumbnail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
