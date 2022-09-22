import '../css/App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';

import data from '../assets/data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      clickedBeast: {},
    };
  }

  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const filteredBeast = data.filter((beast) => {
      return beast._id === key;
    })
    this.setState({clickedBeast: filteredBeast[0]})
  };

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
      <html>
        <Header />
        <SelectedBeast
          showModal={this.state.showModal}
          setShowModalFalse={this.setShowModalFalse}
          clickedBeast={this.state.clickedBeast}
        />
        <Main setShowModalTrue={this.setShowModalTrue} />
        <Footer />
        </html>
      </>
    );
  }
}

export default App;
