/**
 * Test Utilities Module
 * 
 * It is encouraged to integration test bot commands and events, and this module makes it easier
 * for developers by creating simple dummy objects to use with your testing library.
 * 
 * @module
 * @summary A module that helps with integration testing.
 */

import { User, Client, BaseData, ClientOptions } from 'eris';

/**
 * Creates a new dummy client.
 * 
 * @param {Partial<Client>} client A partial client object, making it simple to add to the default client custom keys.
 * @param {string} token The token for the dummy client, it will not log in automatically using it. 
 * @param {ClientOptions} clientOptions Additional options for the client.
 * @return {Client} The dummy client
 * 
 * @see {@link https://abal.moe/Eris/docs/Client|Eris Docs} for more information on the Client object.
 */
export function newClient(client: Partial<Client> = {}, token: string = '', clientOptions: ClientOptions = {}): Client {
  let res: Client = new Client(token, clientOptions);
  for (let key in client) {
    if (client[key]) res[key] = client[key];
  }
  return res;
}


/**
 * The default user data object for the newUser function.
 * 
 * @constant
 */
export const defaultUserData = {
  id: '80351110224678912',
  username: 'test',
  discriminator: '1234',
  avatar: '8342729096ea3675442027381ff50dfe',
  bot: false,
  system: false,
  // eslint-disable-next-line camelcase
  public_flags: 64
};

/**
 * Creates a new dummy user object.
 * 
 * @param {Partial<User>} user A partial user object to extend the 
 * @param {BaseData} userData Optional data to pass to the user constructor
 * @param {Client} client Optional Eris client to pass to the user constructor
 * @return {User} The dummy user object.
 * 
 * @see {@link https://abal.moe/Eris/docs/User|Eris Docs} for more information on the User object.
 */
export function newUser(user: Partial<User> = {}, userData: BaseData = defaultUserData, client: Client = newClient()): User {
  let res = new User(userData, client);
  for (let key in user) {
    if (user[key]) res[key] = user[key];
  }
  return res;
}
