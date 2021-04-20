import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Doc at: https://react-native-async-storage.github.io/async-storage/docs/api
 * here are the standard functions implemented. 
 * to get for example 
 * at screen or widget cal those methods to read and write. 
 */

export const storeData = async (key: string,value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      console.log(AsyncStorage.getItem(key))
    } catch (e) {
      // saving error
    }
  }

export const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }