import { InviterContext, InviterContextType } from '@/contexts/inviter-context';
import { UserContext, UserContextType } from '@/contexts/user-context';
import { Inviter } from '@/models/Inviter';
import { User } from '@/models/User';
import Actions from '@/pages/actions';
import { cleanup, render } from '@testing-library/react';
import { Builder } from 'builder-pattern';

import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Actions', () => {
  afterEach(cleanup);
    
  it('checks if the correct elements appear when the user has registered to vote and the inviter has finished their challenge and no rewards are available', async () => {
    const userInfo = Builder<User>().name('Test').avatar('1').registeredVoter(true).notifyElectionReminders(false).startedChallenge(false).build();
    const userCtxValue = Builder<UserContextType>().activeUser(userInfo).build();
    const inviter = Builder<Inviter>().name('Test Name').avatar(1).finishedChallenge(true).build();
    const inviterCtxValue = Builder<InviterContextType>().inviterInfo(inviter).build();

    const { container } = render(
      <UserContext.Provider value={userCtxValue}>
        <InviterContext.Provider value={inviterCtxValue}>
          <Actions />
        </InviterContext.Provider>
      </UserContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});