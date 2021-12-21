import 'ant-design-vue/dist/antd.less';

import {
  Button,
  Switch,
  Menu,
  MenuItem,
  Cascader
} from 'ant-design-vue'

export {
  install
}

const install = function(app) {
  for (const i in Elements){
    app.use(Elements[i])
  }
}

const Elements = {
  Button,
  Switch,
  Menu,
  MenuItem,
  Cascader
}