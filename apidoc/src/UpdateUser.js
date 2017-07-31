/**
 * @api {put} /v1/users/:id Update User
 * @apiName UpdateUser
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
 * @apiParam {String} firstname Fistname of user.
 * @apiParam {String} lastname Lastname of user.
 * @apiParam {Integer} age Age of user.
 * @apiParam {Date} birthday Birth day date.
 * @apiParamExample {json} Request-Example:
 * {
 *    "firstname": "foo1",
 *    "lastname": "bar1",
 * }
 * 
 * @apiSuccess (Success 200) {Integer} id Unique id of user.
 * @apiSuccess (Success 200) {String} firstname Fistname of user.
 * @apiSuccess (Success 200) {String} lastname Lastname of user.
 * @apiSuccess (Success 200) {Integer} age Age of user.
 * @apiSuccess (Success 200) {DateTime} birthday Birth day date.
 * @apiSuccess (Success 200) {DateTime} createat Creat date of user data.
 * @apiSuccess (Success 200) {DateTime} updateat Update date of user data.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *    "id": 1,
 *    "firstname": "foo1",
 *    "lastname": "bar1",
 *    "age": 18,
 *    "birthday": "2010-03-11 00:00:00"
 *    "createat": "2017-07-31 00:00:00",
 *    "updateat": "2017-08-01 00:00:00",
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
 * @apiError UnprocessableEntity Data is unable to be processed.
 * @apiErrorExample {json} UnprocessableEntity:
 * HTTP/1.1 422 UnprocessableEntity
 * {
 *    "param": "firstname",
 *    "msg": "firstname is required."
 * }
 * 
 * @apiError NotFound The <code>id</code> of the User was not found.
 * @apiErrorExample {json} Unauthorized:
 * HTTP/1.1 404 Not Found
 * {
 *    "error": 404,
 *    "description": "User not found",
 * }
 */
