import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native' ;
import DatePicker from 'react-native-datepicker'
class PickDate extends React.Component{	
	constructor(props){
		super(props);
		this.state={
			today:''
		}
		this.handleDate=this.handleDate.bind(this);
		this.formatDate=this.formatDate.bind(this)
	}
		
	handleDate(date){
		var today=this.state.today;
		var date=date;
		if(today>date){
			alert('you can not pick previus date')
		}else{
			this.setState({
				date:date,
			})	
		}
		this.props.cbFromApptoDate(date)

	}	

	componentDidMount(){

	var today=this.formatDate(new Date);
	this.setState({
		today:today
	})
	
	}

	formatDate(date) {
    var d = new Date(date);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
	}

	render(){
		return(
			<View style={{alignItems: 'center',justifyContent:'center'}}>
				<Text style={styles.header}>Choose Date</Text>
		     		<DatePicker
        style={{width: 200,}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={this.handleDate}
      />	
			</View>
			)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 20,
    color: "#8860D0",
    fontWeight: 'bold',
  },
})

export default PickDate;