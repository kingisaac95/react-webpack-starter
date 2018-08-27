# React Webpack Starter

> A simple React, Webpack 4 boilerplate to help you kick-start your next React project.

![NpmVersion](https://img.shields.io/npm/v/npm.svg)
[![Build Status](https://travis-ci.org/kingisaac95/react-webpack-starter.svg?branch=feature%2Fdevelop)](https://travis-ci.org/kingisaac95/react-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/kingisaac95/react-webpack-starter/badge.svg?branch=feature%2Fdevelop)](https://coveralls.io/github/kingisaac95/react-webpack-starter?branch=master)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

<img width="1440" alt="screen shot 2018-08-21 at 9 02 00 pm" src="https://user-images.githubusercontent.com/26261917/44426324-42d11700-a586-11e8-8e05-8d09bafb9f84.png">

## Installation

```sh
git clone https://github.com/kingisaac95/react-webpack-starter.git
```

Change directory

```sh
cd react-webpack-starter
```

Install Package dependencies

```sh
npm install
```

Run the application

```sh
npm start
```

Run test

```sh
npm run test
```

Run Coverage

```sh
npm run report-coverage
```

## Docker

Build the image with the command

```sh
docker build . -t react-webpack-starter
```

This builds the image with the tag `react-webpack-starter`. Once this is completed, you can instantiate the container with the image with the command

```sh
docker run -p 8080:8080 -v rws:/app react-webpack-starter:latest
```

## Using Makefile

Build Docker Image

```sh
make build-docker
```

Run Docker Image

```sh
make run-docker
```

Generate Production Build

```sh
make build
```

## Release History

* 0.1.1
  * Dockerize application
  * Add Makefile
  * Update Readme and add badges
  * Setup Travis build and add tests
* 0.1.0
  * The first proper release
  * Added first few basic components with styling
* 0.0.1
  * Work in progress

## Meta

Orjiewuru Kingdom – [@kingisaac95](https://twitter.com/kingisaac95) – kingdom.orjiewuru@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/kingisaac95/react-webpack-starter](https://github.com/kingisaac95/)

## Contributing

1. Fork it (<https://github.com/kingisaac95/react-webpack-starter/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Security Vulnerabilities

If you discover a security vulnerability within React Webpack Starter, please send an e-mail to Orjiewuru Kingdom at kingdom.orjiewuru@gmail.com. All security vulnerabilities will be promptly addressed.

## Credits

* [W3C](https://www.w3schools.com/w3css/tryw3css_templates_coming_soon.htm) - Coming Soon Template
* Prosper Otemuyiwa - Laravel Hackathon Starter Readme structure

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the word!

Don't forget to [follow me on twitter!](https://twitter.com/kingisaac95)

Thanks! Orjiewuru Kingdom.

## License

The MIT License (MIT). Please see [License File](https://github.com/kingisaac95/react-webpack-starter/blob/master/LICENSE) for more information.
