import { ISberbankAcquiringConfig } from '../dist/types/SberbankAcquiring.interface';
import SberbankAcquiring from '../dist/classes/SberbankAcquiring';

describe('Sberbank Acquiring', () => {
  const acquiringConfig: ISberbankAcquiringConfig = {
    credentials: {
      username: 'test',
      password: 'test',
    },
  };

  const acquiring = new SberbankAcquiring(acquiringConfig);

  test('Object is creating', () => {
    expect(acquiring).toBeDefined();
  });
});
