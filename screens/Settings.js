import React from 'react';
import { Text, View, StyleSheet, Alert, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import Profile1 from './Profile1';
import ListItem from '../components/ListItem';

const Settings = ({navigation}) => {
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
            style={styles.container}
            // contentContainerStyle={{justifyContent: ' center', alignItems: 'center'}}
            // showsVerticalScrollIndicator={false}
        >
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile1')} >  
                    <Image style={styles.userImg} source={require('F:/works/woxspace/assets/user-icon.png')}></Image> 
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 35, marginBottom: 10, marginLeft: 20}}>Nimmi</Text>
            </View>

            <TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 40, marginLeft: 20}}>
                    <Icon name="key" color={'#075e54'} size={22} type={'entypo'} style={{marginRight: 30, marginTop: 10}}/>
                    <Text style={styles.userName}>Account</Text>
                </View>
                <Text style={styles.aboutUser}>Privacy, security, change number</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
                    <Icon name="message" color={'#075e54'} size={22} style={{marginRight: 30, marginTop: 10}}/>
                <Text style={styles.userName}>Chats</Text>
                </View>
                <Text style={styles.aboutUser}>Theme, wallpapers, chat history</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
                    <Icon name="bell-alt" color={'#075e54'} size={22} type={'fontisto'} style={{marginRight: 30, marginTop: 10}}/>
                <Text style={styles.userName}>Notifications</Text>
                </View>
                <Text style={styles.aboutUser}>Message, group & call tones</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
                    <Icon name="data-usage" color={'#075e54'} type={'materialicons'} size={22} style={{marginRight: 30, marginTop: 10}}/>
                <Text style={styles.userName}>Storage and data</Text>
                </View>
                <Text style={styles.aboutUser}>Network usage, auto-download</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
                    <Icon name="help-circle" color={'#075e54'} type={'feather'} size={22} style={{marginRight: 30, marginTop: 10}}/>
                <Text style={styles.userName}>Help</Text>
                </View>
                <Text style={styles.aboutUser}>Help centre, contact us, privacy policy</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 40, marginLeft: 20}}>
                    <Icon name="people" color={'#075e54'} size={22} type={'ionicons'} style={{marginRight: 30, marginTop: 5}}/>
                <Text style={styles.userName}>Invite a friend</Text>
                </View>
            </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
     );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff'
  },
  userImg: {
      height: 70,
      width: 70,
      borderRadius: 75,
      alignContent: 'center',
      marginLeft: 20,
      marginTop: 10
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  aboutUser: {
      fontSize: 14,
      fontWeight: '600',
      color: '#666',
      marginLeft: 75,
      marginTop: -5
  }
});

export default Settings;