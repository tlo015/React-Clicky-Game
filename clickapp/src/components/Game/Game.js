import React, { Component } from 'react';
import Pictures from '../PictureCards';
import image from '../../img.json';
import {Navbar} from 'reactstrap';

class Game extends Component {
  //set state
  state = {
    image,
    message: "Click an image to begin!",
    topScore: 0,
    currScore: 0,
    clicked: [],
  }

  // when click on picture 
  // check if image id is in clicked array 
  // if not in array = add id to click array, message: correct, score +1 and shuffle
  // if array - game over and update top score 
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      // if id is not in array - new pic selected 
      this.setState ({ 
        currScore: this.state.currScore + 1,
        topScore: (this.state.currScore > this.state.topScore) ? this.state.currScore : this.state.topScore,
        message: "You guessed correctly!",
        clicked: this.state.clicked.push(id),
      });
      this.handleIncrement();
  
    } else {
      //if id is in array - pic previously selected 
      this.setState ({
        currScore: 0,
        topScore: this.state.topScore,
        message: "You guessed incorrectly",
        clicked: []
      });
    }
    this.handleShuffle(image);
  }

  // increments the current score and compares for topscore
  // handleIncrement = event => {
  //   const score = this.state.currScore + 1;
 
  //   if (score >= this.state.topScore){
  //     this.setState ({
  //       currScore: score
  //     });
  //   }
  // }


  handleShuffle = arr => {
    for (let i=arr.length-1; i>0; i--) {
        const j=Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };


  // check for top score 

  // 

  render() {
    return(
        <div>

            <Navbar>
              <div className="container"> 
                <div className="left">
                  {this.state.message}
                </div>
                <div className="right">
                  Top Score = {this.state.topScore} | 
                  Score = {this.state.currScore} 
                </div>
              </div>
            </Navbar>

    
            <div className="App">
              <header className="appHeader">
                <h1 className="appTitle">Clicky Game!</h1>
                <h5> Click on an image to earn points, but don't click on any more than once! </h5>
              </header>

              <div className="container appImages">
                <div className="row">
                  {this.state.image.map(item => (
                    <div className="pikachu col-md-3">
                      <Pictures 
                        id={item.id}
                        image={item.image}
                        handleClick={this.handleClick}
                        handleShuffle={this.handleShuffle}
                       />
                    </div>
                  ))}
                </div>
              </div>

            </div>

        </div>
      );
    //);
  }
}

export default Game;
