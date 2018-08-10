const host = 'http://yun.tuia.cn';
const prefix = '/dbsm'; // 选填  路径前缀
const postfix = '';// 选填  路径后缀

const url = require('url');
const path = require('path');
let tourl = 'http://yun.guavapie.cn/h5-mami/activity/wallet/3.0/index_201807131643.js?t=20180514'
sourceMapUrl(url.parse(tourl));
function sourceMapUrl(link) {
    const parseUrl = url.parse(link);
    const {pathname} = parseUrl;
    const pathDir = path.dirname(pathname);
    const baseName = `${path.basename(pathname)}.map`;
    const newhost = host + path.join(prefix, pathDir, postfix, baseName);
    console.log(url.parse(newhost).href);
    return url.parse(newhost).href;
  }
// console.log();