let assert = require('chai').assert,
    path = require('path'),
    jsdom = require('mocha-jsdom');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Rectangle from './Rectangle';

describe('<Rectangle>', () => {
    jsdom();
    it('Should show content', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Rectangle></Rectangle>
        );
        assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'h1'));
    });
});
