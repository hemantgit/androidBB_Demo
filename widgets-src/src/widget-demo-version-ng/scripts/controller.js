/**
 * @module widget-demo-version-ng
 * @name VersionController
 *
 * @description
 * Version
 */

export default function VersionController(bus, hooks, widget) {
  const $ctrl = this;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name VersionController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    bus.subscribe('versionClicked', (payload) => {
      $ctrl.version = payload;
    });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });
  };

  Object.assign($ctrl, {
    $onInit,
  });
}
