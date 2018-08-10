const url = require('url');
const path = require('path');
const axios = require('axios');
const fs = require('fs-extra')
const sourceMap = require('source-map');
const SourceMapConsumer = sourceMap.SourceMapConsumer;
// const host = 'http://yun.tuia.cn';
const host = 'http://yun.dui88.com'
const prefix = '/dbsm'; // 选填  路径前缀
const postfix = '';// 选填  路径后缀
/**
 * @desc 转化成ma地址
 * @param {string} link
 * @returns {string} url
 */
function sourceMapUrl(link) {
  const parseUrl = url.parse(link);
  const {pathname} = parseUrl;
  const pathDir = path.dirname(pathname);
  const baseName = `${path.basename(pathname)}.map`;
  const newhost = host + path.join(prefix, pathDir, postfix, baseName);
  console.log(url.parse(newhost).href);
  return url.parse(newhost).href;
}

// 解析map
const sourceMapSearch = async(realUrl, lineNumber, columnNumber) => {
  if(!realUrl) {
    return {};
  }
  const url = sourceMapUrl(realUrl);
  // console.log(url);
  // try{
    const res = await axios.get(url);
    // const res = fs.readJSONSync('./dbsm/index.js.map')
    // const res = fs.readJSONSync('../sourceMapDemo/bak/hello-js-without-babel-loader.map')
    const whatever = await SourceMapConsumer.with(res.data, null, consumer => {
      return consumer.originalPositionFor({
        line: lineNumber,
        column: columnNumber
      });
    });
    console.log(whatever);
    return whatever;
  // }catch(e) {
  //   return {};
  // }
}

const realUrl = 'http://yun.tuiapple.com/h5-mami/activity/turnCircle/4.0/index_201807251509.js?t=20180514';

// module.exports = sourceMapSearch;

let resu = sourceMapSearch(realUrl, 1, 10);
console.log('----->', resu);

setTimeout(function() {console.log(resu)}, 1000)
// yun.dui88.com/dbsm/h5-mami/activity/turnCircle/4.0/index_201807251509.js.map
//yun.tuia.cn/dbsm/h5-mami/activity/turnCircle/4.0/index_201807251509.js.map