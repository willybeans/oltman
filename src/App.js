import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Corpse from './Components/Corpse'
import Mind from './Components/Mind'
//import $ from 'jquery';
var corpseDisplay ={
  display: 'none'
};
var mindDisplay ={
  display: 'none'
};
class App extends Component {
  constructor () {
    super();
    this.state = {
      corpse: [],
      mind: [],
      showCorpse: false,
      showMind: false
    }
  }

handleClickCorpse(){
  let show = this.state.showCorpse;
  if(!show){
    this.setState({showCorpse: true});
    corpseDisplay = { display: 'block' };
  } else {
    this.setState({showCorpse: false});
    corpseDisplay = { display: 'none' };
  }
}

handleClickMind(){
  let show = this.state.showMind;
  if(!show){
    this.setState({showMind: true});
    mindDisplay = { display: 'block' };
  } else {
    this.setState({showMind: false});
    mindDisplay = { display: 'none' };
  }
}

// getAdvice(){ //this only works if passed through a server
// var xhr = new XMLHttpRequest();
// var DONE = 4;
// var OK = 200;
// xhr.open('GET', '/js/data.json"');
// //xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(null);
// xhr.onload = function() {
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK) {
//         let advice = JSON.parse(xhr.responseText);
//         console.log(advice);
//     }
//   } else {
//       console.log("xhr response error: " + xhr.status);
//     }
// };
// }
componentDidMount(){
  this.setState({corpse:[
      {
        id: "c1",
        phrase: "Doesnt matter how busy you are, you have to get sleep."
      },
      {
        id: "c2",
        phrase: "Eliminate drugs, legal or illegal, sugars, junk food, soda, tobacco."
      },
      {
        id: "c3",
        phrase: "Never skip meals, ever. Especially breakfast."
      },
      {
        id: "c4",
        phrase: "Whole natural foods are best. Fresh produce, Whole wheat, unprocessed grains, Raw nuts and seeds."
      },
      {
        id: "c5",
        phrase: "Breakfast: fresh fruit, oatmeal or whole grain cereal. *Milk is for babies* he puts fruit juice."
      },
      {
        id: "c6",
        phrase: "Lunch: raw veggies, brown rice, peas, lentil pilaf, dark chocolate (no sugar)."
      },
      {
        id: "c7",
        phrase: "Dinner - chicken (no hormones), bean dishes, cooked brown rice, sweet potatoes."
      },
      {
        id: "c8",
        phrase: "Many minerals and nutrients are no longer in food. You should take multivitamins."
      },
      {
        id: "c9",
        phrase: "Take vitamin c during cold season. During the no sun season take vibtamin d."
      },
      {
        id: "c10",
        phrase: "Under stress? Take b vitamins."
      },
      {
        id: "c11",
        phrase: "14 minutes of aerobic exercise is sufficient. Push ups and sit ups."
      },
      {
        id: "c12",
        phrase: "On off season In a gym"
      },
      {
        id: "c13",
        phrase: "A healthy body feeds a healthy mind and vice versa. Learn to listen to your body"
      },
      {
        id: "c14",
        phrase: "Claims that injuries didnt happen in the past. Now people have eradic practicing and they arent consistent."
      },
      {
        id: "c15",
        phrase: "Look for preventative doctors. Theres an association for preventative medicine where they have to meet specific standards."
      }
    ],
    mind: [
      {
        id: "m1",
        phrase: "Mental and spiritual health. Why not wake up in the morning and give thanks its a gift to have so much love in our lives"
      },
      {
        id: "m2",
        phrase: "There is nothing more theraputic than being immersed in your music"
      },
      {
        id: "m3",
        phrase: "Dont surround yourself with people that bitch and moan about everything. Its poison to you."
      },
      {
        id: "m4",
        phrase: "Imagine the 4 traits as legs of a chair. Without one its is unstable."
      },
      {
        id: "m5",
        phrase: "If you want to be well, you have to have positive thoughts."
      },
      {
        id: "m6",
        phrase: "Only way to survive a busy schedule is you have to prioritise. Things get skipped."
      },
      {
        id: "m7",
        phrase: "To do lists could help."
      },
      {
        id: "m8",
        phrase: "Breaks- you have to know when you reach your limit. Also, small breaks are great."
      },
      {
        id: "m9",
        phrase: "Reading is more professional material because novels are too seductive and take away time that you dont have."
      }
    ]
  });
}

  render() {
    return (
      <div className="App container">
        <div className="row" id="main-content">
          <div className="col-sm-5" id="Corpse">
            <div className="Corpse_title" onClick={this.handleClickCorpse.bind(this) }>
              <h4>Body</h4>
            </div>
            <div style={corpseDisplay}>
              <Corpse corpse={this.state.corpse} />
              </div>
            </div>
          <div className="col-sm-5" id="Mind">
            <div className="Mind_title" onClick={this.handleClickMind.bind(this)}>
              <h4>Mind</h4>
            </div>
            <div style={mindDisplay}>
              <Mind mind={this.state.mind} />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
