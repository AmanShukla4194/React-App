// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

// index.html ---> index.js --> app.js (our code is going to be here!)
function App() {
// React Library ---> Helps to use html, css and js all at one place!
// return's body is JSX ---> It is a type of HTML code where we can use javascript inside it!
// JSX is a syntax extention of javascript
// this is all a javascript code --> includes html,css for ex- class is replaced be className, for by htmlfor , tabIndex
// there is javascript in curly brackets{}
// All the codes of the return body must be enclosed in only one tag! Because we can only return one tag in JSX~ for ex-
// jss fragment <> </>
// here all are enclosed in only one div tag

const[Mode, setMode] = useState('light');
const[Text, setText] = useState('Enable DarkMode');

const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        setText('Enable LightMode')
        document.body.style.backgroundColor = '#042743';
    }
    else {
        setMode('light');
        setText('Enable DarkMode')
        document.body.style.backgroundColor = 'white';
    }
};

return (
<>
<Navbar title="Text-Utils" About="About" Home="Home" mode={Mode} toggleMode={toggleMode} text={Text}/>
<div className="container my-4" >
<TextForm heading = "Enter the text to analyze" mode={Mode} />
{/* <About/> */}
</div>
</>
);
}

export default App;