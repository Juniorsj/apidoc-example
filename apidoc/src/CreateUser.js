/**
 * @api {post} /v1/users Create User
 * @apiName CreateUser
 * @apiGroup Users
 * @apiVersion 0.1.0
 *
 * @apiPermission none
 *
 * @apiParam {String} firstname Fistname of user.
 * @apiParam {String} lastname Lastname of user.
 * @apiParam {Integer} age Age of user.
 * @apiParam {Date} birthday Birth day date.
 * @apiParamExample {json} Request-Example:
 * {
 *    "firstname": "foo",
 *    "lastname": "bar",
 *    "age": 18,
 *    "birthday": "2010-03-11"
 * }
 *
 * @apiSuccess (Success 201) {Integer} id Unique id of user.
 * @apiSuccess (Success 201) {String} firstname Fistname of user.
 * @apiSuccess (Success 201) {String} lastname Lastname of user.
 * @apiSuccess (Success 201) {Integer} age Age of user.
 * @apiSuccess (Success 201) {DateTime} birthday Birth day date.
 * @apiSuccess (Success 201) {DateTime} createat Creat date of user data.
 * @apiSuccess (Success 201) {DateTime} updateat Update date of user data.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 Created
 * {
 *    "id": 1,
 *    "firstname": "foo",
 *    "lastname": "bar",
 *    "age": 18,
 *    "birthday": "2010-03-11 00:00:00"
 *    "createat": "2017-07-31 00:00:00",
 *    "updateat": "2017-07-31 00:00:00",
 * }
 *
 * @apiError UnprocessableEntity Data is unable to be processed.
 * @apiErrorExample {json} UnprocessableEntity:
 * HTTP/1.1 422 UnprocessableEntity
 * {
 *    "param": "firstname",
 *    "msg": "firstname is required."
 * }
 */