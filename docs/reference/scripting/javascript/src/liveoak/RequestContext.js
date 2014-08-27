/**
 * A Request Context
 * @class
 */
function RequestContext() {
  /** 
   *  The request's identifier
   *  @type {SecurityContext}
   */
  var securityContext;

  /**
   * The attributes associated with the request.
   * @type {Object<String,Object>}
   */
  var attributes; 

  /**
   * The parameters associated with the request.
   * This can contain such things as 'offset', 'limit', 'sort', 'fields', 'q' as well any
   * other parameters passed in the request.
   * @type {Object<String,Object>}
   */
  var parameters;

}
