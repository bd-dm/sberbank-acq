import {
  ISberbankAcquiringConfig,
  ISberbankAcquiringCredentials,
  ISberbankAcquiringNamePassCredentials,
  ISberbankAcquiringTokenCredentials,
  ISberbankMethodOptionsDeposit,
  ISberbankMethodOptionsRegister,
  ISberbankMethodOptionsRegisterPreAuth,
  ISberbankMethodResponseDeposit,
  ISberbankMethodResponseRegister,
  ISberbankMethodResponseRegisterPreAuth,
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

  async reverse() {
    // const method = ISberbankRestServiceMethod.REVERSE;
  }

  async refund() {
    // const method = ISberbankRestServiceMethod.REFUND;
  }

  async getOrderStatusExtended() {
    // const method = ISberbankRestServiceMethod.GET_ORDER_STATUS_EXTENDED;
  }

  async verifyEnrollment() {
    // const method = ISberbankRestServiceMethod.VERIFY_ENROLLMENT;
  }

  async decline() {
    // const method = ISberbankRestServiceMethod.DECLINE;
  }

  async getReceiptStatus() {
    // const method = ISberbankRestServiceMethod.GET_RECEIPT_STATUS;
  }

  async unBindCard() {
    // const method = ISberbankRestServiceMethod.UN_BIND_CARD;
  }

  async bindCard() {
    // const method = ISberbankRestServiceMethod.BIND_CARD;
  }

  async getBindings() {
    // const method = ISberbankRestServiceMethod.GET_BINDINGS;
  }
}
