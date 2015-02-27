'use strict';

jest.dontMock('../../src/components/hello');

var React = require('react/addons');
var Hello = require('../../src/components/hello');
var TestUtils = React.addons.TestUtils;

describe('Hello', () => {
  var ctx = this;

  describe('when no name provided', () => {
    beforeEach(() => {
      ctx.hello = TestUtils.renderIntoDocument(
        /* jshint ignore:start */
        <Hello/>
        /* jshint ignore:end */
      );
    });

    describe('render', () => {
      it('renders a Hello component', () => {
        var hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello).toBeTruthy();
      });

      it('renders using default name', () => {
        var hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello.getDOMNode().textContent).toEqual('Hello World');
      });
    });
  });

  describe('when name provided', () => {
    beforeEach(() => {
      ctx.hello = TestUtils.renderIntoDocument(
        /* jshint ignore:start */
        <Hello name="Kitty"/>
        /* jshint ignore:end */
      );
    });

    describe('render', () => {
      it('renders using provided name', () => {
        var hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello.getDOMNode().textContent).toEqual('Hello Kitty');
      });
    });
  });
});
