import deco from '../images/deco.png';
import deco_reversed from '../images/deco_reversed.png';
import '../components/styles/SignUp.css';
import { useRef } from 'react';
import React, {useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[A-Za-z\s]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/signup';

const SignUp = () => {
  const useRef_ = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdMatch, setPwdMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);


  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    useRef_.current.focus();
  },[])

  useEffect(()=>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidUser(result);
  },[user])

  useEffect(()=>{
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  },[email])

  useEffect(()=>{
    const result = NAME_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  },[name])

  useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(user);
    setValidPwd(result);
    const match = pwd === pwdMatch;
    setValidMatch(match);
  },[pwd, pwdMatch])


  useEffect(()=>{
    setErrMsg('');
  },[user,name,email,pwd,pwdMatch])

  return (
    <div className="signup-content">
      <div class="left">
        <img class="decoration_" src={deco_reversed} alt=""/>
      </div>
      <div className='center'>
        <section>
          <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <span class="blankcanva">
            BlankCanva
          </span>
          <form>
            <label htmlFor="username">
              Username:
              <span className={validUser ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span className={validUser || !user ? "hide": "invalid"}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </label>
            <input 
              type="text"
              id="username"
              ref={useRef_}
              autoComplete = "off"
              onChange = {(e)=> setUser(e.target.value)}
              required
              aria-invalid = {validUser ? "false" : "true"}
              aria-describedby = "uidnote"
              onFocus={()=> setUserFocus(true)}
              onBlur={()=> setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validUser ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon = {faInfoCircle}/>
              4 to 24 characters. <br />
              Must begin with a letter. <br/>
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="name">
              Name:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span className={validName || !user ? "hide": "invalid"}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </label>
            <input 
              type="text"
              id="name"
              ref={useRef_}
              autoComplete = "off"
              onChange = {(e)=> setName(e.target.value)}
              required
              aria-invalid = {validName ? "false" : "true"}
              aria-describedby = "namenote"
              onFocus={()=> setNameFocus(true)}
              onBlur={()=> setNameFocus(false)}
            />
            <p id="namenote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon = {faInfoCircle}/>
              Maximum 90 characters. <br />
              Must contain only letters. 
            </p>

            <label htmlFor="email">
              Email:
              <span className={validEmail ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span className={validEmail || !user ? "hide": "invalid"}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </label>
            <input 
              type="text"
              id="email"
              ref={useRef_}
              onChange = {(e)=> setEmail(e.target.value)}
              required
              aria-invalid = {validEmail ? "false" : "true"}
              aria-describedby = "emailnote"
              onFocus={()=> setEmailFocus(true)}
              onBlur={()=> setEmailFocus(false)}
            />
            <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon = {faInfoCircle}/>
              Invalid type of email.
            </p>

            <label htmlFor="password">
              Password:
              <span className={validPwd? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span className={validPwd || !pwd ? "hide": "invalid"}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </label>
            <input 
              type="password"
              id="password"
              onChange = {(e)=> setPwd(e.target.value)}
              required
              aria-invalid = {validPwd ? "false" : "true"}
              aria-describedby = "pwdnote"
              onFocus={()=> setPwdFocus(true)}
              onBlur={()=> setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon = {faInfoCircle}/>
              8 to 24 characters. <br />
              Must include uppercase and lowercase letters, a number and a special character <br/>
              Allowed special characters: 
              <span aria-label="exclamation mark">
                !
              </span>
              <span aria-label='at symbol'>
                @
              </span>
              <span aria-label='hashtag'>
                #
              </span>
              <span aria-label='dollar sign'>
                $
              </span>
              <span aria-label='percent'>
                %
              </span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <span className={validMatch && pwdMatch ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span className={validMatch || !pwdMatch ? "hide": "invalid"}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </label>
            <input 
              type="password"
              id="confirm_pwd"
              onChange = {(e)=> setValidMatch(e.target.value)}
              required
              aria-invalid = {validMatch ? "false" : "true"}
              aria-describedby = "confirmnote"
              onFocus={()=> setMatchFocus(true)}
              onBlur={()=> setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon = {faInfoCircle}/>
              Must match the first password input field.
            </p>

            <button disabled={!validName || !validPwd || !validMatch || !validEmail ? true : false }>Sign Up</button>
          </form>
          <p>
            Already registered?<br />
            <span className="line">
              <a href="#">Sign In</a>
            </span>
          </p>
        </section>
      </div>
      <div class="right">
        <img class="decoration_" src={deco} alt=""/>
      </div>
    </div>
  )
}

export default SignUp