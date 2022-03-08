import { InjectionToken } from "@angular/core";

export const ADDRESS2_CONFIG_TOKEN = new InjectionToken('ADDRESS2_CONFIG_TOKEN');
export const USER_CONFIG_TOKEN = new InjectionToken<UserConfig>('USER_CONFIG_TOKEN');
export const ADDRESS_CONFIG_TOKEN = new InjectionToken('ADDRESS_CONFIG_TOKEN');
export const GLOBAL_CONFIG_TOKEN = new InjectionToken('GLOBAL_CONFIG_TOKEN', {
  providedIn: 'root',
  factory: () => {
    return 'I am GLOBAL!'
  }
});


export interface UserConfig {
  name: string;
  age: number;
}

export const defaultUserConfig: UserConfig = {
  name: 'Kevin Q',
  age: 30
}
