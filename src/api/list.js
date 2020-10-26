import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL = "/api"
const Base_URL2 = "/api2"
//请求数据

//产品列表页面
//api/v1/category/goodslist?cat_id=1107
// https://x.dscmall.cn/api/catalog/list
export const getGoodsList = (params) => ajax(Base_URL2 + "/goodslist", params, "post")

//产品详情页
///api/v1/category/goodsdetail?goods_id=621
export const getGoodsDetail = (params) => ajax(Base_URL + "/goods/show", params, "post")
