import { UserDatabase } from './user-database';

import { User } from './user';

describe('UserDatabase', () => {
  it('should create an instance', () => {
    expect(new UserDatabase()).toBeTruthy();
  });
});
