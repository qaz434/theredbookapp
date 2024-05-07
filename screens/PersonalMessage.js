import { View, SafeAreaView, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";

const PersonalMessage = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Render Header */}
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          
          <View style={styles.profileInfo}>
            <Image
              source={require('../assets/images/user1.jpg')}
              resizeMode='cover'
              style={styles.profileImage}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Jane Doe</Text>
              <Text style={styles.userStatus}>Online</Text>
            </View>
          </View>
        </View>

        {/* Render Chat */}

      </View>

      {/* Render Input */}
      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}> 
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: "#fafafa",
    borderBottomColor: "#808080",
    borderBottomWidth: 0.2,
    alignItems: "center", 
  },
  backButton: {
    marginHorizontal: 12,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    flex: 1, // Added flex: 1 to take remaining space
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "300",
  },
  userStatus: {
    color: "#808080",
  },
  inputContainer: {
    backgroundColor: "#fafafa",
    borderTopColor: "#808080",
    borderTopWidth: 0.2,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  inputMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#808080",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  sendButton: {
    marginLeft: 10,
  },
});
