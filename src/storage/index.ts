import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

export const useStorage = <T = unknown>(key: string, defaultValue: T) =>
  useMMKVStorage<T>(key, storage, defaultValue);
