import { exists, isUnreachable } from '../src';

describe('common assertions', () => {
  describe('exists', () => {
    it('does not throw error if argument is truthy', () => {
      expect(() => exists(123)).not.toThrowError();
    });
    it('throws error if argument is null', () => {
      expect(() => exists(null)).toThrowError('Expected value to exist!');
    });
    it('throws error if argument is undefined', () => {
      expect(() => exists(undefined)).toThrowError('Expected value to exist!');
    });
    it('throws custom error message if provided', () => {
      expect(() => exists(undefined, 'Custom message')).toThrowError(
        'Custom message'
      );
    });
  });

  describe('isUnreachable', () => {
    it('throws an error if called with any value', () => {
      // @ts-expect-error This is testing exception when runtime value is not as expected
      expect(() => isUnreachable(123)).toThrowError(
        'Unreachable value encountered. Received 123.'
      );
    });
    it('throws error with message provided', () => {
      //@ts-expect-error This is testing exception when runtime value is not as expected
      expect(() => isUnreachable(null, 'Text Message')).toThrowError(
        'Text Message'
      );
    });
  });
});
