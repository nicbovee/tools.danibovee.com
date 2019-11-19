import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function convertNames(names) {
    let output = "";
    names = names.split("\n");
    names.map(x => {
        if (x) {
            let test = x.split(" ");
            output += `${test[1]} ${test[0].replace(/,/g, "")}\n`;
        }
    });
    return output;
}

function App() {
    const [namelist, setNamelist] = useState("")
    const [outputNames, setOutputNames] = useState("")
    return (
    <div className="App" >
        <Wrapper>
            <TextBox value={namelist} onChange={event => setNamelist(event.target.value)}/> 
            <Button onClick={() => setOutputNames(convertNames(namelist))}>
                Convert Names 
            </Button>
            <TextBox value={outputNames}/>
        </Wrapper> 
        </div>
    );
}

export default App;

const TextBox = styled.textarea`
height: 100vh;
`
const Button = styled.button`
max-height: 45px;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`