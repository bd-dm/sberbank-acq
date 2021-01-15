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

export type ISberbankPaymentWay =
  'CARD' |
  'CARD_BINDING' |
  'CARD_MOTO' |
  'CARD_PRESENT' |
  'SBRF_SBOL' |
  'UPOP' |
  'FILE_BINDING' |
  'SMS_BINDING' |
  'P2P' |
  'P2P_BINDING' |
  'PAYPAL' |
  'MTS' |
  'APPLE_PAY' |
  'APPLE_PAY_BINDING' |
  'ANDROID_PAY' |
  'ANDROID_PAY_BINDING' |
  'GOOGLE_PAY_CARD' |
  'GOOGLE_PAY_CARD_BINDING' |
  'GOOGLE_PAY_TOKENIZED' |
  'GOOGLE_PAY_TOKENIZED_BINDING' |
  'SAMSUNG_PAY' |
  'SAMSUNG_PAY_BINDING' |
  'IPOS' |
  'SBERPAY' |
  'SBERID';

export type ISberbankOSType = 'ios' | 'android';

export type ISberbankEnrollment = 'Y' | 'N' | 'U';

export interface ISberbankMethodOptionsBase {

}

export interface ISberbankBinding {
  bindingId?: string;
  maskedPan?: string;
  expiryDate?: number;
}

export interface ISberbankReceiptOfd {
  name?: string;
  website?: string;
  INN?: string;
}

export interface ISberbankReceipt {
  receiptStatus: number;

  uuid?: string;
  // eslint-disable-next-line camelcase
  shift_number?: number;
  // eslint-disable-next-line camelcase
  receipt_number?: number;
  // eslint-disable-next-line camelcase
  receipt_datetime?: string;
  // eslint-disable-next-line camelcase
  fn_number?: string;
  // eslint-disable-next-line camelcase
  ecr_registration_number?: string;
  // eslint-disable-next-line camelcase
  fiscal_document_number?: number;
  // eslint-disable-next-line camelcase
  fiscal_document_attribute?: string;
  // eslint-disable-next-line camelcase
  amount_total?: string;
  // eslint-disable-next-line camelcase
  serial_number?: string;
  fnsSite?: string;
  OFD?: ISberbankReceiptOfd;
}

export interface ISberbankMethodResponseBase {
  errorCode?: number,
  errorMessage?: string,
}

// REST METHODS OPTIONS

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

  // app2app
  app2app?: boolean,
  app?: {
    osType: ISberbankOSType,
    deepLink: string,
  },

  // back2app
  back2app?: boolean,
}

export interface ISberbankMethodOptionsRegisterPreAuth extends ISberbankMethodOptionsBase {
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

  // app2app
  app2app?: boolean,
  app?: {
    osType: ISberbankOSType,
    deepLink: string,
  },

  // back2app
  back2app?: boolean,
}

export interface ISberbankMethodOptionsDeposit extends ISberbankMethodOptionsBase {
  orderId: string;
  amount: number;
}

interface ISberbankMethodOptionsGetOrderStatusExtendedBase extends ISberbankMethodOptionsBase {
  language?: string;
}

interface ISberbankMethodOptionsGetOrderStatusExtendedWithId
  extends ISberbankMethodOptionsGetOrderStatusExtendedBase {
  orderId: string;
}

interface ISberbankMethodOptionsGetOrderStatusExtendedWithNumber
  extends ISberbankMethodOptionsGetOrderStatusExtendedBase {
  orderNumber: string;
}

export type ISberbankMethodOptionsGetOrderStatusExtended =
  ISberbankMethodOptionsGetOrderStatusExtendedWithId |
  ISberbankMethodOptionsGetOrderStatusExtendedWithNumber;

export interface ISberbankMethodOptionsReverse extends ISberbankMethodOptionsBase {
  orderId: string;

  amount?: number;
  jsonParams?: string;
  language?: string;
}

export interface ISberbankMethodOptionsRefund extends ISberbankMethodOptionsBase {
  orderId: string;
  amount: number;

  jsonParams?: string;
}

export interface ISberbankMethodOptionsVerifyEnrollment extends ISberbankMethodOptionsBase {
  pan: string;
}

interface ISberbankMethodOptionsDeclineBase extends ISberbankMethodOptionsBase {
  merchantLogin: string;

  language?: string;
}

interface ISberbankMethodOptionsDeclineWithId extends ISberbankMethodOptionsDeclineBase {
  orderId: string;
}

interface ISberbankMethodOptionsDeclineWithNumber extends ISberbankMethodOptionsDeclineBase {
  orderNumber: string;
}

export type ISberbankMethodOptionsDecline =
  ISberbankMethodOptionsDeclineWithId |
  ISberbankMethodOptionsDeclineWithNumber;

export interface ISberbankMethodOptionsGetReceiptStatus extends ISberbankMethodOptionsBase {
  orderId?: string;
  orderNumber?: string;
  uuid?: string;
  language?: string;
}

export interface ISberbankMethodOptionsUnBindCard extends ISberbankMethodOptionsBase {
  bindingId: string;
}

export interface ISberbankMethodOptionsBindCard extends ISberbankMethodOptionsBase {
  bindingId: string;
}

export interface ISberbankMethodOptionsGetBindings extends ISberbankMethodOptionsBase {
  clientId: string;
}

// REST METHODS RESPONSE

export interface ISberbankMethodResponseRegister extends ISberbankMethodResponseBase {
  orderId?: string;
  formUrl?: string;
  externalParams?: {
    sbolInactive?: boolean;
    sbolBankInvoiceId?: string;
    sbolDeepLink?: string;
  };
}

export interface ISberbankMethodResponseRegisterPreAuth extends ISberbankMethodResponseBase {
  orderId?: string;
  formUrl?: string;
  externalParams?: {
    sbolInactive?: boolean;
    sbolBankInvoiceId?: string;
    sbolDeepLink?: string;
  };
}

export interface ISberbankMethodResponseDeposit extends ISberbankMethodResponseBase {

}

interface ISberbankMethodResponseGetOrderStatusExtendedAttribute {
  name?: string;
  value?: string;

  [key: string]: any;
}

interface ISberbankMethodResponseGetOrderStatusExtendedTransactionAttribute {
  merchantIp?: string;
  sbolBankInvoiceId?: string;
}

interface ISberbankMethodResponseGetOrderStatusExtendedMerchantOrderParam {
  name?: string;
  value?: string;
}

export interface ISberbankMethodResponseGetOrderStatusExtended extends ISberbankMethodResponseBase {
  orderNumber: string;
  actionCode: number;
  actionCodeDescription: string;
  amount: number;
  date: number;
  ip: string;

  authDateTime?: number;
  terminalId?: string;
  currency?: string;
  orderStatus?: number;
  depositedDate?: number;
  orderDescription?: string;
  authRefNum?: string;
  refundedDate?: string;
  paymentWay?: ISberbankPaymentWay;
  merchantOrderParams?: ISberbankMethodResponseGetOrderStatusExtendedMerchantOrderParam[];
  cardAuthInfo?: {
    paymentSystem: string;
    productCategory: string;
    product: string;

    pan?: string;
    maskedPan?: string;
    expiration?: number;
    cardholderName?: string;
    approvalCode?: string;
    chargeback?: string;
    secureAuthInfo?: {
      eci?: number;
      cavv?: string;
      xid?: string;
    };
  };
  bindingInfo?: {
    clientId?: string;
    bindingId?: string;
    authDateTime?: string;
    terminalId?: string;
  };
  paymentAmountInfo?: {
    approvedAmount?: number;
    depositedAmount?: number;
    refundedAmount?: number;
    paymentState?: string;
    feeAmount?: number;
  };
  bankInfo?: {
    bankName?: string;
    bankCountryCode?: string;
    bankCountryName?: string;
  };
  payerData?: {
    email?: string;
  };
  transactionAttributes?: ISberbankMethodResponseGetOrderStatusExtendedTransactionAttribute[];
  attributes?: ISberbankMethodResponseGetOrderStatusExtendedAttribute[];
  refunds?: {
    referenceNumber?: number;
    actionCode?: number;
    amount?: number;
    date?: string;
  };
}

export interface ISberbankMethodResponseReverse extends ISberbankMethodResponseBase {

}

export interface ISberbankMethodResponseRefund extends ISberbankMethodResponseBase {

}

export interface ISberbankMethodResponseVerifyEnrollment extends ISberbankMethodResponseBase {
  enrolled?: ISberbankEnrollment;
  emitterName?: string;
  emitterCountryCode?: number;
}

export interface ISberbankMethodResponseDecline extends ISberbankMethodResponseBase {
  userMessage?: string;
}

export interface ISberbankMethodResponseGetReceiptStatus extends ISberbankMethodResponseBase {
  orderNumber?: string;
  orderId?: string;
  daemonCode?: string;
  // eslint-disable-next-line camelcase
  ecr_registration_number?: string;
  receipt?: ISberbankReceipt;
}

export interface ISberbankMethodResponseUnBindCard extends ISberbankMethodResponseBase {

}

export interface ISberbankMethodResponseBindCard extends ISberbankMethodResponseBase {

}

export interface ISberbankMethodResponseGetBindings extends ISberbankMethodResponseBase {
  bindings: ISberbankBinding[];
}
