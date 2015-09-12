'use strict';

jest.dontMock('../Hello');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const TestUtils = require('react-addons-test-utils');
const Hello = require('../Hello');

describe('Hello', () => {
  let hello;

  function renderHello(props) {
    const shallowRenderer = TestUtils.createRenderer();
    const jsx = (
      <Hello { ...props } />
    );

    //console.log(ReactDOMServer.renderToStaticMarkup(jsx));
    shallowRenderer.render(jsx);
    return shallowRenderer.getRenderOutput();
  }

  describe('when no name provided', () => {
    beforeEach(() => {
      hello = renderHello();
    });

    describe('render', () => {
      it('renders an H1 element', () => {
        expect(hello.type).toEqual('h1');
      });

      it('renders using default name', () => {
        expect(hello.props.children.join('')).toEqual('Hello World');
      });
    });
  });

  describe('when name provided', () => {
    beforeEach(() => {
      hello = renderHello({ name: 'Kitty' });
    });

    describe('render', () => {
      it('renders using provided name', () => {
        expect(hello.props.children.join('')).toEqual('Hello Kitty');
      });
    });
  });
});
