import { Client } from 'eris';
import { newClient } from '..';

describe('TestUtils - Client', () => {
  let client: Client;

  it('it should be of type client', () => {
    client = newClient();
    expect(client).toBeInstanceOf(Client);
    expect(client.token).toBe('');
  });

  it('it should let the client be partially defined', () => {
    client = newClient({ token: 'test' });
    expect(client).toBeDefined();
    expect(client).toBeInstanceOf(Client);
    expect(client.token).toBe('test');
  });

  it('it should accept a token', () => {
    client = newClient({}, 'test');
    expect(client).toBeDefined();
    expect(client).toBeInstanceOf(Client);
    expect(client.token).toBe('test');
  });

  it('it should accept client options', () => {
    client = newClient({}, '', {
      connectionTimeout: 3000
    });
    expect(client).toBeDefined();
    expect(client).toBeInstanceOf(Client);
    expect(client.options.connectionTimeout).toBe(3000);
  });
});
