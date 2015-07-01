/**
 * The LiveOak client used to communicate with other LiveOak resources.
 * Cannot be instantiated by the user, must be fetched from the Script's library.
 * @class
 */
function Client() {

  /**
   * Creates a new resource at the specified path
   * @param {String} path - the resource path
   * @param {liveoak.Resource} resource - the resource to create
   * @returns {liveoak.Resource} The newly created resource
   */
  function create(path, resource){};

  /**
   * Creates a new resource at the specified path
   * @param {String} path - the resource path
   * @param {liveoak.Resource} resource - the resource to create
   * @param {Map<String, Object>} parameters - the parameters to include
   * @returns {liveoak.Resource} The newly created resource
   */
  function create(path, resource, parameters){};

  /**
   * Reads the resource at the specified path
   * @param {String} path - the resource path
   * @returns {liveoak.Resource} The resource
   */
  function read(path){};

  /**
   * Reads the resource at the specified path
   * @param {String} path - the resource path
   * @param {Map<String, Object>} parameters - the parameters to include
   * @returns {liveoak.Resource} The resource
   */
  function read(path, resource, parameters){};

  /**
   * Updates a resource at the specified path
   * @param {String} path - the resource path
   * @param {liveoak.Resource} resource - the resource to update
   * @returns {liveoak.Resource} The updated resource
   */
  function update(path, resource){};

  /**
   * Updates a resource at the specified path
   * @param {String} path - the resource path
   * @param {liveoak.Resource} resource - the resource to update
   * @param {Map<String, Object>} parameters - the parameters to include
   * @returns {liveoak.Resource} The updated resource
   */
  function update(path, resource, parameters){};

}

/**
 * Deletes the resource at the specified path
 * @memberof Client
 * @name delete
 * @function
 * @param {String} path - the resource path
 * @param {Map<String, Object>} parameters - the parameters to include
 * @returns {liveoak.Resource} The deleted resource
 */

/**
 * Deletes the resource at the specified path
 * @memberof Client
 * @name delete
 * @function
 * @param {String} path - the resource path
 * @returns {liveoak.Resource} The deleted resource
 */
