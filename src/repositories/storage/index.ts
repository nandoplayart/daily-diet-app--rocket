import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IStorage {
    save(key:string, data:string): Promise<void>;
    get(key:string): Promise<string | null>;
}

export class Storage {

   public async save(key:string, data:string): Promise<void>{
      await AsyncStorage.setItem(key,data)    
   }

   public async get(key:string): Promise<string | null>{
       return await AsyncStorage.getItem(key);
   }
}