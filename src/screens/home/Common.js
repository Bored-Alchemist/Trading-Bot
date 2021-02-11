import { View } from 'native-base'
import Text from "../../elements/Text"
import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { fontSize, marginHorizontal, responsiveWidth, spaceVertical } from '../../styles/variables'
import { Image , Modal, BackHandler, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


  function Common(props) {  

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            let authentication2 = await AsyncStorage.getItem("authentication")
            let authentication = JSON.parse(authentication2)
      if (!authentication) {
        AsyncStorage.setItem(
          "authentication",
          JSON.stringify({ isAuthenticated: false })
        );
  
        return   props.navigation.navigate("LoginScreen", {clearFields : true});
      } else if (!authentication.isAuthenticated) {
  
        return   props.navigation.navigate("LoginScreen", {clearFields : true});
      }
        }
        checkAuth()
    }, [])
  
    const logoWidth = responsiveWidth(10.67);
    const logoHeight = logoWidth * 0.858;
    return (
       <View style={{flexDirection: "row", justifyContent: "space-between",   marginVertical: spaceVertical.normal}}>
           <Image 
              source={require('../../../assets/log.png')}
              style={{width: logoWidth, height: logoHeight, marginTop: marginHorizontal.small}}
           />
           <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false)
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Are you sure you want to logout?</Text>

                  <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.textStyle}>No</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#f44336" }}
                    onPress={() => {
                      AsyncStorage.removeItem("authentication")
                      props.navigation.navigate("LoginScreen", {clearFields : true})
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
           <TouchableOpacity onPress={() => {setModalVisible(true)}}>
                <Text style={{fontSize: fontSize.medium, marginHorizontal: marginHorizontal.semiSmall, marginTop: marginHorizontal.semiSmall}}>
                    Logout
                </Text>
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 25
  },
  upper: {
    flex: 1.2,
  },
  lower: {
    flex: 1,
  },
  cardView: {
    flexDirection: 'row',
    marginHorizontal: Dimensions.get('window').width * 0.03,
    marginVertical: Dimensions.get('window').height * 0.012
  },
  card: {
    flex: 1,
  },
  header: {
      marginBottom: Dimensions.get('window').height * 0.04
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    flex:1,
    margin:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default Common
