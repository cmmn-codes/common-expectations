/**
 * Asserts that runtime value exists. If not throws error with optionally specified message.
 */
export function exists<T>(
  v: T | undefined | null,
  message?: string
): asserts v is T {
  if (v == null) {
    throw new Error(message || 'Expected value to exist!');
  }
}

/**
 * Helper function to assert that a code path is unreachable.
 * If type is does not evaluate to `never` than typescript will throw type errors.
 * At runtime if value is present, the function will throw an error allowing unexpect behavior to be caught.
 */
export function isUnreachable(v: never, message?: string): void {
  throw new Error(message || `Unreachable value encountered. Received ${v}.`);
}
