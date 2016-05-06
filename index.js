/*
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular'
], function(angular) {

'use strict';

var module = angular.module('bedrock-angular-example', ['bedrock-idp']);

/* @ngInject */
module.run(function(config) {
  var overrides = config.data.angular.templates.overrides;
  overrides['bedrock-idp/components/settings/settings.html'] =
    'bedrock-angular-example/skin.html';
});

});
