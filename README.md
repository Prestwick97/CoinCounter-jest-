# _Coin Counter_

#### _Functional programming practice_, _13 April 2020_

#### By _**Michelle Morin, Patrick Delaney, Geoff Goetz**_

## Description

_This application takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| Program will only accept numbers with 0-2 decimal places | 4.99 | 4.99 |
| Program will determine the total number of quarters that make up a given amount | 4.99 | 19 | 
| Program will determine the total number of dimes that make up the remaining amount of an input after quarters are subtracted | 4.99 | 2 | 
| Program will determine the total number of nickels that make up a given amount of an input after quarters and dimes are subtracted | 4.99 | 0 | 
| Program will determine the total number of pennies that make up a given amount of an input after quarters, dimes, and nickels are subtracted | 4.99 | 0 | 
| Program returns an array of quarters, dimes, nickels, and pennies | 4.99 | [19, 2, 0, 4] |

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

#### Install this application

_Clone this repository via Terminal using the following commands:_
* _$ cd desktop_
* _$ git clone {url to this repository}_
* _$ cd CoinCounter_
_Then, confirm that you have navigated to the CoinCounter project directory by entering "pwd" in Terminal._

_Next, install npm at the project's root directory via the following commands:_
* _$ npm install_
* _$ npm run build_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

_JavaScript, npm, webpack, Jest_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin, Patrick Delaney, Geoff Goetz_**
