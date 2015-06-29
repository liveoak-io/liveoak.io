
/**
 * Represents a LiveOak Resource
 * @class
 * @memberof liveoak
 * @param {String} [id] - The id of the resource
 */
function Resource(id) {

  /**
   * The resource's identifier
   * @type {String}
   */
  var id;

  /**
   * The resource's URI
   * @type {String}
   */
  var uri;

  /**
   * The resource's properties
   * @type {Object.<String,Object>}
   */
  var properties;

  /**
   * The list of child resources.
   * @type {liveoak.Resource[]}
   */
  var members;

}
