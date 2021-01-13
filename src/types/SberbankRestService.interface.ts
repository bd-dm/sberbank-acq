export enum ISberbankRestServiceMethod {
  REGISTER = 'register',
  REGISTER_PRE_AUTH = 'registerPreAuth',
  DEPOSIT = 'deposit',
  REVERSE = 'reverse',
  REFUND = 'refund',
  GET_ORDER_STATUS_EXTENDED = 'getOrderStatusExtended',
  VERIFY_ENROLLMENT = 'verifyEnrollment',
  DECLINE = 'decline',
  GET_RECEIPT_STATUS = 'getReceiptStatus',
  UN_BIND_CARD = 'unBindCard',
  BIND_CARD = 'bindCard',
  GET_BINDINGS = 'getBindings',
}

export interface ISberbankRestServiceCredentials {
  userName?: string;
  password?: string;
  token?: string;
}

export interface ISberbankRestServiceConfig {
  apiUri: string;
}

export interface ISberbankRestServiceCallOptions<T> {
  method: ISberbankRestServiceMethod;
  credentials: ISberbankRestServiceCredentials
  data: T,
}
