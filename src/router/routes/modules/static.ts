/**
 * 所有的前端静态路由在这里
 * @author jiangchangxiong
 */
import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const STATIC: AppRouteRecordRaw = {
  path: '/console',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
  },
  redirect: 'workplace',
  children: [
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
      },
    },
  ],
};

export default STATIC;
