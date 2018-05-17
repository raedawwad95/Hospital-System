
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
  import Navabar from '../react-client/src/components/Navabar';
  import Appoinment from '../react-client/src/components/userpick';




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
	
 
    it('should render one <Navabar /> components', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find(Navabar).length).to.equal(1);
  })
     it('should render one <Appoinment /> components', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find(Appoinment).length).to.equal(1);
  })

});




describe("Home2",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Home2)).to.be.true;
	})
	   it('should render one <div /> components', () => {
    const wrapper = shallow(<Home2/>);
    expect(wrapper.find('div').length).to.equal(1);
  })
});




describe("LoginLabTech",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LoginLabTech)).to.be.true;
	})
	it('should render two <div /> components', () => {
    const wrapper = shallow(<LoginLabTech/>);
    expect(wrapper.find('div').length).to.equal(2);
    })
});



describe("AddResult",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddResult)).to.be.true;
	})
	it('should render two <div /> components', () => {
    const wrapper = shallow(<AddResult/>);
    expect(wrapper.find('div').length).to.equal(2);
    })
});


describe("DoctorHome",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(DoctorHome)).to.be.true;
	})
	it('should render one <div /> components', () => {
    const wrapper = shallow(<DoctorHome/>);
    expect(wrapper.find('div').length).to.equal(1);
    })
});


describe("Doctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Doctor)).to.be.true;
	})
	it('should render one <div /> components', () => {
    const wrapper = shallow(<Doctor/>);
    expect(wrapper.find('div').length).to.equal(1);
    })
    it('should render one <DoctorNavbar /> components', () => {
    const wrapper = shallow(<Doctor/>);
    expect(wrapper.find(DoctorNavbar).length).to.equal(1);
    })
     it('should render three <Route /> components', () => {
    const wrapper = shallow(<Doctor/>);
    expect(wrapper.find('Route').length).to.equal(3);
    })
});


describe("DoctorNavbar",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(DoctorNavbar)).to.be.true;
	})
	// it('should render two <Button /> components', () => {
 //    const wrapper = shallow(<DoctorNavbar/>);
 //    expect(wrapper.find('Button').length).to.equal(2);
 //    })

});




describe("LoginDoctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(LoginDoctor)).to.be.true;
	})
	it('should render two <div /> components', () => {
    const wrapper = shallow(<LoginDoctor/>);
    expect(wrapper.find('div').length).to.equal(2);
    })
    
});



describe("PatientDataAddRecord",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(PatientDataAddRecord)).to.be.true;
	})
	// it('should render two Button components', () => {
 //    const wrapper = shallow(<PatientDataAddRecord/>);
 //    expect(wrapper.find('Button').length).to.equal(5);
 //    })
});




describe("AddDepartment",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddDepartment)).to.be.true;
	})
	 // it('should render five <Grid/> components', () => {
  //   const wrapper = shallow(<AddDepartment/>);
  //    expect(wrapper.find('Grid').length).to.equal(5);
  //    })
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
describe("AddLabTechncians",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AddLabTechncians)).to.be.true;
	})
});
describe("AdminHome",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AdminHome)).to.be.true;
	})
	it('should render one <div /> components', () => {
    const wrapper = shallow(<AdminHome/>);
    expect(wrapper.find('div').length).to.equal(1);
    })

});
describe("Admin",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(Admin)).to.be.true;
	})
	it('should render one <div /> components', () => {
    const wrapper = shallow(<Admin/>);
    expect(wrapper.find('div').length).to.equal(1);
    })
    it('should render one <AdminNavbar /> components', () => {
    const wrapper = shallow(<Admin/>);
    expect(wrapper.find(AdminNavbar).length).to.equal(1);
    })
    it('should render ten <Route /> components', () => {
    const wrapper = shallow(<Admin/>);
    expect(wrapper.find('Route').length).to.equal(10);
    })

});
describe("AdminNavbar",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(AdminNavbar)).to.be.true;
	})
});
describe("retriveAllDepts",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(retriveAllDepts)).to.be.true;
	})
	// it('should render Four <div /> components', () => {
 //    const wrapper = shallow(<retriveAllDepts/>);
 //    expect(wrapper.find('div').length).to.equal(3);
 //    })
});
describe("retriveAllDoctor",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(retriveAllDoctor)).to.be.true;
	})
});
describe("retriveLabResults",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(retriveLabResults)).to.be.true;
	})
});
describe("retriveLabTech",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(retriveLabTech)).to.be.true;
	})
});
describe("retrivePatient",function(){
	it('should be class component',function(){
		expect(React.Component.isPrototypeOf(retrivePatient)).to.be.true;
	})
})