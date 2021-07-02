import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import Header from "../header/header";
import {Component} from "react";
import RandomChar from "../randomChar/randomChar";
import BooksPage from "../pages/booksPage";
import BooksItem from "../pages/booksItem";
import CharacterPage from "../pages/characterPage";
import HousesPage from "../pages/housesPage";

export default class App extends Component {

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
                        <Route path='/' exact component={() => <h1 className="title">Welcome to GOT DB</h1>}/>
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} exact/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                            return <BooksItem bookId={id}/>}}/>
                        <Route path='/houses' component={HousesPage} />
                    </Container>
                </div>
            </Router>
        )
    }


}
