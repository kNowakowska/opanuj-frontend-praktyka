import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return an empty array if data is correct', () => {
    const errors = formValidator('John', 'Doe', 18);
    expect(errors).toHaveLength(0);
  });

  test('should return an error if firstName is shorter than 2 chars', () => {
    const errors = formValidator('J', 'Doe', 18);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if lastName is shorter than 2 chars', () => {
    const errors = formValidator('John', 'D', 18);
    expect(errors).toContain('Last name is required');
  });

  test('should return an empty array if firstName and lastName longer than 1 char', () => {
    const errors = formValidator('Le', 'Do', 18);
    expect(errors).toHaveLength(0);
  });

  test('should return an error if age is not a number', () => {
    const errors = formValidator('Le', 'Do', '18');
    expect(errors).toContain('Age must be a number.');
  });
});
