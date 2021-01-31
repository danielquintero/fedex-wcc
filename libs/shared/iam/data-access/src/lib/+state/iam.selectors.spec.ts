import { HttpErrorResponse } from '@angular/common/http';
import { IAM } from './iam.models';
import { IamPartialState, iamAdapter, initialState } from './iam.reducer';
import * as IamSelectors from './iam.selectors';

describe('Iam Selectors', () => {
  const ERROR_MSG = new HttpErrorResponse({
    status: 500,
    error: 'No Error Available',
  });
  const getIamId = (it: IAM.UserProfile) => it['id'];
  const createIamEntity = (
    id: string,
    firstName = '',
    lastName = '',
    email = '',
    isActive = true
  ) =>
    ({
      id,
      firstName: firstName || `firstName-${id}`,
      lastName: lastName || `lastName-${id}`,
      email: email || `${firstName}.${lastName}-@email.com`,
      isActive: isActive,
    } as IAM.UserProfile);

  let state: IamPartialState;

  beforeEach(() => {
    state = {
      iam: iamAdapter.setAll(
        [
          createIamEntity('USER-AAA'),
          createIamEntity('USER-BBB'),
          createIamEntity('USER-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'USER-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Iam Selectors', () => {
    it('getAllIam() should return the list of Iam', () => {
      const results = IamSelectors.getAllIam(state);
      const selId = getIamId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('USER-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = <IAM.UserProfile>IamSelectors.getSelected(state);
      const selId = getIamId(result);

      expect(selId).toBe('USER-BBB');
    });

    it("userProfileLoaded() should return the current 'loaded' status", () => {
      const result = IamSelectors.userProfileLoaded(state);

      expect(result).toBe(true);
    });

    it("userProfileError() should return the current 'error' state", () => {
      const result = IamSelectors.userProfileError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
