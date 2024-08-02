import ErrorRepository from '../ErrorRepository';

test('should add and translate error codes', () => {
  const repository = new ErrorRepository();
  repository.add(404, 'Not Found');
  repository.add(500, 'Internal Server Error');

  expect(repository.translate(404)).toBe('Not Found');
  expect(repository.translate(500)).toBe('Internal Server Error');
});

test('should return "Unknown error" for unknown error code', () => {
  const repository = new ErrorRepository();
  repository.add(404, 'Not Found');

  expect(repository.translate(400)).toBe('Unknown error');
});
