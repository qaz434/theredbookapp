import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Home from "../screens/Home";
import Campus from "../screens/Campus";
import Inbox from "../screens/Inbox";
import TabNavigator from "./TabNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, View } from "react-native";
import LogoImg from "../assets/images/RedLogoBook.png";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="The Red Book"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
          headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Image source={LogoImg} style={{ width: 100, height: 30 }} />
          </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  headerTitleContainer: {
    marginLeft: -30,
  },
});

export default DrawerNavigator;
