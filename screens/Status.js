import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
// import {ImagePicker} from 'react-native-image-crop-picker';

export default function Status () {
  // const [image, setImage] = useState(null)
  // const [image, setImages] = useState(null)
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Status</Text>
          {/* {this.state.image ? this.renderAsset(this.state.image) : null} */}
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    paddingTop: 25,
    position: 'relative'
  },
  emptyStay:{
    textAlign: 'center',
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});


