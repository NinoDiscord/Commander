import { User } from 'eris';
import { newUser, defaultUserData } from '..';

describe('TestUtils - User', () => {
  let user: User;

  it('it should be of type User', () => {
    user = newUser();
    expect(user).toBeInstanceOf(User);
  });

  it('it should be using the defaultUserData object by default', () => {
    user = newUser();
    expect(user.username).toBe('Nelly');
    expect(user.discriminator).toBe('1337');
    expect(user.avatar).toBe('8342729096ea3675442027381ff50dfe');
    expect(user.id).toBe('80351110224678912');
    expect(user.bot).toBe(false);
    expect(user.system).toBe(false);
    expect(user.publicFlags).toBe(64);
  });

  it('it should let the user be partially defined', () => {
    user = newUser({ username: 'test' });
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user.username).toBe('test');
    expect(user.id).toBe('80351110224678912');
  });

  it('it should accept user object data', () => {
    user = newUser({}, { ...defaultUserData, username: 'test' });
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user.username).toBe('test');
    expect(user.id).toBe('80351110224678912');
  });
});
