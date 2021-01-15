import {
  ISberbankAcquiringConfig,
  ISberbankAcquiringCredentials,
  ISberbankAcquiringNamePassCredentials,
  ISberbankAcquiringTokenCredentials,
  ISberbankMethodOptionsDeposit,
  ISberbankMethodOptionsGetOrderStatusExtended,
  ISberbankMethodOptionsRefund,
  ISberbankMethodResponseRefund,
  ISberbankMethodOptionsRegister,
  ISberbankMethodOptionsRegisterPreAuth,
  ISberbankMethodOptionsReverse,
  ISberbankMethodResponseDeposit,
  ISberbankMethodResponseGetOrderStatusExtended,
  ISberbankMethodResponseRegister,
  ISberbankMethodResponseRegisterPreAuth,
  ISberbankMethodResponseReverse,
  ISberbankMethodOptionsVerifyEnrollment,
  ISberbankMethodResponseVerifyEnrollment,
  ISberbankMethodOptionsDecline,
  ISberbankMethodResponseDecline,
  ISberbankMethodOptionsGetReceiptStatus,
  ISberbankMethodResponseGetReceiptStatus,
  ISberbankMethodOptionsUnBindCard,
  ISberbankMethodResponseUnBindCard,
  ISberbankMethodOptionsBindCard,
  ISberbankMethodResponseBindCard,
  ISberbankMethodOptionsGetBindings,
  ISberbankMethodResponseGetBindings,
} from '../types/SberbankAcquiring.interface';
import SberbankRestService from './SberbankRestService';
import { ISberbankRestServiceCredentials, ISberbankRestServiceMethod } from '../types/SberbankRestService.interface';

export default class SberbankAcquiring {
  private config: ISberbankAcquiringConfig;

  private restService: SberbankRestService;

  constructor(config: ISberbankAcquiringConfig) {
    this.config = config;
    this.restService = new SberbankRestService(config.restConfig);
  }

  private static getCredentialsForRestService(
    credentials: ISberbankAcquiringCredentials,
  ): ISberbankRestServiceCredentials {
    const { username: userName } = (credentials as ISberbankAcquiringNamePassCredentials);
    const { password } = credentials as ISberbankAcquiringNamePassCredentials;
    const { token } = credentials as ISberbankAcquiringTokenCredentials;

    if (userName && password) {
      return {
        userName,
        password,
      };
    }

    if (token) {
      return {
        token,
      };
    }

    throw new Error('No credentials present');
  }

  async register(
    options: ISberbankMethodOptionsRegister,
  ): Promise<ISberbankMethodResponseRegister> {
    const method = ISberbankRestServiceMethod.REGISTER;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsRegister,
      ISberbankMethodResponseRegister
      >({
        method,
        credentials,
        data: options,
      });
  }

  async registerPreAuth(
    options: ISberbankMethodOptionsRegisterPreAuth,
  ): Promise<ISberbankMethodResponseRegisterPreAuth> {
    const method = ISberbankRestServiceMethod.REGISTER_PRE_AUTH;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsRegisterPreAuth,
      ISberbankMethodResponseRegisterPreAuth
      >({
        method,
        credentials,
        data: options,
      });
  }

  async deposit(
    options: ISberbankMethodOptionsDeposit,
  ): Promise<ISberbankMethodResponseDeposit> {
    const method = ISberbankRestServiceMethod.DEPOSIT;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsDeposit,
      ISberbankMethodResponseDeposit
      >({
        method,
        credentials,
        data: options,
      });
  }

  async reverse(
    options: ISberbankMethodOptionsReverse,
  ): Promise<ISberbankMethodResponseReverse> {
    const method = ISberbankRestServiceMethod.REVERSE;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsReverse,
      ISberbankMethodResponseReverse
      >({
        method,
        credentials,
        data: options,
      });
  }

  async refund(
    options: ISberbankMethodOptionsRefund,
  ): Promise<ISberbankMethodResponseRefund> {
    const method = ISberbankRestServiceMethod.REFUND;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsRefund,
      ISberbankMethodResponseRefund
      >({
        method,
        credentials,
        data: options,
      });
  }

  async getOrderStatusExtended(
    options: ISberbankMethodOptionsGetOrderStatusExtended,
  ): Promise<ISberbankMethodResponseGetOrderStatusExtended> {
    const method = ISberbankRestServiceMethod.GET_ORDER_STATUS_EXTENDED;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsGetOrderStatusExtended,
      ISberbankMethodResponseGetOrderStatusExtended
      >({
        method,
        credentials,
        data: options,
      });
  }

  async verifyEnrollment(
    options: ISberbankMethodOptionsVerifyEnrollment,
  ): Promise<ISberbankMethodResponseVerifyEnrollment> {
    const method = ISberbankRestServiceMethod.VERIFY_ENROLLMENT;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsVerifyEnrollment,
      ISberbankMethodResponseVerifyEnrollment
      >({
        method,
        credentials,
        data: options,
      });
  }

  async decline(
    options: ISberbankMethodOptionsDecline,
  ): Promise<ISberbankMethodResponseDecline> {
    const method = ISberbankRestServiceMethod.DECLINE;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsDecline,
      ISberbankMethodResponseDecline
      >({
        method,
        credentials,
        data: options,
      });
  }

  async getReceiptStatus(
    options: ISberbankMethodOptionsGetReceiptStatus,
  ): Promise<ISberbankMethodResponseGetReceiptStatus> {
    const method = ISberbankRestServiceMethod.GET_RECEIPT_STATUS;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsGetReceiptStatus,
      ISberbankMethodResponseGetReceiptStatus
      >({
        method,
        credentials,
        data: options,
      });
  }

  async unBindCard(
    options: ISberbankMethodOptionsUnBindCard,
  ): Promise<ISberbankMethodResponseUnBindCard> {
    const method = ISberbankRestServiceMethod.UN_BIND_CARD;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsUnBindCard,
      ISberbankMethodResponseUnBindCard
      >({
        method,
        credentials,
        data: options,
      });
  }

  async bindCard(
    options: ISberbankMethodOptionsBindCard,
  ): Promise<ISberbankMethodResponseBindCard> {
    const method = ISberbankRestServiceMethod.BIND_CARD;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsBindCard,
      ISberbankMethodResponseBindCard
      >({
        method,
        credentials,
        data: options,
      });
  }

  async getBindings(
    options: ISberbankMethodOptionsGetBindings,
  ): Promise<ISberbankMethodResponseGetBindings> {
    const method = ISberbankRestServiceMethod.GET_BINDINGS;
    const credentials = SberbankAcquiring.getCredentialsForRestService(this.config.credentials);

    return this.restService.call<
      ISberbankMethodOptionsGetBindings,
      ISberbankMethodResponseGetBindings
      >({
        method,
        credentials,
        data: options,
      });
  }
}
