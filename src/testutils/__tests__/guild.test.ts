import { Guild } from 'eris';
import { newGuild, defaultGuildData } from '..';

describe('TestUtils - Guild', () => {
  let guild: Guild;

  it('it should be of type Guild', () => {
    guild = newGuild();
    expect(guild).toBeInstanceOf(Guild);
  });

  it('it should be using the defaultGuildData object by default', () => {
    guild = newGuild();
    expect(guild.name).toBe('Discord Testers');
    expect(guild.icon).toBe('f64c482b807da4f539cff778d174971c');
    expect(guild.id).toBe('197038439483310086');
    expect(guild.description).toBe('The official place to report Discord Bugs!');
    expect(guild.features).toStrictEqual([
      'ANIMATED_ICON',
      'VERIFIED',
      'NEWS',
      'VANITY_URL',
      'DISCOVERABLE',
      'MORE_EMOJI',
      'INVITE_SPLASH',
      'BANNER',
      'PUBLIC'
    ]);
    expect(guild.ownerID).toBe('73193882359173120');
    // TODO: finish adding all of the defaultGuildData properties
  });

  it('it should let the guild be partially defined', () => {
    guild = newGuild({ name: 'test' });
    expect(guild).toBeDefined();
    expect(guild).toBeInstanceOf(Guild);
    expect(guild.name).toBe('test');
    expect(guild.id).toBe('197038439483310086');
  });

  it('it should accept guild object data', () => {
    guild = newGuild({}, { ...defaultGuildData, name: 'test' });
    expect(guild).toBeDefined();
    expect(guild).toBeInstanceOf(Guild);
    expect(guild.name).toBe('test');
    expect(guild.id).toBe('197038439483310086');
  });
});
