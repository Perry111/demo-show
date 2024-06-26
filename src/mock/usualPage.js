import Mock from "mockjs";
import { findObjectById } from "../utils/handleObjMethods";

// get请求从config.url获取参数，post从config.body中获取参数
function getParamObj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

let List = [];
const count = 200;
const thisYear = new Date().getFullYear();
let INDEX = 0;

for (let i = 0; i < count; i++) {
  // Random.date()
  let birth = Mock.Random.date();
  INDEX = i + 1;
  List.push(
    Mock.mock({
      index: INDEX,
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      // address: Mock.mock("@county(true)"),
      address: Mock.Random.county(true),
      // "age|18-60": 1,
      birth: birth,
      age: thisYear - birth.slice(0, 4),
      identityCard: Mock.Random.id(),
      sex: Mock.Random.integer(0, 1),
      status: Mock.Random.integer(0, 1),
      "phoneNum|1": /^1[3456789]\d{9}$/,
      // age: 2022-Number('@date("yyyy")'),
      // birth: '@date',
    })
  );
}

export default {
  // 获取表格总体数据
  getUserList(config) {
    console.log("getUserList");
    let queryParams = getParamObj(config.url);
    return {
      total: List.length,
      rows: List.slice(
        queryParams.pageSize * (queryParams.pageNum - 1),
        queryParams.pageSize * queryParams.pageNum
      ),
      code: 200,
      msg: "",
    };
  },
  // 根据ID获取单挑数据的详细信息
  getUserDetailsById(config) {
    console.log("getUserDetailsById");
    let id = config.url.split("/").pop();
    return {
      row: findObjectById(List, id),
      code: 200,
      msg: "",
    };
  },
  // 根据ID修改用户状态
  updateUserStatusById(config) {
    console.log("updateUserStatusById");
    let queryParams = JSON.parse(config.body);
    queryParams.id.forEach((id) => {
      findObjectById(List, id).status = queryParams.status;
    });
    return {
      code: 200,
      msg: "",
    };
  },
  // 新增用户信息
  userAdd(config) {
    console.log("userAdd");
    INDEX++;
    let newUser = JSON.parse(config.body);
    newUser.age = thisYear - newUser.birth.slice(0, 4);
    newUser.id = Mock.Random.guid();
    newUser.index = INDEX;
    List.unshift(newUser);
    return {
      code: 200,
      msg: "",
    };
  },
  // 修改用户信息
  userEdit(config) {
    console.log("userEdit");
    let user = JSON.parse(config.body);
    user.age = thisYear - user.birth.slice(0, 4);
    Object.assign(findObjectById(List, user.id), user);
    return {
      code: 200,
      msg: "",
    };
  },
  // 根据ID删除用户
  userDeleteById(config) {
    console.log("userDeleteById");
    console.log(config);
    let ids = config.url.split("/").pop().split(",");
    List = List.filter((item) => !ids.includes(item.id));
    // 另一种删除思路，不适合用在此处
    // let index = this.assetTableData.indexOf(row);
    // if (index !== -1) {
    //   this.assetTableData.splice(index, 1);
    // }
    return {
      code: 200,
      msg: "",
    };
  },
};
