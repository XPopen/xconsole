/**
 * 所有的前端静态路由在这里
 * @author jiangchangxiong
 */
import { APPLICATION_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const STATIC: AppRouteRecordRaw = {
  path: '/',
  component: APPLICATION_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  redirect: 'dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        locale: 'menu.dashboard',
        requiresAuth: true,
      },
    },
  ],
};

export default STATIC;
