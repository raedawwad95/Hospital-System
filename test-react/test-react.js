var chai = require('chai')
var expect = chai.expect;
var assert = require('chai').assert
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import LoginLabTech from '../react-client/src/components/LabsTechnciansComponents/LoginLabTech';
import AddLabResult from '../react-client/src/components/LabsTechnciansComponents/AddLabResult';
import LabHome from '../react-client/src/components/LabsTechnciansComponents/LabHome';
import Labs from '../react-client/src/components/LabsTechnciansComponents/LabsMain';
import LabsNavbar from '../react-client/src/components/LabsTechnciansComponents/LabsNavbar';
import UpdateLabTechncians from '../react-client/src/components/LabsTechnciansComponents/UpdateLabTechncians';
import Create from '../react-client/src/components/User/Create';
import Home from '../react-client/src/components/User/Home';
import Main from '../react-client/src/components/User/Main';
import News from '../react-client/src/components/User/News';
import PationtAppoinment from '../react-client/src/components/User/PationtAppoinment';
import UserProfile from '../react-client/src/components/User/UserProfile';
import DoctorHome from '../react-client/src/components/DoctorComponent/DoctorHome';
import Doctor from '../react-client/src/components/DoctorComponent/DoctorMain';
import DoctorApp from '../react-client/src/components/DoctorComponent/DoctorsAppointments';
import PatientDataAddRecord from '../react-client/src/components/DoctorComponent/PatientDataAddRecord';
import UpdateDoctor from '../react-client/src/components/DoctorComponent/UpdateDoctor';
import AddDepartment from '../react-client/src/components/adminComponents/addDept';
import AddDoctor from '../react-client/src/components/adminComponents/AddDoctor';
import AddDocToComponent from '../react-client/src/components/adminComponents/addDoctortoComponent';
import addDoctorToDepartment from '../react-client/src/components/adminComponents/addDoctorToDepartment'
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

//Labs Techncians Component Test.
describe("LoginLabTech",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LoginLabTech)).to.be.true;
	})
	it('should render two <div /> components', () => {
    const wrapper = shallow(<LoginLabTech/>);
    expect(wrapper.find('div').length).to.equal(2);
    })
});
describe("AddLabResult",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddLabResult)).to.be.true;
	})
});
describe("LabHome",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LabHome)).to.be.true;
	})
	it('should render one <div/> components', () => {
    const wrapper = shallow(<LabHome/>);
    expect(wrapper.find('div').length).to.equal(1);
    })
});	
describe("Labs",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Labs)).to.be.true;
	})
	it('should render one <div /> components', () => {
    const wrapper = shallow(<Labs/>);
    expect(wrapper.find('div').length).to.equal(1);
    })
    it('should render three <Route /> components', () => {
    const wrapper = shallow(<Labs/>);
    expect(wrapper.find('Route').length).to.equal(3);
    })
});
describe("LabsNavbar",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LabsNavbar)).to.be.true;
	})
 });
describe("UpdateLabTechncians",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(UpdateLabTechncians)).to.be.true;
	})
 });

//Users Component Test
describe("Create",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Create)).to.be.true;
	})
  });
describe("Home",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Home)).to.be.true;
	})
	it('should render one <div/> components', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('div').length).to.equal(1);
    })
});
describe("Main",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Main)).to.be.true;
	})
	 it('should render one <div/> components', () => {
    const wrapper = shallow(<Main/>);
     expect(wrapper.find('div').length).to.equal(1);
     })
      it('should render four <Route/> components', () => {
    const wrapper = shallow(<Main/>);
     expect(wrapper.find('Route').length).to.equal(4);
     })
 });
describe("News",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(News)).to.be.true;
	})
});
describe("PationtAppoinment",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(PationtAppoinment)).to.be.true;
	})
});
describe("UserProfile",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(UserProfile)).to.be.true;
	})
});

//Doctor components Test..
describe("DoctorHome",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(DoctorHome)).to.be.true;
	})
	it('should render one <div/> components', () => {
    const wrapper = shallow(<DoctorHome/>);
     expect(wrapper.find('div').length).to.equal(1);
     })
});
describe("Doctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Doctor)).to.be.true;
	})
	it('should render one <div/> components', () => {
    const wrapper = shallow(<Doctor/>);
     expect(wrapper.find('div').length).to.equal(1);
     })
	it('should render four <Route/> components', () => {
    const wrapper = shallow(<Doctor/>);
     expect(wrapper.find('Route').length).to.equal(4);
     })
});
describe("DoctorApp",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(DoctorApp)).to.be.true;
	})
});
describe("PatientDataAddRecord",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(PatientDataAddRecord)).to.be.true;
	})
});
describe("UpdateDoctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(UpdateDoctor)).to.be.true;
	})
});
//Admin Components Test...
describe("AddDepartment",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddDepartment)).to.be.true;
	})
});
describe("AddDoctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddDoctor)).to.be.true;
	})
});

describe("AddDocToComponent",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddDocToComponent)).to.be.true;
	})
});
describe("addDoctorToDepartment",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(addDoctorToDepartment)).to.be.true;
	})
});