import AsyncStorage from "@react-native-async-storage/async-storage";
 const storeData = async () => {
    try {
      await AsyncStorage.setItem("user", "admin");
      await AsyncStorage.setItem("password", "123");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      let object: any = {};
      const user = await AsyncStorage.getItem("user");
      const password = await AsyncStorage.getItem("password");
      object.password = password;
      object.user = user;

      console.log(object);
    } catch (e) {
      console.log(e);
    }
  };

export {storeData, getData}