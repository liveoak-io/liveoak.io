/**
 * A Resource Response
 * @class
 */
function Response() {

  /**
   * The resource being returned
   * @type {liveoak.Resource}
   */
  var resource;

  /**
   * The request which triggered this response
   * @type {Request}
   */
  var request;

  /**
   * The type of Response
   * @type {Types}
   */
  var type;

  /**
   * @readonly
   * @enum {string}
   */
  Types = { CREATED: 'created', READ: 'read', UPDATED: 'updated', DELETED: 'deleted', ERROR: 'error'}
}
