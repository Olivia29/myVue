// 测试环境
// let upload = 'http://testxuekeadmin.cinyi.com'
// let base_wx = 'http://testgateway.cinyi.com'
// // let base = 'http://k8stestserverapi.cinyi.com'
// let base = 'http://testserverapi.cinyi.com'

// 本地环境：
var base = 'http://172.16.201.70'
// 测试环境：
// var base = 'http://testjiaoyu.cinyi.com'
// 生产环境：
// var base = 'http://xkjy.xinyixy.com'

let serverUrl = {
   getBanner:base + '/api/v1/banner',//获取banner图地址
   recomCourse: base + '/api/v1/course', //首页精选推荐
   allCourseList: base + '/api/v1/course/list', //全部医联体课程
   courseChange: base + '/api/v1/course/change', //换一换
   courseMore: base + '/api/v1/course/more', //课程一次未展示完全，分页展示
   searchHistory: base + '/api/v1/search/history', //用户搜索历史
   searchDelete: base +'/api/v1/search/delete',// 清空用户搜索历史
   searchList: base + '/api/v1/search/list', //用户搜索结果
   courseDetail: base +'/api/v1/course/{id}',//课程详情展示 
   courseStudy: base + '/api/v1/course/study/{id}',//课程学习
   courseExport: base + '/api/v1/course/expert ',//专家自己的课程
   courseExportMore: base + '/api/v1/course/expert/more',//专家课程-更多
   myCourse: base + '/api/v1/course/mylist/{uid}',//我的课程
   myCourseMore : base + '/api/v1/course/mylist/{uid}/more',//我的课程-更多
   myOrder: base + '/api/v1/course/order/{uid}',//我的订单 
   evaluationClass: base + '/api/v1/course/{courseId}/evaluationClass/{uid}',//是否可以评价课程
   evaluationNum: base + '/api/v1/course/{courseId}/evaluate/{uid}',//课程评价是否超过3次
   evaluate: base + '/api/v1/course/{courseId}/evaluate/{uid}',//课程评价
   evaluateList: base + '/api/v1/course/{courseId}/evaluate/list',//课程评价列表
   evaluateListMore: base + '/api/v1/course/{courseId}/evaluate/list/more',//课程评价列表-更多
   setCourseMediaLength: base + '/api/v1/course/setCourseMediaLength/{courseId}',//设置课程时长
   studyLength: base + '/api/v1/course/{courseId}/studyLength/{uid}',//设置已学习时长
}

export default serverUrl