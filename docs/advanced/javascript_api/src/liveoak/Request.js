/**
 * A Request
 * @class
 */
function Request() {
  /**
   *  The request's identifier
   *  @type {string}
   */
  var id;

  /**
   * The request's path
   * @type {string}
   */
  var path;

  /**
   * The request type. Can be 'create', 'read', 'update' or 'delete'
   * @type {Types}
   */
  var type;

  /**
   * The resource representation for this request.
   * @type {liveoak.Resource}
   */
  var resource;

  /**
   * The request context
   * @type {RequestContext}
   */
  var context;

  /**
   * @readonly
   * @enum {string}
   */
  Types = { CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete'}
}
