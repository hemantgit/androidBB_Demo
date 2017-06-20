/**
 * @module widget-demo-overview-header-ng
 * @name OverviewHeaderController
 *
 * @description
 * Overview header
 */

export default function OverviewHeaderController(bus, hooks, widget) {
  const $ctrl = this;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name OverviewHeaderController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
      bus.publish('bb.item.loaded', {
        id: widget.getId(),
      });
  };

  Object.assign($ctrl, {
    $onInit,

  });
}
