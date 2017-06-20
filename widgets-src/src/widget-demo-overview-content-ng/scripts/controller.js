/**
 * @module widget-demo-overview-content-ng
 * @name OverviewContentController
 *
 * @description
 * Overview content
 */

export default function OverviewContentController(bus, hooks, widget, $http) {
  const $ctrl = this;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name OverviewContentController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    // Workaround for desktop environment - $(contextRoot) will not be replace automatically
    let source = widget.getPreference('dataSource').replace("$(contextRoot)", "");

    // Get content from a JSON file
    $http.get(window.b$.portal.config.resourceRoot + source).success(function (data) {
      $ctrl.features = data;
    });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });
  };

  Object.assign($ctrl, {
    $onInit,

  });
}
