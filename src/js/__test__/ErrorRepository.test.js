import ErrorRepository from '../ErrorRepository';

test.each([
  [255, 'Ok'],
  [13, 'App error'],
  [1, 'Unknown error'],
])(
  'Check application error',
  (code, expected) => {
    const appError = new ErrorRepository();

    expect(appError.translate(code)).toBe(expected);
  },
);
