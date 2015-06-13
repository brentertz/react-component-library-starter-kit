'use strict';

jest.dontMock('../Hello');

const React = require('react/addons');
const Hello = require('../Hello');
const TestUtils = React.addons.TestUtils;

describe('Hello', () => {
  const ctx = {};

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
        const hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello).toBeTruthy();
      });

      it('renders using default name', () => {
        const hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
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
        const hello = TestUtils.findRenderedComponentWithType(ctx.hello, Hello);
        expect(hello.getDOMNode().textContent).toEqual('Hello Kitty');
      });
    });
  });
});
