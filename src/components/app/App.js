import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import Header from "../header/header";
import {Component} from "react";
import gotService from "../../services/gotService";
import RandomChar from "../randomChar/randomChar";

export default class App extends Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
        selectedHouse: 20
    };

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;


        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        )
    }


}
