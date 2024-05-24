import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./components/Homepage";
import RoomJoinPage from "./components/RoomJoinPage";
import CreateRoomPage from "./components/CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <HomePage />
                <RoomJoinPage />
                <CreateRoomPage />
            </div>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App name="Jess" />, appDiv)