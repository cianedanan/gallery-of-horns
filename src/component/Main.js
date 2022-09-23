import React from "react";
import HornedBeast from "./HornedBeast.js";
import "../css/Main.css";

//row and container used with the help of Mehtab and Maximo
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Row>
            {this.props.displayedBeasts.map((beast) => {
              return (
                <Col>
                <HornedBeast
								  setShowModalTrue={this.props.setShowModalTrue}
                  key={beast._id}
                  title={beast.title}
                  src={beast.image_url}
                  description={beast.description}
                  keyword={beast.keyword}
                  horns={beast.horns}
                  id={beast._id}
                />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
