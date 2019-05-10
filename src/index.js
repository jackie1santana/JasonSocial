import React from "react";
import ReactDOM from "react-dom";
import main from "./css/main.css";
import Profile from "./components/Profiles";
import ApprovalCard from "./components/ApprovalCard";
import faker from "faker";
import Menu from "./components/Menu";
import Register from './components/FormRegistration';

​
const App = () => {
  return (
    <div>
      <Menu />
      <h1 className="heading">Welcome to Jason</h1>
      <h4 className="heading">The Social Network</h4>

    <Register />

      <ApprovalCard>
        <Profile
          avatar={faker.image.avatar()}
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          joined="2011"
          description="Los Angeles Gym Trainer"
          number_friends="1,345"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Profile
          avatar={faker.image.avatar()}
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          joined="2016"
          description="Editor For The New York Times"
          number_friends="265"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Profile
          avatar={faker.image.avatar()}
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          joined="2015"
          description="School Teacher at Henderson Highschool"
          number_friends="1.476"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Profile
          avatar={faker.image.avatar()}
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          joined="2019"
          description="MTA Transit Operator"
          number_friends="54"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Profile
          avatar={faker.image.avatar()}
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          joined="2011"
          description="Musician"
          number_friends="4,232"
        />
      </ApprovalCard>
    </div>
  );
};


class App2 extends React.Component{
  render(){
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div className="location">Latitude: </div>
  }
}


ReactDOM.render(<div><App/>,<App2/></div>,document.querySelector("#root")); 