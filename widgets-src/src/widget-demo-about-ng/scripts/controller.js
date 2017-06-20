/**
 * @module widget-demo-about-ng
 * @name AboutController
 *
 * @description
 * About
 */

export default function AboutController(bus, hooks, widget, $scope) {
  const $ctrl = this;

  // Check if the Contact widget feature is available, if this is the case we process triggers for its services
  const contactFeature = cxp.mobile.plugins && cxp.mobile.plugins.ContactPlugin;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name AboutController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    if (contactFeature) {

      // Enable the call button
      $ctrl.callUsEnabled = true;

      // Check if the app is able to send an email via a widget feature
      let isEmailAvailableSuccessCallback = function (data) {
        if (data.result) {
          $ctrl.emailUsEnabled = true;
        } else {
          $ctrl.emailUsEnabled = false;
        }

        $scope.$apply();
      };

      let isEmailAvailableErrorCallback = function (data) {
        $ctrl.emailUsEnabled = false;
      };

      contactFeature.isEmailAvailable(
        isEmailAvailableSuccessCallback,
        isEmailAvailableErrorCallback
      );
    }

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });
  };

  // Define the method that is triggered when the user clicks the email button
  const emailUs = () => {

    // Send email
    contactFeature.sendEmail(null, null, 'support@backbase.com', 'Support request from the CXP Mobile app', 'Dear Backbase,\n\n');
  };

  // Define the method that is triggered when the user clicks the call button
  const callUs = () => {

    // Call phone number
    contactFeature.callPhoneNumber(null, null, '0031204658888');
  };

  // Define the method that is triggered when the user clicks on the website button
  const visitWebsite = () => {
    // Redirect the user to the website
    window.location = 'http://www.backbase.com';
  };

  Object.assign($ctrl, {
    $onInit,
    emailUs,
    callUs,
    visitWebsite,

  });
}
