import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </div>
  );
}

export default App;
