import { ISberbankRestServiceConfig } from '../src/types/SberbankRestService.interface';
import SberbankRestService from '../src/classes/SberbankRestService';

describe('Sberbank Acquiring', () => {
  const restServiceConfig: ISberbankRestServiceConfig = {
    apiUri: 'http://localhost',
  };

  const restService = new SberbankRestService(restServiceConfig);

  test('Object is creating', () => {
    expect(restService).toBeDefined();
  });
});
