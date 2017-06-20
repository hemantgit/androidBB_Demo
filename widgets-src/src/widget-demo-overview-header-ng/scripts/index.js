/**
 * @module widget-demo-overview-header-ng
 *
 * @description
 * Overview header
 */
import angular from 'vendor-bb-angular';

import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';



import Controller from './controller';

import extendHooks from 'lib-bb-widget-extension-ng';
import defaultHooks from './default-hooks';

const moduleKey = 'widget-demo-overview-header-ng';
const hooksKey = `${moduleKey}:hooks`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    eventBusModuleKey,

  ])

  .factory(hooksKey, extendHooks(defaultHooks))

  .controller('OverviewHeaderController', [
    // dependencies to inject
    eventBusKey,
    hooksKey,
    widgetKey,
    /* into */
    Controller,
  ])

  .run([eventBusKey, widgetKey, (bus, widget) => {
  }])

  .name;
