import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Profile from './Component/Profile'
import AllContent from './Component/AllContent';
import Objective from './Component/Objective';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Employment from './Component/Employment';
import Project from './Component/Project';

function App() {
  return (
    <div className=" App m-0">
      <Container fluid>
        <Row>
          <Col md={4} className="column1" >
            <Row>
              <Profile />
            </Row>
            <Row>
              <AllContent />
            </Row>
          </Col>
          <Col md={8} className="column2">
            <Row>
            <Objective />
            </Row>
            <Row>
            <Education />
            </Row>
            <Row>
            <Skills />
            </Row>
            <Row>
            <Employment />
            </Row>
            <Row>
            <Project />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
