/* global require */
import React, { Fragment, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import PrimeButton from '../../elements/PrimeButton';
import Text from '../../elements/Text';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  btnWidth,
  btnHeight,
  marginHorizontal,
  spaceVertical,
  colors,
  fontSize,
} from '../../styles/variables';
import Common from './Common';
import api from '../../utils/api';

function Details(props) {
  const [data, setdata] = useState(props.navigation.state.params.orderDetail)
  // const [data, setdata] = useState({
  //   itemname: 'asdsadsad',
  //   cal_count: '123213',
  //   fat_count: '122',
  //   amount: '123123',
  //   pro_count: '123213',
  //   car_count: '2asd',
  //   itemcount: 'sadsad',
  //   // cr_date: new Date()
  // })
  const [d, setd] = useState(new Date("2020-11-23 12:39:46"))

        const googleBtnSetting = {
          btnWidth: btnWidth.large,
          btnHeight: btnHeight,
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          style: {
          }
        };

        useEffect(() => {
        const backAction = () => {
          props.navigation.navigate('ChooseOption', { goBack: true});
          return true
        }
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
        }, [])

      


        const getDetails = {
            btnWidth: btnWidth.large,
            btnHeight: btnHeight,
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            style: {
                marginBottom: spaceVertical.semiSmall,
            }
          };
    
          /**
       * Handle when click sign in button
       */


      const cancelOrder = () => {
          console.log(props, "this are props");
          props.navigation.navigate("ChooseOption")
      }

      const deliverOrder = async () => {
        let vendorID = await AsyncStorage.getItem("vendorID")
        console.log(vendorID,"this is vendorID");
        const dat = JSON.stringify({v_id: JSON.parse(vendorID), order_id: data.order_id})
        console.log(dat)
        api.post('/orderdeliver.php', dat)
        .then(res => {
          console.log(res.data, "ORDER DELIVER");
          if(res.data.success) {
            props.navigation.navigate("ChooseOption");
            alert(res.data.message);
          }else {
            alert(res.data.message)
          }
        })
    }
      return (
        <Fragment>
    { props.isLoading ? ( <View style={[styles.container, styles.loading]}>
            <ActivityIndicator />
          </View>) : (
     <View style={styles.container}>
       <Common navigation={props.navigation} />
       <View ><Text style={{fontSize: fontSize.normal, marginBottom: marginHorizontal.small}}>Order ID : {data && data.order_id}</Text></View>
       <View style={styles.main}>
     
       <View style={styles.form}>
         
     <View style={styles.One}>
    <View >
    <Text style={styles.label}>Name</Text>
          <Text gray style={styles.dataText}>{data && data.itemname}</Text>

    </View>
    <View>
    <Text style={styles.label}>Calories</Text>
    <Text gray style={styles.dataText}>{data && data.cal_count}</Text>

    </View>
    </View> 
    <View style={styles.One}>
    <View >
    <Text style={styles.label}>Protein</Text>
    <Text gray style={styles.dataText}>{data && data.pro_count}</Text>

    </View>
    <View>
    <Text style={styles.label}>Fat</Text>
    <Text gray style={styles.dataText}>{data && data.fat_count}</Text>

    </View>
    </View>
    </View>
    <View style={styles.form}>
<View style={styles.One}>
    <View >
    <Text style={styles.label}>Carbohydrates</Text>
    <Text gray style={styles.dataText}>{data && data.car_count}</Text>

    </View>
    <View>
    <Text style={styles.label}>Item Count</Text>
    <Text gray style={styles.dataText}>{data && data.itemcount}</Text>

    </View>
    </View>    
    <View style={styles.One}>
    <View>
    <Text style={styles.label}>Date</Text>
    <Text gray style={styles.dataText}>{data && data.cr_date.substr(0,data.cr_date.indexOf(' ')) }</Text>
    {/* <Text gray style={styles.dataText}>23-10-2020</Text> */}

    </View >
    <View style={styles.amount}>
    <Text style={styles.label}>Amount</Text>
          <Text gray style={styles.dataText}>{data && data.amount}</Text>

    </View>
    </View>
     </View>
     
       </View>
   
     <View style={styles.btnCont}>
        <PrimeButton
         navigation={props.navigation}
         setting={getDetails}
         btnText='Deliver'
         onPressButton={deliverOrder}
       />
        <PrimeButton
         navigation={props.navigation}
         setting={googleBtnSetting}
         btnText='Cancel'
         onPressButton={cancelOrder}
       />
     </View>
     
    </View>
    )}
        </Fragment>
       
      );
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: marginHorizontal.small,
      // paddingVertical : spaceVertical.normal
      
    },
    form: {
      // paddingTop: spaceVertical.small,
    //   paddingBottom: responsiveHeight(4)
    flexDirection: "column", 
    // justifyContent: 'flex-end',
    // alignContent: 'space-between',
    marginVertical : spaceVertical.normal,
    paddingVertical: spaceVertical.extraSmall,
    paddingHorizontal: marginHorizontal.semiSmall,
       
    },
    btnCont: {
      alignItems: 'center',
      paddingBottom: spaceVertical.semiSmall,
    },
    dataText : {
      fontSize: fontSize.starIc,

    },
    label: {
      fontSize: fontSize.medium,
      paddingVertical: spaceVertical.extraSmall
    },
    One: {
      // flexDirection: "row", 
      // justifyContent: 'flex-start',
      fontSize: fontSize.normal,
      // paddingVertical: spaceVertical.small
    
    },
    amount: {
      fontSize: fontSize.starIc,
      marginRight: marginHorizontal.small
    },
    main: {
      flexDirection: 'row',
      borderRadius: 5,
      borderColor : "#DDDDDD",
      borderWidth: 1,
    marginBottom : spaceVertical.normal,

    }
  });

export default Details
