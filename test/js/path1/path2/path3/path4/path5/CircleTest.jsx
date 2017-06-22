let assert = require('chai').assert,
    path = require('path'),
    jsdom = require('mocha-jsdom');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Circle from './Circle';

describe('<Circle>', () => {
    jsdom();
    it('Should show content', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Circle></Circle>
        );
        assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'h1'));
    });
});
