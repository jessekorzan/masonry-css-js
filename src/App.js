import React, { Component } from 'react';
import 'normalize.css'; 
import './styles.css';

// Jesse Korzan
// copyright 2018 Klue Labs
// CSS column-count masonry w/ left-right reflow
// special thx to NickB
//
// kick ass out there, ppl 1:1

const Card = (props) => 
    <div className={(props.card === props.active) ? "card active" : "card"} onClick={()=>props.handleClickCard(props.card)}>
        <div className="media"></div>
        <div>
            <h1>{ props.card.id }</h1>
            <h2>{ props.card.title }</h2>
            <p><strong>{ props.card.title }</strong>{ props.card.body }</p>
        </div>
    </div>

const Layout = (props) => 
    // Masonry layout of cards 
    // column-count : X 
    <div className={`layout` + `${props.style}`} style={{"columnCount" : props.columns}}>
        {props.cards.map( (card, index) => 
            <Card key={index} card={card} active={props.active} handleClickCard={props.handleClickCard}/>
        )}
    </div>

class App extends Component {
    constructor() {
        super();
        this.state = {
            layout: "masonry",
            columns: 5,
            maxCards: 20
        };
    }
    componentDidMount() {
        this.fetchEr();
        
/*
        // cheap responsive approach -- if you want
        window.addEventListener("resize", () => {
            let winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (winWidth <= 900) {
                this.reorder(this.state.cardsOG, 2);
            } else {
                this.reorder(this.state.cardsOG, 5);
            }
        })
*/
    }
    fetchEr = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(result => {
            this.reorder(result.slice(0,this.state.maxCards), this.state.columns);
            this.setState({ cardsOG: result.slice(0,this.state.maxCards) });
        })
        .catch(e => e);
    }
    reorder = (arr, columns) => {
        // READ HERE
        // this is the magic
        // re-order the array so the "cards" read left-right
        // cols === CSS column-count value
        
        const cols = columns;
        const out = [];
        let col = 0;
        while(col < cols) {
            for(let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined)
                    out.push(_val);
            }
            col++;
        }
        this.setState({ cards: out, columns: columns });
        
        // yes, I know Nick... you had another slicker ES6-y implementation
        // but this one I could understand :)
    }
    handleButtonClick = (layout, columns) => {
        this.setState({ 
            layout: layout, 
            columns: columns
        });
        this.reorder(this.state.cardsOG, columns);
        
    }
    handleClickCard = (card) => {
        this.setState({
            cardActive: (this.state.cardActive !== card) ? card : false
        })
    }
    render() {
        let CARDS = this.state.cards;
        return (
            <div>
                <nav>
                    <a href="#1" id="1" onClick={()=>this.setState({ layout: "masonry", columns: 5, cards: this.state.cardsOG })}>five-column (no reorder)</a>
                    <a href="#2" id="2" onClick={()=>this.handleButtonClick("masonry", 5)}>5-column</a>
                    <a href="#3" id="3" onClick={()=>this.handleButtonClick("two-column", 2)}>2-column</a>
                    <a href="#5" id="5" onClick={()=>this.handleButtonClick("flex", 3)}>3-column</a>
                    <a href="#4" id="4" onClick={()=>this.handleButtonClick("single-column", 1)}>1-column</a>
                </nav>
                <div className="layout--wrapper">
                    <div className="info">
                        <div>
                            <h2>Card Array: { CARDS && CARDS.map( card => <span>{card.id}</span>) }</h2>
                            <p>Layout using CSS <i>column-count</i> only &mdash; <a href="https://github.com/jessekorzan/masonry-css-js">GitHub</a></p>
                        </div>
                    </div>
                    { CARDS && <Layout style={this.state.layout} columns={this.state.columns} cards={CARDS} active={this.state.cardActive} handleClickCard={this.handleClickCard} /> }
                </div>
            </div>
        );
    }
}

export default App;
