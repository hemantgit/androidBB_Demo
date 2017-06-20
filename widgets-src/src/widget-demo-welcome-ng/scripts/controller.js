/**
 * @module widget-demo-welcome-ng
 * @name WelcomeController
 *
 * @description
 * Welcome
 */

export default function WelcomeController(bus, hooks, widget) {
  const $ctrl = this;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name WelcomeController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
      bus.publish('bb.item.loaded', {
        id: widget.getId(),
      });

      // Initiate preloading on demand for other pages
      bus.publish('home-loaded');
  };

  // Define the function that is triggered when the "Get started" button is clicked
  const getStarted = () => {
    // Send a pub/sub event to the application that will use this event by checking if there's a matching page in the behaviour map
    bus.publish('getStartedClicked');
  };

  Object.assign($ctrl, {
    $onInit,
    getStarted,

  });
}
