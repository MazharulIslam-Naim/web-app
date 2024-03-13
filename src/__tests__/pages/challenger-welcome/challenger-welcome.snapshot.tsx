import ChallengerWelcome from '@/pages/challenger-welcome';
import { cleanup, render } from '@testing-library/react';

import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('ChallengerWelcome', () => {
  afterEach(cleanup);
  
  it('renders challenger-welcome page unchanged', () => {
    const { container } = render(<ChallengerWelcome />);
    expect(container).toMatchSnapshot();
  });
});