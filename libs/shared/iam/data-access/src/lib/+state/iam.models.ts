/**
 * Ideally we have generated types from BE DTO specs i.e.(openAPI), and in the FE we map those to correct entities
 * The following is an example of this technique
 */
export interface UserProfileDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

/**
 * Wrapping the mapped entity types in a namespace is preferred rather than
 * having to import * as IAM from ''
 */
export namespace IAM {
  export type UserProfile = UserProfileDto;

  export type UserSignUp = Pick<
    UserProfileDto,
    'email' | 'firstName' | 'lastName'
  > & { password: string };
  export type UserSignIn = Pick<UserProfileDto, 'email'> & { password: string };
}
