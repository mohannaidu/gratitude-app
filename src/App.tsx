import React, {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListEditor} from "./ListEditor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {auth, Providers} from './config/firebase';
import { SignInWithSocialMedia } from './auth';
import firebase from "firebase/app";
import {Repository} from './db/repository';


interface UserState {
    isAuthenticated: boolean;
    name: string;
}

// interface GratitudeState {
//     entry: string;
// }

export default function App(){
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState<string>('');
    const [user, setUser] = useState<UserState>({isAuthenticated:false, name:""});
    let repo: Repository = new Repository();
    const [entries, setEntries] = useState<string>('');
   // const [entry, setEntry] = useState<GratitudeState>({entry:"lorem ipsum"});

    // Monitor and Update user state.
    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                let displayName:string = auth.currentUser?.displayName!;
                setUser({isAuthenticated:true,name:displayName})
            } else {
                console.log('No user detected');
                setUser({isAuthenticated:false,name:""})
            }
        })
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const result = await repo.getAllGratitudeByUserAndDate(date);
        setEntries(result);
    }

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        SignInWithSocialMedia(provider)
            .then(result => {
                setUser({isAuthenticated:true,name:result.user?.displayName!})
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const isLoggedIn = user.isAuthenticated;
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    function LoginButton(props) {
        return (
            <button className="custom" onClick={props.onClick}>
                <i className="fas fa-sign-in-alt"></i>
            </button>
        );
    }

    function LogoutButton(props) {
        return (
            <button className="custom" onClick={props.onClick}>
                <i className="fas fa-sign-out-alt"></i>
            </button>
        );
    }

    function handleLoginClick() {
        signInWithSocialMedia(Providers.google);
        setUser({isAuthenticated: true, name:""});
    }

    function handleLogoutClick() {
        setUser({isAuthenticated: false, name:""});
    }

  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="navbar-brand" ><h1 className="display-3 text-muted">Thankful Diary</h1></div>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  {button}
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3 outside"></div>
              <div className="col-md-6">
                  <div className="row">
                      <div className="col-md-6">
                        Welcome {user.name}
                      </div>
                      <div className="col-md-6 calendar">
                          <DatePicker selected={startDate} wrapperClassName="datePicker" onChange={(date) => setStartDate(date)} />
                      </div>
                  </div>
              </div>
              <div className="col-md-3 outside"></div>
          </div>

          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <ListEditor entry={entries}/>
              </div>
          </div>
      </div>
  );
}
