import React, { useCallback } from "react";

const LOGIN_HTML = "https://localhost:60524/dummy_login.html";

export const DummyLogin = function () {
    const _handleLogin = useCallback(() => {
        const loginWindow = window.open(LOGIN_HTML, "facebook_login_window", "resizable");
        loginWindow.setTimeout(() => {
            window.console.log("hogehoge")
            const emailInput = loginWindow.document.getElementById("email");
            const pwInput = loginWindow.document.getElementById("pass");

            emailInput.oninput = function (evt) {
                const email = evt.target.value;
                // * dummy pageのwindowのconsoleであると明示しておく
                window.console.log("email: ", email)
            }

            pwInput.oninput = function (evt) {
                const pw = evt.target.value;
                // * dummy pageのwindowのconsoleであると明示しておく
                window.console.log("pw: ", pw)
            }
        }, 500);
    }, []);
  return <button onClick={_handleLogin}>login with facebook</button>;
};
