/**
 * Action to dispatch when the login process starts.
 * 
 * @param {Object} userCredentials - The user's credentials, typically containing username/email and password.
 * @returns {Object} The action object with type "LOGIN_START".
 */
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

/**
 * Action to dispatch when login is successful.
 * 
 * @param {Object} user - The authenticated user's information (e.g., token, user details).
 * @returns {Object} The action object with type "LOGIN_SUCCESS" and the user data as payload.
 */
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

/**
 * Action to dispatch when login fails.
 * 
 * @param {Object} error - The error message or object describing the failure reason.
 * @returns {Object} The action object with type "LOGIN_FAILURE" and the error data as payload.
 */
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
});
