import { IAM } from './iam.models';
import * as IamActions from './iam.actions';
import { State, initialState, reducer } from './iam.reducer';

describe('Iam Reducer', () => {
  const createUserProfileEntity = (
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

  beforeEach(() => {});

  describe('valid Iam actions', () => {
    it('loadIamSuccess should return set the list of known Iam', () => {
      const iam = [
        createUserProfileEntity('PRODUCT-AAA'),
        createUserProfileEntity('PRODUCT-zzz'),
      ];
      const action = IamActions.loadUserProfileSuccess({ iam });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
