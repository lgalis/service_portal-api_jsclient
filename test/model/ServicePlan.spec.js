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
    instance = new ServicePortalApi.ServicePlan();
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

  describe('ServicePlan', function() {
    it('should create an instance of ServicePlan', function() {
      // uncomment below and update the code to test ServicePlan
      //var instane = new ServicePortalApi.ServicePlan();
      //expect(instance).to.be.a(ServicePortalApi.ServicePlan);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ServicePortalApi.ServicePlan();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ServicePortalApi.ServicePlan();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ServicePortalApi.ServicePlan();
      //expect(instance).to.be();
    });

    it('should have the property createJsonSchema (base name: "create_json_schema")', function() {
      // uncomment below and update the code to test the property createJsonSchema
      //var instane = new ServicePortalApi.ServicePlan();
      //expect(instance).to.be();
    });

  });

}));
