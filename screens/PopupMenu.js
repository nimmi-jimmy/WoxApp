import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import {ModalPicker} from './ModalPicker'
import {Settings} from './Settings'

export default function PopupMenu ({navigation}) {

  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }


    return (
        <View style={{flexDirection: 'row'}}>
           <Text style={{color: '#ffffff', fontSize: 20, marginTop: 8, marginLeft: 8,fontFamily: "Roboto_Bold"}}>WoxSpace</Text>
           <View style={{marginLeft: 210, marginTop: 10}}>
             <TouchableOpacity onPress={() => changeModalVisibility(true)}
             style={{alignSelf: 'stretch'}}
             >
                   <Icon name="more-vert" color={"#fff"} size={22}/>
             </TouchableOpacity>
           </View>
           <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => changeModalVisibility(false)}
           >
               <ModalPicker
                    changeModalVisibility={changeModalVisibility}
                    
               />
           </Modal>
        </View>
    )
  }