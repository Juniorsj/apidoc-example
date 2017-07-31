/**
 * @pi {METHOD} ชื่อroute ชื่อตาม file เช่น Create User
 * @apiName ชื่อตาม file แต่ติดกันเป็น camelCase เช่น CreateUser //ใช้สำหรับบอกว่าapi ไหนเป็นอันเดียวกัน ชื่อต้อง unique ใช้ในการ compare ระหว่าง version ด้วย
 * @apiGroup ชื่อ group ถ้า service มี group เดียวก็ใส่ชื่อ service เลย เช่น Company, User
 * @apiVersion 
 * 
 * @apiPermission ถ้าไม่มีใส่ none
 * @apiHeader   // ถ้าไม่มีไม่ต้องใส่ tag นี้
 * @apiHeaderExample {json} Header-Example:
 * {
 *   ตัวอย่าง
 * }
 * 
 * @apiParam {type ขึ้นต้นด้วยตัวใหญ่} ชื่อparameter คำอธิบายของparameter
 * @apiParamExample {json} Request-Example:
 * {
 *    ตัวอย่าง
 * }
 * 
 * @apiSuccess (Success ตามด้วย status code) {type ขึ้นต้นด้วยตัวใหญ่} ชื่อfile คำอธิบาย
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 statuscode ชื่อstatus      //เช่น 200 Ok, 201 Created
 * {
 *    ตัวอย่าง
 * }
 * 
 * @apiError ชื่อerror คำอธิบายerror
 * @apiErrorExample {json} ชื่อerror:
 * HTTP/1.1 statuscode ชื่อerror
 * {
 *    ตัวอย่าง
 * }
 * 
 * 
 * 
 * 200 OK
 * 201 Created
 * 204 Not Content
 * 400 Bad Request
 * 401 Unauthorized
 * 403 Forbidden
 * 404 Not Found
 * 422 UnprocessableEntity
 * 500 Internal Server Error
 * 502 Bad Gateway
 * 
 */
