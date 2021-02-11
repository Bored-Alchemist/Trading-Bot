
import AsyncStorage from '@react-native-async-storage/async-storage';

export const  getVendorID = async() => {
    let value = await AsyncStorage.getItem("@vendorID")
    return JSON.parse(value)
}