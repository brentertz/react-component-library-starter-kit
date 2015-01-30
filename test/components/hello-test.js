'use strict';

jest.dontMock('../../src/components/hello');

var React = require('react/addons');
var Hello = require('../../src/components/hello');
var TestUtils = React.addons.TestUtils;

describe('Hello', function() {
  var ctx = this;

  describe('when no name provided', function() {
    beforeEach(function() {
      ctx.hello = TestUtils.renderIntoDocument(
        /* jshint ignore:start */
        <Hello/>
        /* jshint ignore:end */
      );
    });

    describe('render', function() {
      it('renders a Hello component', function() {
        var hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello).toBeTruthy();
      });

      it('renders using default name', function() {
        var hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello.getDOMNode().textContent).toEqual('Hello World');
      });
    });
  });

  describe('when name provided', function() {
    beforeEach(function() {
      ctx.hello = TestUtils.renderIntoDocument(
        /* jshint ignore:start */
        <Hello name="Kitty"/>
        /* jshint ignore:end */
      );
    });

    describe('render', function() {
      it('renders using provided name', function() {
        var hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello.getDOMNode().textContent).toEqual('Hello Kitty');
      });
    });
  });
});
