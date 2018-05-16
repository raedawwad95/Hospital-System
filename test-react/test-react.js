
 var chai = require('chai')
 var expect = chai.expect;
 var assert = require('chai').assert
  import React from 'react';
  import ReactTestUtils from 'react-dom/test-utils'; 
  import Home from '../react-client/src/components/Home';
  import Home2 from '../react-client/src/components/Home2';
  import LoginLabTech from '../react-client/src/components/LabsTechnciansComponents/LoginLabTech';
  import AddResult from '../react-client/src/components/LabsComponent/AddResults';
  import DoctorHome from '../react-client/src/components/DoctorComponent/DoctorHome';
  import Doctor from '../react-client/src/components/DoctorComponent/DoctorMain';
  import DoctorNavbar from '../react-client/src/components/DoctorComponent/DoctorNavbar';
  import LoginDoctor from '../react-client/src/components/DoctorComponent/LoginDoctor';
  import PatientDataAddRecord from '../react-client/src/components/DoctorComponent/PatientDataAddRecord';

  import AddDepartment from '../react-client/src/components/adminComponents/addDept';
  import AddDoctor from '../react-client/src/components/adminComponents/AddDoctor';
  import AddDocToComponent from '../react-client/src/components/adminComponents/addDoctortoComponent';
  import addDoctorToDepartment from '../react-client/src/components/adminComponents/addDoctorToDepartment';
  import AddLabTechncians from '../react-client/src/components/adminComponents/AddLabTechncians';
  import AdminHome from '../react-client/src/components/adminComponents/AdminHome';
  import Admin from '../react-client/src/components/adminComponents/adminMain';
  import AdminNavbar from '../react-client/src/components/adminComponents/AdminNavbar';
  import retriveAllDepts from '../react-client/src/components/adminComponents/retriveAllDepts';
  import retriveAllDoctor from '../react-client/src/components/adminComponents/retriveAllDoctor';
  import retriveLabResults from '../react-client/src/components/adminComponents/retriveLabResults';
  import retriveLabTech from '../react-client/src/components/adminComponents/retriveLabTech';
  import retrivePatient from '../react-client/src/components/adminComponents/retrivePatient';
 



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
});




describe("Home2",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Home2)).to.be.true;
	})
});




describe("LoginLabTech",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LoginLabTech)).to.be.true;
	})
});



describe("AddResult",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddResult)).to.be.true;
	})
});


describe("DoctorHome",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(DoctorHome)).to.be.true;
	})
});


describe("Doctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Doctor)).to.be.true;
	})
});


describe("DoctorNavbar",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(DoctorNavbar)).to.be.true;
	})
});




describe("LoginDoctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LoginDoctor)).to.be.true;
	})
});



describe("PatientDataAddRecord",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(PatientDataAddRecord)).to.be.true;
	})
});