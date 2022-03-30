import 'ant-design-vue/dist/antd.less';

import {
  Button,
  Switch,
  Menu,
  MenuItem,
  Cascader,
  Avatar,
  Tabs,
  Form,
  Input,
  message,
  Breadcrumb,
  Card,
  Tag,
  List,
} from 'ant-design-vue'

const Elements = {
  Button,
  Switch,
  Menu,
  MenuItem,
  Cascader,
  Avatar,
  Tabs,
  Form,
  Input,
  message,
  Breadcrumb,
  Card,
  Tag,
  List,
}

const install = function(app) {
  for (const i in Elements){
    app.use(Elements[i])
  }
}

export {
  install
}
