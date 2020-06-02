import { Member } from 'eris';
import { newMember, defaultMemberData } from '..';

describe('TestUtils - User', () => {
  let member: Member;

  it('it should be of type Member', () => {
    member = newMember();
    expect(member).toBeInstanceOf(Member);
  });

  it('it should be using the defaultMemberData object by default', () => {
    member = newMember();
    expect(member.username).toBe('Nelly');
    expect(member.discriminator).toBe('1337');
    expect(member.avatar).toBe('8342729096ea3675442027381ff50dfe');
    expect(member.id).toBe('80351110224678912');
    expect(member.bot).toBe(false);
  });

  it('it should let the member be partially defined', () => {
    member = newMember({ nick: 'test' });
    expect(member).toBeDefined();
    expect(member).toBeInstanceOf(Member);
    expect(member.nick).toBe('test');
    expect(member.id).toBe('80351110224678912');
  });

  it('it should accept member object data', () => {
    member = newMember({}, { ...defaultMemberData, username: 'test' });
    expect(member).toBeDefined();
    expect(member).toBeInstanceOf(Member);
    expect(member.username).toBe('test');
    expect(member.id).toBe('80351110224678912');
  });
});
