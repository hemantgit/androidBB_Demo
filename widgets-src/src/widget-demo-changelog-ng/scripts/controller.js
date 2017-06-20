/**
 * @module widget-demo-changelog-ng
 * @name ChangelogController
 *
 * @description
 * Changelog
 */

export default function ChangelogController(bus, hooks, widget, $http) {
  const $ctrl = this;
  const storage = cxp.mobile.plugins.InMemoryStorage;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name ChangelogController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    // Workaround for desktop environment - $(contextRoot) will not be replace automatically
    var source = widget.getPreference('dataSource').replace("$(contextRoot)", "");

    // Get content from a JSON file
    $http.get(window.b$.portal.config.resourceRoot + source)
      .success(function (data) {
        $ctrl.changelog = data;
      });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });

    // This widget needs to request the version widget to be preloaded using Preload on Demand
    bus.publish('changelog-loaded');
  };

  // Attach version tapped event handler
  const versionClicked = (versionIndex) => {

    // Store the requested version so the version widget can pick it up (needed when the version widget is not preloaded)
    //widget.preferences.setItem('versionClicked', versionIndex);

    if (storage) {
      storage.setItem(null, null, 'versionClicked', JSON.stringify($ctrl.changelog[versionIndex]));
    }

    // Inform the native app template that it should show the version widget (via the behaviour mapping), and potentially inform the preloaded version widget that it should show the particular selected version
    bus.publish('versionClicked', {
      versionIndex: versionIndex
    });
  };

  Object.assign($ctrl, {
    $onInit,
    versionClicked,

  });
}
