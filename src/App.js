import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import Character from './components/Character'
import NewCharacterButton from './components/NewCharacterButton'
import SocialMediaButtons from './components/SocialMediaButtons'
import NewVar from './actioncreators/NewVar'

class App extends React.Component{
render(){
  return (
    <div className="App">
       <h1>Chinese Character Generator</h1>
       <Character charList={this.props.charList} randomVar={this.props.randomVar} />
       <NewCharacterButton setVar={(number) => this.props.setVar(number)} />
       <SocialMediaButtons />   
    </div>

  );
}
}

const mapStateToProps = state => ({
	charList: state.charList, 
	randomVar: state.randomVar
})

const mapDispatchToProps = dispatch => ({
    setVar: (number) => {
      dispatch(NewVar(number))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

