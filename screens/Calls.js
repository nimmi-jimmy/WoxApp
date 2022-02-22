import React from 'react';
import { View, StyleSheet,Text,ScrollView,Image,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';


const Calls = ({navigation}) => {
    return(<>

        <ScrollView>

            <View style={{ backgroundColor: '#fff', height: 700}}>
                
                    <View>
                    <View
                        style={{
                        backgroundColor: 'grey',
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 25,
                        height: 50,
                        elevation: 5,
                        width: 50,
                        position: 'absolute', 
                        top: 12,
                        left: 10}} ></View> 
                         <Text style={styles.title}>Jasmy</Text>
                         
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 15}}>
                        <Icon name="call-received" size={22} color="red" type="meterialicons" marginLeft={50} />
                        <Text style={styles.lastmsg}>31/12/21, 10.30 PM</Text>
                    </View>
                
                    <TouchableOpacity style={{position: 'absolute', top: 30, right: 20}}>
                        <Icon name="call" color={"#047a6c"} size={28} />
                    </TouchableOpacity>
                
            </View>


        </ScrollView>

         <TouchableOpacity style={{
                backgroundColor: '#25D366',
                borderColor: '#25D366',
                borderWidth: 1,
                borderRadius: 25,
                height: 50,
                width: 50,
                position: 'absolute', 
                bottom: 40, 
                right: 30,}}  >
                    <Icon name={"call"} color={"#fff"} size={28} style={{marginTop: 8}}/>
            </TouchableOpacity>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,

    },
    title: {
        fontSize: 18,
        marginLeft: 70,  
        marginTop: 15,
        fontFamily: "Roboto_Medium"
    },
    lastmsg: {
        fontSize: 14,
        marginLeft:5,
        fontFamily: "Roboto_Regular"
    
    },
});

export default Calls;