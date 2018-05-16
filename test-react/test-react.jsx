var App = require('../react-client/src/components/Home.jsx')
 var chai = require('chai')
 var expect = chai.expect;
 var assert = require('chai').assert
  import React from 'react';
  import ReactTestUtils from 'react-dom/test-utils'; 
  import Home from '../react-client/src/components/Home';
 import ShallowRenderer from 'react-test-renderer/shallow';
 import sinon from 'sinon';
 import { configure } from 'enzyme';
 import { shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-15';
 configure({ adapter: new Adapter() });




 describe('Home', function() {
it('should be class component ',function(){
	expect(React.Component.isPrototypeOf(Home)).to.be.true;
})
})