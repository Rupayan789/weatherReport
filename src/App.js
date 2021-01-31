import React from 'react';
import './App.css'
import Weather from './component/weathercomponent/weather.component';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './component/form.component/form.component';
import Footer from './component/footer/footer.component';
const {REACT_APP_API_KEY}=process.env
class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      temp_celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    }
    
  }
calCelcius=(temp)=>{
  let cel=Math.floor(temp-273);
  return cel;
}



getWeather=async(event)=>{
  event.preventDefault();
  const city=event.target.elements.city.value;
  const country=event.target.elements.country.value;
  if(city && country)
  {
    const api_call=await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_API_KEY}`);
  const response=await api_call.json();

  console.log(response)

  this.setState({
    city:`${response.name},${response.sys.country}`,
    temp_celsius:this.calCelcius(response.main.temp),
    temp_max:this.calCelcius(response.main.temp_max),
    temp_min:this.calCelcius(response.main.temp_min),
    description:response.weather[0].description,
    icon:response.weather[0].icon,
    erro:false
  })
  }
  else
  this.setState({
    error:true
  })
}

  render(){
    return (
      <div className="App">
      <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather city={this.state.city} 
        country={this.state.country} 
        temp_celsius={this.state.temp_celsius} 
        temp_max={this.state.temp_max} 
        temp_min={this.state.temp_min} 
        description={this.state.description}
        icon={this.state.icon}
        
        />
        <Footer/>
      </div>
      
    );
  }
}

export default App;