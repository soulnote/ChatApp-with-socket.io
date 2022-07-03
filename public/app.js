/* Variabls */
:root {
	--primary-blue: #2196f3;
	--dark-blue: #1976d2;
	--light-blue: #bbdefb;
	--white: #ffffff;
	--primary-text: #212121;
	--secondary-text: #757575;
	--light-gray: #bdbdbd;
}

/* Resets */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Helvetica, sans-serifs;
	color: var(--primary-text);
}

/* Helper Classes */

.flex {
	display: flex;
}

.flex-center {
	justify-content: center;
	align-items: center;
}

.flex-column {
	display: flex;
	flex-direction: column;
}

.flex-grow-1 {
	flex-grow: 1;
}

.container {
	max-width: 600px;
	margin: 0 auto;
}

.primary-text {
	color: var(--primary-text);
}

.secondary-text {
	color: var(--secondary-text);
}

.light-text {
	color: var(--light-blue);
}

.hidden {
	display: none;
}

.text-center {
	text-align: center;
}

.mb-2 {
	margin-bottom: 20px;
}

h1 {
	font-size: 48px;
	font-weight: 300;
}

#appContainer {
	height: 100vh;
	width: 100vw;
	align-items: stretch;
	background-color: var(--primary-blue);
	overflow: hidden;
}

#mainContent {
	width: 100%;
	justify-content: center;
}

/* Header */
header {
	height: 150px;
	background-color: var(--dark-blue);
	width: 100%;
	color: white;
}

header .container {
	height: 100%;
	align-items: left;
}

/* Login */

#login {
	background: white;
	padding: 40px 100px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	margin-top: -100px;
}

#loginForm {
	margin-top: 20px;
}

/* Form Elements */

input {
	height: 40px;
	padding: 10px;
	background-color: var(--light-blue);
	border: none;
	color: var(--secondary-text);
}

button {
	height: 40px;
	padding: 0 15px;
	background-color: var(--primary-blue);
	color: white;
	border: none;
}

/* Chat */

#chat {
	background: white;
	height: 100px;
	margin: 25px 0;
	padding: 25px 25px;
	color: white;
	overflow-y: scroll;
}

#messageForm {
	margin-bottom: 25px;
}

.message {
	background-color: var(--primary-blue);
	padding: 20px;
	width: 80%;
	margin-bottom: 20px;
}

.message-right {
	background: var(--light-blue);
	color: var(--primary-text);
	margin-left: 20%;
}

.message-right .message-date {
	color: var(--primary-text);
}

.message-details {
	margin-bottom: 5px;
}

.message-author {
	font-weight: 800;
}

.message-date {
	font-weight: 100;
	font-size: 14px;
}

.message-content {
	font-weight: 100;
}
