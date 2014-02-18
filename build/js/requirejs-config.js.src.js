// 为requirejs 模块名做全局配置
// 此处配置与打包配置无关（官方解释）
// 打包配置，需要重写，写在了gruntfile.js中
// 请保持两处命名一致
require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'libs/jquery-1.8.2',
        'a': 'utils/a',
        'b': 'utils/b',
        'c': 'utils/c',
        'd': 'utils/d',
        'e': 'utils/e',
        'de': 'utils/de',
        'test1':'utils/test1',
        'test2':'utils/test2'
    }
});
// 非AMD模块配置
requirejs.config({
    baseUrl: 'js/',
    shim: {
    }
});