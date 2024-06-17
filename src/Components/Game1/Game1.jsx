import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import '../Game1/Game1.css';

const Game1 = () => {
    const [PasswordVisible, SetPasswordVisible] = useState(false);
    const [upassword, setUpassword] = useState("");

    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(null);

    const [uppercaseMessage, setUppercaseMessage] = useState("");
    const [isUppercaseValid, setIsUppercaseValid] = useState(null);

    const [integerMessage, setIntegerMessage] = useState("");
    const [isIntegerValid, setIsIntegerValid] = useState(null);

    const [symbolMessage, setSymbolMessage] = useState("");
    const [isSymbolValid, setIsSymbolValid] = useState(null);

    const [wordMessage, setWordMessage] = useState("");
    const [isWordValid, setIsWordValid] = useState(null);

    const [sumMessage, setSumMessage] = useState("");
    const [isSumValid, setIsSumValid] = useState(null);

    const [ascendingMessage, setAscendingMessage] = useState("");
    const [isAscendingValid, setIsAscendingValid] = useState(null);

    const togglePasswordVisibility = () => {
        SetPasswordVisible(!PasswordVisible);
    }

    const Pfunc = (e) => {
        e.preventDefault();

        // Length validation
        if (upassword.length >= 10 && upassword.length <= 20) {
            setMessage("The Password Length Is Correct.");
            setIsValid(true);
        } else {
            setMessage("Password Length Must Be 10 To 20.");
            setIsValid(false);
        }

        // Uppercase validation
        if (upassword.length > 0) {
            const firstchar = upassword[0];
            const lastchar = upassword[upassword.length - 1];
            if (/^[A-Z]/.test(firstchar) && /^[A-Z]/.test(lastchar)) {
                setUppercaseMessage("First & Last Character Is In UpperCase.");
                setIsUppercaseValid(true);
            } else {
                setUppercaseMessage("First & Last Character Must Be In UpperCase.");
                setIsUppercaseValid(false);
            }
        } else {
            setUppercaseMessage("");
            setIsUppercaseValid(null);
        }

        // Integer validation
        const integerMatches = upassword.match(/\d/g);
        const integerCount = integerMatches ? integerMatches.length : 0;
        if (integerCount === 4) {
            setIntegerMessage("Password contains exactly four integers.");
            setIsIntegerValid(true);

            // Sum of integers validation
            const sum = integerMatches.reduce((acc, curr) => acc + Number(curr), 0);
            const digitSum = sum.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
            if (digitSum % 2 === 0) {
                setSumMessage("The sum of the four integers is even.");
                setIsSumValid(true);
            } else {
                setSumMessage("The sum of the four integers is not even.");
                setIsSumValid(false);
            }

            // Ascending order validation
            const integers = integerMatches.map(Number);
            const isAscending = integers.every((val, i, arr) => !i || (val >= arr[i - 1]));
            if (isAscending) {
                setAscendingMessage("The four integers are in ascending order.");
                setIsAscendingValid(true);
            } else {
                setAscendingMessage("The four integers are not in ascending order.");
                setIsAscendingValid(false);
            }
        } else {
            setIntegerMessage("Password must contain exactly four integers.");
            setIsIntegerValid(false);
            setSumMessage("");
            setIsSumValid(null);
            setAscendingMessage("");
            setIsAscendingValid(null);
        }

        // Symbol validation
        if (/[-+*]/.test(upassword)) {
            setSymbolMessage("Password contains at least one of '+', '-', or '*'.");
            setIsSymbolValid(true);
        } else {
            setSymbolMessage("Password must contain at least one of '+', '-', or '*'.");
            setIsSymbolValid(false);
        }

        // Word validation
        if (/Dumb|Idiot|Rascal/.test(upassword)) {
            setWordMessage("Password contains one of the words 'Dumb', 'Idiot', or 'Rascal'.");
            setIsWordValid(true);
        } else {
            setWordMessage("Password must contain one of the words 'Dumb', 'Idiot', or 'Rascal'.");
            setIsWordValid(false);
        }
    }
    return (
        <>
            <div className="GHD">
                <h1 className="GHDH1">Password Game</h1>
            </div>
            <div className="GPHD">
                <p className="GPP">
                    I developed a password game where users enter a password, and the project humorously irritates the user, making the experience both funny and annoying.
                </p>
            </div>
            <form onSubmit={Pfunc}>
                <input type="text" name="username" autoComplete="username" style={{ display: 'none' }} />
                <div className="PDIV">
                    <div className="PWD">
                        <input
                            required
                            type={PasswordVisible ? "text" : "password"}
                            placeholder="Enter Password"
                            className="PW"
                            autoComplete="new-password"
                            onChange={e => setUpassword(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={PasswordVisible ? faEye : faEyeSlash}
                            size="sm"
                            style={{ color: "#000000", cursor: "pointer", margin: "7px" }}
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                </div>
                <div className="PWDIV">
                    <button type="submit" className="BTN">Click Here!</button>
                </div>
            </form>
            {message && (<div className="NOTIFY"> <p className={isValid ? "valid" : "invalid"}>{message}</p></div>)}
            {uppercaseMessage && (<div className="NOTIFY"><p className={isUppercaseValid ? "valid" : "invalid"}>{uppercaseMessage}</p></div>)}
            {integerMessage && (<div className="NOTIFY"><p className={isIntegerValid ? "valid" : "invalid"}>{integerMessage}</p></div>)}
            {symbolMessage && (<div className="NOTIFY"><p className={isSymbolValid ? "valid" : "invalid"}>{symbolMessage}</p></div>)}
            {wordMessage && (<div className="NOTIFY"><p className={isWordValid ? "valid" : "invalid"}>{wordMessage}</p></div>)}
            {sumMessage && (<div className="NOTIFY"><p className={isSumValid ? "valid" : "invalid"}>{sumMessage}</p></div>)}
            {ascendingMessage && (<div className="NOTIFY"><p className={isAscendingValid ? "valid" : "invalid"}>{ascendingMessage}</p></div>)}

        </>
    );
}
export default Game1;