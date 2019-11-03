export const menuData = [
  {
    id: 1, //id唯一ID标识符
    name: '系统设置',
    path: '/system_setting',
    icon: 'el-icon-menu',
    component: 'Layout',
    children: [
      {
        id: 2, //id唯一ID标识符
        name: '用户管理',
        path: 'user',
        icon: 'el-icon-menu',
        component: './SystemSetting/User/index.vue',
        children: [],
      },
      {
        id: 3, //id唯一ID标识符
        name: '菜单管理',
        path: 'menu',
        icon: 'el-icon-menu',
        component: './SystemSetting/Menu/index.vue',
        children: [],
      },
    ],
  },
]