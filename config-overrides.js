//Ant Design Mobile 框架 在react中App项目的配置
const { override, fixBabelImports } = require('customize-cra')
//让组件能按需导入Ant Design Mobile 中的插件 的配置
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
