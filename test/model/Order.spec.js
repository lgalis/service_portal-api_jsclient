/**
 * Service Portal API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ServicePortalApi);
  }
}(this, function(expect, ServicePortalApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ServicePortalApi.Order();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be.a(ServicePortalApi.Order);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderedAt (base name: "ordered_at")', function() {
      // uncomment below and update the code to test the property orderedAt
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property completedAt (base name: "completed_at")', function() {
      // uncomment below and update the code to test the property completedAt
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderItems (base name: "order_items")', function() {
      // uncomment below and update the code to test the property orderItems
      //var instane = new ServicePortalApi.Order();
      //expect(instance).to.be();
    });

  });

}));
