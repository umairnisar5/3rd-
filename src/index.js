import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

let currntDate = new Date(2020, 9, 22, 15);
currntDate = currntDate.getHours();
let  geeting  =  '';
const cssStyle ={};

 
if(currntDate >=1 && currntDate < 12) {
  geeting = 'Good Morning';
  cssStyle.color = 'green';
}else if (currntDate >=12  && currntDate <19 ){
  geeting = 'Good Afternoon';
  cssStyle.color = 'Orange';

}else {
  geeting = 'Good Night'
  cssStyle.color = 'Black';

}



ReactDOM.render(
  <>

  <div>
  <h1>Hello Sir! <span style={cssStyle}> {geeting} </span></h1>
</div>
  </>,
  document.getElementById('root')
);

