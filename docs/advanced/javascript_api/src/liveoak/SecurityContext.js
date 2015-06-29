/**
 * The security context
 * @class
 */
function SecurityContext() {

  /**
   * If the user initiating the call is authenticated or not
   * @type {Boolean}
   */
  var authenticated;


  /**
   * The currently used realm
   * @type {String}
   */
  var realm;

  /**
   * The user's identifier
   * @type {String}
   */
  var subject;

  /**
   * The last time the user was verified
   * @type {Number}
   */
  var lastVerified;

  /**
   * The roles associated with the user
   * @type {String[]}
   */
  var roles;

  /**
   * The users token value
   * @type {String}
   */
  var token;

  /**
   * Checks if the user currently has the roles specified or not
   * @param {String} role - The role to check
   */
  function hasRole(role) {}

}
