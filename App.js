import React, { useState, useEffect, useContext } from "react";
import { Text, View, LogBox, TouchableOpacity } from "react-native";
import { useAssets } from "expo-asset";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignIn from "./screens/SignIn";
import ContextWrapper from "./context/ContextWrapper";
import Context from "./context/Context";
import Profile from "./screens/Profile";
import Chats from "./screens/Chats";
import Photo from "./screens/Photo";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';
import Contacts from "./screens/Contacts";
import Status from './screens/Status';
import Calls from './screens/Calls';
import Chat from './screens/Chat';
import Profile1 from './screens/Profile1';
import Settings from './screens/Settings';
import PopupMenu from './screens/PopupMenu';
import ChatHeader from './components/ChatHeader'
import {useFonts} from "expo-font"
import AppLoading from 'expo-app-loading';

LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function LogoTitle() {
  
  return (
    <PopupMenu />
    
          // <View style={{flexDirection: 'row'}}>

          //   <Text style={{color: '#ffffff', fontSize: 20, marginTop: 8, marginLeft: 8,fontFamily: "Roboto_Bold"}}>WoxSpace</Text>
            
          //   <View style={{marginLeft: 200, marginTop: 10}}>
          //     <TouchableOpacity>
          //           <Icon name="more-vert" color={"#fff"} size={22}/>
          //     </TouchableOpacity>
          //   </View>
          // </View>
 
  );
}

function App() {

  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    theme: { colors },
  } = useContext(Context);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setCurrUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      {!currUser ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="signIn" component={SignIn} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.foreground,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTintColor: colors.white,
          }}
        >
          {!currUser.displayName && (
            <Stack.Screen
              name="profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="home"
            options={{ title: "WoxSpace", headerTitle: (props) => <LogoTitle {...props} />}}
            component={Home}
          />
          <Stack.Screen
            name="contacts"
            options={{ title: "Select Contacts" }}
            component={Settings}
          />
          <Stack.Screen
            name="Profile1"
            options={{ title: "Profile" }}
            component={Profile1}
          />
          <Stack.Screen name="chat" component={Chat} options={{headerTitle: (props) => <ChatHeader {...props} />}}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
     
  );
}
function Home() {
  const {
    theme: { colors },
  } = useContext(Context);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarLabel: () => {
            if (route.name === "photo") {
              return <Ionicons name="camera" size={20} color={colors.white} />;
            } else {
              return (
                <Text style={{ color: colors.white }}>
                  {route.name.toLocaleUpperCase()}
                </Text>
              );
            }
          },
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.white,
          },
          tabBarStyle: {
            backgroundColor: colors.foreground,
          },
        };
      }}
      initialRouteName="chats"
    >
      <Tab.Screen name="photo" component={Photo} />
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
}

const Main = () => {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );

  const [fontLoaded] = useFonts({
    Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Roboto_Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!assets) {
    return <Text></Text>;
  }
  return fontLoaded ? (
    <ContextWrapper>
      <App />
    </ContextWrapper>
    ) : (
      <AppLoading />
  );
}

export default Main;