
import React from 'react'
import expect from 'expect'
import Home from '../react-client/src/components/Home'

import { shallow, mount,configure } from 'enzyme';
var chai=require('chai');
var expect = chai.expect;
var assert=require('chai').assert;
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme from 'enzyme';

import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });




it('should be class component ',function(){
	expect(React.Component.isPrototypeOf(Home)).to.be.true;
})