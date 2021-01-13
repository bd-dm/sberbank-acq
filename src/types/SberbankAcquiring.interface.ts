import { ISberbankRestServiceConfig } from './SberbankRestService.interface';

export interface ISberbankAcquiringNamePassCredentials {
  username: string;
  password: string;
}

export interface ISberbankAcquiringTokenCredentials {
  token: string;
}

export type ISberbankAcquiringCredentials =
  ISberbankAcquiringNamePassCredentials |
  ISberbankAcquiringTokenCredentials;

export interface ISberbankAcquiringConfig {
  credentials: ISberbankAcquiringCredentials,
  restConfig?: Partial<ISberbankRestServiceConfig>;
}

// REST METHODS OPTIONS

export interface ISberbankMethodOptionsBase {

}

export interface ISberbankMethodOptionsRegister extends ISberbankMethodOptionsBase {
  orderNumber: string;
  amount: number;
  returnUrl: string;

  currency?: string;
  failUrl?: string;
  description?: string;
  language?: string;
  pageView?: string;
  clientId?: string;
  merchantLogin?: string;
  jsonParams?: string;
  sessionTimeoutSecs?: string;
  expirationDate?: string;
  bindingId?: string;
  features?: string;
  email?: string;
  phone?: string;
}

// REST METHODS RESPONSE

export interface ISberbankMethodResponseBase {

}

export interface ISberbankMethodResponseRegister extends ISberbankMethodResponseBase {

}
