/**
 * Test Utilities Module
 * 
 * It is encouraged to integration test bot commands and events, and this module makes it easier
 * for developers by creating simple dummy objects to use with your testing library.
 * 
 * @module
 * @summary A module that helps with integration testing.
 */

import { User, Client, BaseData, ClientOptions, Member, Guild } from 'eris';
import { defaultUserData, defaultMemberData, defaultGuildData } from './defaults';
export * from './defaults';

/**
 * A function that copies data between to objects of the same type.
 * @param from 
 * @param to 
 */
function copy<T>(from: Partial<T>, to: T) {
  for (let key in from) {
    if (from[key]) to[key] = from[key];
  }
}

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
  copy(client, res);
  return res;
}

/**
 * Creates a new dummy user object.
 * 
 * @param {Partial<User>} user A partial user object to extend the dummy one.
 * @param {BaseData} userData Optional data to pass to the user constructor
 * @param {Client} client Optional Eris client to pass to the user constructor
 * @return {User} The dummy user object.
 * 
 * @see {@link https://abal.moe/Eris/docs/User|Eris Docs} for more information on the User object.
 */
export function newUser(user: Partial<User> = {}, userData: BaseData = defaultUserData, client: Client = newClient()): User {
  let res = new User(userData, client);
  copy(user, res);
  return res;
}

/**
 * Creates a new dummy guild object.
 * 
 * @param {Partial<Guild>} user A partial guild object to extend the dummy one.
 * @param {BaseData} userData Optional data to pass to the guild constructor
 * @param {Client} client Optional Eris client to pass to the guild constructor
 * @return {User} The dummy guild object.
 * 
 * @see {@link https://abal.moe/Eris/docs/Guild|Eris Docs} for more information on the Guild object.
 */
export function newGuild(guild: Partial<Guild> = {}, guildData: BaseData = defaultGuildData, client: Client = newClient()): Guild {
  let res = new Guild(guildData, client);
  copy(guild, res);
  return res;
}

/**
 * Creates a new dummy member object.
 * 
 * @param {Partial<Member>} member A partial member object to extend the dummy one.
 * @param {BaseData} memberData Optional data to pass to the member constructor
 * @param {Guild} guild Optional guild to pass to the member constructor
 * @param {Client} client Optional Eris client to pass to the member constructor
 * @return {Member} The dummy member object.
 * 
 * @see {@link https://abal.moe/Eris/docs/Member|Eris Docs} for more information on the Member object.
 */
export function newMember(member: Partial<Member> = {}, memberData: BaseData = defaultMemberData, guild: Guild = newGuild(), client: Client = newClient()): Member {
  let res = new Member(memberData, guild /*, client */);
  copy(member, res);
  return res;
}
