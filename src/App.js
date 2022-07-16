import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container fluid>
        <Row>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
