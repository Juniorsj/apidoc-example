/**
 * @api {delete} /v1/users/:id Delete User
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiVersion 0.1.0
 *
 * @apiPermission admin, own user
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {json} Header-Example:
 * {
 *    "Authorization" : "Bearer eo330044oosllwooellel"
 * }
 * 
 * @apiSuccess (Success 204) {Integer} id Unique id of user.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 204 Not Content
 * {
 *    "id": 1,
 * }
 *
 * @apiError Unauthorized The resource owner or authorization server denied the request.
 * @apiErrorExample {json} Unauthorized:
 * HTTP/1.1 401 Unauthorized
 * {
 *    "error": 401,
 *    "description": "Error 401 UnAuthorized ",
 *    "url": "/v1/users/1"
 * }
 * 
 * @apiError NotFound The <code>id</code> of the User was not found.
 * @apiErrorExample {json} Unauthorized:
 * HTTP/1.1 404 Not Found
 * {
 *    "error": 404,
 *    "description": "User not found",
 * }
 *
 * @apiSampleRequest /v1/users/1
 */