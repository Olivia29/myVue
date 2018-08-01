import url from './path'
import { http } from './axios'

// 获取banner图地址
function getBanner(data) {
    return http(url.getBanner, data)
}
// 首页精选推荐
function recomCourse(data) {
    return http(url.recomCourse, data)
}
// 全部医联体课程
function allCourseList(address, data) {
    return http(url.allCourseList, data, 'GET')
}
// 换一换
function courseChange(data) {
    return http(url.courseChange, data)
}
// 课程一次未展示完全，分页展示
function courseMore(data) {
    return http(url.courseMore, data)
}
// 用户搜索历史
function searchHistory(data) {
    return http(url.searchHistory, data)
}
// 清空用户搜索历史
function searchDelete(data) {
    return http(url.searchDelete, data,'GET')
}
// 用户搜索结果
function searchList(data) {
    return http(url.searchList, data,'GET')
}
// 课程详情展示
function courseDetail(data) {
    return http(url.courseDetail, data,'GET')
}
// 课程学习
function courseStudy(data) {
    return http(url.courseStudy, data)
}
// 专家自己的课程
function courseExport(data) {
    return http(url.courseExport, data, 'GET')
}
// 专家课程-更多
function courseExportMore(data) {
    return http(url.courseExportMore, data, 'GET')
}
// 我的课程
function myCourse(data) {
    return http(url.myCourse, data, '1', 'GET')
}
// 我的课程-更多
function myCourseMore(data) {
    return http(url.myCourseMore, data, 'GET')
}
// 我的订单
function myOrder(data) {
    return http(url.myOrder, data, 'GET')
}
// 是否可以评价课程
function evaluationClass(data) {
    return http(url.evaluationClass, data, 'GET')
}
// 课程评价是否超过3次
function evaluationNum(data) {
    return http(url.evaluationNum, data,  'GET')
}
// 课程评价
function evaluate(data) {
    return http(url.evaluate, data,'POST')
}
//课程评价列表
function evaluateList(data) {
    return http(url.evaluateList, data)
}

//课程评价列表-更多
function evaluateListMore(data) {
    return http(url.evaluateListMore, data, '1', 'GET')
}

//设置课程时长
function setCourseMediaLength(data) {
    return http(url.setCourseMediaLength, data, '1', 'GET')
}

//设置已学习时长
function studyLength(data) {
    return http(url.studyLength, data, '1', 'GET')
}
export {
    getBanner,
    recomCourse,
    allCourseList,
    courseChange,
    courseMore,
    searchHistory,
    searchDelete,
    searchList,
    courseDetail,
    courseStudy,
    courseExport,
    courseExportMore,
    myCourse,
    myCourseMore,
    myOrder,
    evaluationClass,
    evaluationNum,
    evaluate,
    evaluateList,
    evaluateListMore,
    setCourseMediaLength,
    studyLength
}