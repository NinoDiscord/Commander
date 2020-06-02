/**
 * The default user data object for the newUser function.
 * 
 * @constant
 */
export const defaultUserData = {
  id: '80351110224678912',
  username: 'Nelly',
  discriminator: '1337',
  avatar: '8342729096ea3675442027381ff50dfe',
  bot: false,
  system: false,
  // eslint-disable-next-line camelcase
  public_flags: 64
};

/**
 * The default guild data object for the newGuild function.
 * 
 * @constant
 */
export const defaultGuildData = {
  id: '197038439483310086',
  name: 'Discord Testers',
  icon: 'f64c482b807da4f539cff778d174971c',
  description: 'The official place to report Discord Bugs!',
  splash: null,
  // eslint-disable-next-line camelcase
  discovery_splash: null,
  features: [
    'ANIMATED_ICON',
    'VERIFIED',
    'NEWS',
    'VANITY_URL',
    'DISCOVERABLE',
    'MORE_EMOJI',
    'INVITE_SPLASH',
    'BANNER',
    'PUBLIC'
  ],
  emojis: [],
  banner: '9b6439a7de04f1d26af92f84ac9e1e4a',
  // eslint-disable-next-line camelcase
  owner_id: '73193882359173120',
  // eslint-disable-next-line camelcase
  application_id: null,
  region: 'us-west',
  // eslint-disable-next-line camelcase
  afk_channel_id: null,
  // eslint-disable-next-line camelcase
  afk_timeout: 300,
  // eslint-disable-next-line camelcase
  system_channel_id: null,
  // eslint-disable-next-line camelcase
  widget_enabled: true,
  // eslint-disable-next-line camelcase
  widget_channel_id: null,
  // eslint-disable-next-line camelcase
  verification_level: 3,
  roles: [],
  // eslint-disable-next-line camelcase
  default_message_notifications: 1,
  // eslint-disable-next-line camelcase
  mfa_level: 1,
  // eslint-disable-next-line camelcase
  explicit_content_filter: 2,
  // eslint-disable-next-line camelcase
  max_presences: 40000,
  // eslint-disable-next-line camelcase
  max_members: 250000,
  // eslint-disable-next-line camelcase
  vanity_url_code: 'discord-testers',
  // eslint-disable-next-line camelcase
  premium_tier: 3,
  // eslint-disable-next-line camelcase
  premium_subscription_count: 33,
  // eslint-disable-next-line camelcase
  system_channel_flags: 0,
  // eslint-disable-next-line camelcase
  preferred_locale: 'en-US',
  // eslint-disable-next-line camelcase
  rules_channel_id: '441688182833020939',
  // eslint-disable-next-line camelcase
  public_updates_channel_id: '281283303326089216',
  // eslint-disable-next-line camelcase
  embed_enabled: true,
  // eslint-disable-next-line camelcase
  embed_channel_id: null
};


/**
 * The default member data object for the newMember function.
 * 
 * @constant
 */
export const defaultMemberData = {
  id: defaultUserData.id,
  user: defaultUserData,
  nick: 'NickNelly',
  roles: [],
  // eslint-disable-next-line camelcase
  joined_at: '2015-04-26T06:26:56.936000+00:00',
  deaf: false,
  mute: false
};
