import axios from 'axios';
import consts from '../config/consts';
import {
  ISberbankRestServiceCallOptions,
  ISberbankRestServiceConfig,
} from '../types/SberbankRestService.interface';

const defaultConfig: ISberbankRestServiceConfig = {
  apiUri: consts.SBERBANK_API_URI,
};

export default class SberbankRestService {
  private config: ISberbankRestServiceConfig;

  constructor(config: Partial<ISberbankRestServiceConfig> = {}) {
    this.config = {
      ...defaultConfig,
      ...config,
    };
  }

  async call<Req, Res>(
    options: ISberbankRestServiceCallOptions<Req>,
  ): Promise<Res> {
    const uri = `${this.config.apiUri}${options.method}.do`;

    const paramsObject = {
      ...options.credentials,
      ...options.data,
    };

    const params = new URLSearchParams();
    Object.entries(paramsObject).forEach(([key, value]) => {
      params.append(key, value?.toString() || '');
    });

    const response = await axios.post<Res>(
      uri,
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data;
  }
}
