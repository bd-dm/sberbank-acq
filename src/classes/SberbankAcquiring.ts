import {
  ISberbankAcquiringConfig,
  ISberbankAcquiringCredentials,
  ISberbankAcquiringNamePassCredentials,
  ISberbankAcquiringTokenCredentials,
  ISberbankMethodOptionsRegister, ISberbankMethodResponseRegister,
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

    return this.restService.call<
      ISberbankMethodOptionsRegister,
      ISberbankMethodResponseRegister
      >({
        method,
        credentials: SberbankAcquiring.getCredentialsForRestService(this.config.credentials),
        data: options,
      });
  }

  async registerPreAuth() {
    // const method = ISberbankRestServiceMethod.REGISTER_PRE_AUTH;
  }

  async deposit() {
    // const method = ISberbankRestServiceMethod.DEPOSIT;
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
