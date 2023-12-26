import auth from '@react-native-firebase/auth';

// TODO [authentication::] sign in user with email and password
/**
 * Log a user in with Firebase
 * @param email user email address
 * @param pass user password
 */
export const login = async (email: string, pass: string) =>
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then(res => ({success: true, desc: 'success', data: res}))
    .catch(error => {
      const errorState = {success: false, data: error};
      if (error.code === 'auth/wrong-password') {
        return {
          ...errorState,
          desc: 'Invalid email/password combination',
        };
      }
      if (error.code === 'auth/invalid-email') {
        return {
          ...errorState,
          desc: 'Invalid email address',
        };
      }
      if (error.code === 'auth/user-not-found') {
        return {...errorState, desc: 'User not found'};
      }
      if (error.code === 'auth/user-disabled') {
        return {
          ...errorState,
          desc: 'User account is disabled',
        };
      }
      return {success: false, desc: 'Unkown error', data: error};
    });

// TODO [authentication::] sign current user out of app
/**
 * Logs the currently signed in user out of the app
 */
export const logout = async () =>
  auth()
    .signOut()
    .then(() => ({success: true, desc: 'success', data: null}))
    .catch(error => ({
      success: false,
      desc: 'unkown',
      data: error,
    }));

// TODO [authentication::] delete user
/**
 * Deletes the currently signed in user from firebase
 */
export const deleteUser = async () =>
  auth()
    .currentUser?.delete()
    .then(() => {
      return {success: true, desc: 'success', data: null};
    })
    .catch(error => {
      const errorState = {success: false, data: error};
      if (error.code === 'auth/requires-recent-login') {
        return {...errorState, desc: 'Login required'};
      }
      return {...errorState, desc: 'unkown'};
    });

// TODO [authentication::] get token of current user signed in app
/**
 * Get a JWT for the currently signed in user
 */
export const getIdToken = async () =>
  auth()
    .currentUser?.getIdToken()
    .then(token => token)
    .catch(() => null);

// TODO [authentication] verify user's email when register
/**
 * Set a new user password using the password reset code
 */
export const verifyEmail = async () =>
  auth()
    .currentUser?.sendEmailVerification()
    .then(() => ({success: true, desc: 'success', data: null}))
    .catch(error => ({
      success: false,
      desc: 'unkown',
      data: error,
    }));

/**
 * Register a new user in Firebase, on success a verification email will be sent
 * @param email user email address
 * @param pass user password
 */
export const register = async (email: string, pass: string) =>
  // TODO: [authentication::] Register account with email and password
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(async res => {
      // clg
      console.log('success');

      return {success: true, desc: 'success', data: res};
    })
    .catch(error => {
      const errorState = {success: false, data: error};
      // clg
      console.log('error');

      if (error.code === 'auth/email-already-in-use') {
        return {
          ...errorState,
          desc: 'Email address is already in use',
        };
      }
      if (error.code === 'auth/invalid-email') {
        return {
          ...errorState,
          desc: 'Invalid email address',
        };
      }
      if (error.code === 'auth/weak-password') {
        return {
          ...errorState,
          desc: 'Password must be at least 8 characters',
        };
      }
      return {
        ...errorState,
        desc: 'Unkown registration error',
      };
    });

// TODO [authentication::] set new password when user using reset code be sent by firebase
/**
 * NOT IN USE
 * Set a new user password using the password reset code
 * @param code password reset code sent to user email
 * @param newPassword new password to be set
 */
export const setNewPassword = async (code: string, newPassword: string) =>
  auth()
    .confirmPasswordReset(code, newPassword)
    .then(res => console.log(res))
    .catch(error => console.log(error));

// TODO [authentication::] reset password
/**
 * Reset a users password using their email address
 * @param email user email address
 */
export const resetPassword = async (email: string) =>
  auth()
    .sendPasswordResetEmail(email)
    .then(() => ({success: true, desc: 'success', data: null}))
    .catch(error => {
      const errorState = {success: false, data: error};
      if (error.code === 'auth/invalid-email') {
        return {
          ...errorState,
          desc: 'Invalid email address',
        };
      }
      if (error.code === 'auth/user-not-found') {
        return {
          ...errorState,
          desc: 'User not found',
        };
      }
      return {
        ...errorState,
        desc: 'Unkown registration error',
      };
    });

// TODO [authentication::] update email
/**
 * Set a new user email address, verify with existing email first
 * @param email new email to be set on user
 */
export const updateEmail = async (email: string) =>
  auth()
    .currentUser?.verifyBeforeUpdateEmail(email)
    .then(() => ({success: true, desc: 'success', data: null}))
    .catch(error => {
      const errorState = {success: false, data: error};
      if (error.code === 'auth/requires-recent-login') {
        return {...errorState, desc: 'Login required'};
      }
      return {...errorState, desc: 'unkown'};
    });

/**
 * Refresh the current signed in user data
 */
export const refreshUser = async () => auth().currentUser?.reload();

/**
 * Set a new user display name in firebase auth
 * @param displayName new display name to be set on user
 */
export const updateDisplayName = async (displayName: string) =>
  auth()
    .currentUser?.updateProfile({displayName})
    .then(() => ({success: true, desc: 'success', data: null}))
    .catch(error => ({
      success: false,
      desc: 'unkown',
      data: error,
    }));
