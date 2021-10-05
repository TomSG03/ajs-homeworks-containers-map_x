import Settings from '../Settings';

test(('Test overlay settings'), () => {
  const user = new Settings();
  user.setUser.set('theme', 'gray');

  expect(user.settings).toEqual(new Map([['theme', 'gray'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test(('Test default settings'), () => {
  const user = new Settings();

  expect(user.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});
