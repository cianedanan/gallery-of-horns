import '../css/App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import FormBeast from './FormBeast';
import SelectedBeast from './SelectedBeast.js';

import data from '../assets/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      clickedBeast: {},
      displayedBeasts: data,
    };
  }

  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const filteredBeast = data.filter((beast) => {
      return beast._id === key;
    });
    this.setState({ clickedBeast: filteredBeast[0] });
  };

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  };

  handleFormChange = (event) => {
    event.preventDefault();

    const searchTerm = parseInt(event.target.value);

    const searchedBeasts = data.filter((beast) => beast.horns === searchTerm);

    const testedBeasts = searchedBeasts.length !== 0 ? searchedBeasts : data;

    this.setState({ displayedBeasts: testedBeasts });
  };

  render() {
    return (
      <>
        <html>
          <Header />
          <FormBeast handleFormChange={this.handleFormChange} />
          <SelectedBeast
            showModal={this.state.showModal}
            setShowModalFalse={this.setShowModalFalse}
            clickedBeast={this.state.clickedBeast}
          />
          <Main
            setShowModalTrue={this.setShowModalTrue}
            displayedBeasts={this.state.displayedBeasts}
          />
          <Footer />
        </html>
      </>
    );
  }
}

export default App;
