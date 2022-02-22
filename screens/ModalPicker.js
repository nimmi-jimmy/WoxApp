import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import {Settings} from './Settings';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = ({navigation}) => {
    
    return (<>
        <TouchableOpacity
            style={styles.container}
        >
            <View style={[styles.modal, {width: 170, height: 210, marginBottom: 450, marginLeft: 180}]}>
                <ScrollView>
                    <TouchableOpacity>
                        <Text style={styles.text}>New group</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>New broadcast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>WhatsApp Web</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Starred messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.text}>Settings</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </TouchableOpacity>
        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 10,
        fontSize: 16,   
    },

})

export {ModalPicker}

