
import { get, post } from './http'
var url = 'api/user'
//传入后台的pageNum和pageSize
     url = url + "pageNum=" + 1 + '&pageSize=' + 10
export const apiAddress = p => get('api/user/userList', p);
