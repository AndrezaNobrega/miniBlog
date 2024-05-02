import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthProvider, useAuthValue } from './AuthContext';

describe('AuthContext', () => {
  test('provides the auth value correctly', () => {
    const authValue = { user: { id: 1, name: 'Test User' } };

    render(
      <AuthProvider value={authValue}>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByText(/Test User/i)).toBeInTheDocument();
  });
});

const TestComponent = () => {
  const { user } = useAuthValue();
  return <div>{user.name}</div>;
};
