import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function convertNames(names, options) {
    let output = "";
    names = names.split("\n");
    switch (options) {
        case "para":
                names.map((x,i) => {
                    if (x) {
                        let test = x.split(" ");
                        if(i === names.length - 1) {
                            output += `${test[1]} ${test[0].replace(/,/g, "")}. `;
                        } else {

                            output += `${test[1]} ${test[0].replace(/,/g, "")}, `;
                        }
                    }
                });
            break;
    
        default:
                names.map(x => {
                    if (x) {
                        let test = x.split(" ");
                        output += `${test[1]} ${test[0].replace(/,/g, "")}\n`;
                    }
                });
            break;
    }
   
   
    return output;
}

function App() {
    const [namelist, setNamelist] = useState("")
    const [outputNames, setOutputNames] = useState("")
    return (
        <div className="App" >
            <Header>
                <h1>Dani's Tools</h1>
                <p>A collection of tools for teachers.</p>
            </Header>
            <Wrapper>
                <TextBox placeholder="List of names to convert..." value={namelist} onChange={event => setNamelist(event.target.value)} />
                <ButtonWrapper>

                    <Button onClick={() => setOutputNames(convertNames(namelist))}>
                        Last, First Middle List to First Last List
                    </Button>
                    <Button onClick={() => setOutputNames(convertNames(namelist, "para"))}>
                        Last, First Middle List to First Last Paragraph
                    </Button>
                </ButtonWrapper>
                <TextBox placeholder="Converted names will go here..." value={outputNames} disabled/>
            </Wrapper>
        </div>
    );
}

export default App;


const Header = styled.header`
    & h1 {
        color: #fff;
    }
    & p {
        color: #fff;
    }
`
const TextBox = styled.textarea`
height: 20vh;
font-size: 18px;
padding: 15px;
`
const Button = styled.button`
max-height: 45px;
margin: 15px;
font-size: 18px;
background: #480a48;
border: none;
color: #fff;
padding: 15px;
:hover {
    background: #7d227d;
    box-shadow: 1px 1px 1px #fff;
}
cursor: pointer;
`
const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
    justify-content: center;
    padding: 15px;
`