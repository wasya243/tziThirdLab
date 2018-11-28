import React, {Component} from 'react';
import './App.css';

const {XorEncryption} = require('./encryption');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: '',
            stringToEncrypt: '',
            encryptedString: '',
            decryptedString: ''
        };
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleEncrypt = () => {
        const xor = new XorEncryption(this.state.key);
        const encryptedString = xor.encrypt(this.state.stringToEncrypt);
        this.setState({
            encryptedString
        });
    };

    handleDecrypt = () => {
        const xor = new XorEncryption(this.state.key);
        const decryptedString = xor.decrypt(this.state.encryptedString);
        this.setState({
            decryptedString
        });
    };

    render() {
        return (
            <div className="App">
                <div>
                    <label>XOR Key:</label>
                    <input
                        type="text"
                        name="key"
                        onChange={this.handleChange}
                        value={this.state.key}
                    />
                </div>
                <div>
                    <label>String to encrypt:</label>
                    <input
                        type="text"
                        name="stringToEncrypt"
                        onChange={this.handleChange}
                        value={this.state.stringToEncrypt}
                    />
                    <button onClick={this.handleEncrypt}>Encrypt</button>
                </div>
                <div>
                    <label>Encrypted string:</label>
                    <input type="text" disabled value={this.state.encryptedString}/>
                    <button onClick={this.handleDecrypt}>Decrypt</button>
                    <input type="text" disabled value={this.state.decryptedString}/>
                </div>
            </div>
        );
    }
}

export default App;
