import React from "react";
import HornedBeast from "./HornedBeast.js";
import data from "../assets/data.json";
import "../css/Main.css";

//row and container used with the help of Mehtab and Maximo
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Row>
            {data.map((beast) => {
              return (
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
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
