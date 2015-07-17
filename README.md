# node-wcag [![Build Status](https://secure.travis-ci.org/cfpb/node-wcag-cli.png?branch=master)](http://travis-ci.org/cfpb/node-wcag-cli) [![Coverage Status](https://coveralls.io/repos/cfpb/node-wcag-cli/badge.svg)](https://coveralls.io/r/cfpb/node-wcag-cli)

WCAG and Section 508 accessibility audits from the command line.

![WCAG Screenshot](https://raw.githubusercontent.com/cfpb/node-wcag-cli/master/screenshot.png)

## Installation

```sh
$ npm install wcag-cli --global
```

## Usage

First, get a free [AChecker API ID](http://achecker.ca/register.php). Then:

```sh
$ wcag wikipedia.org --id=<achecker id>
```

Also works against localhost:

```sh
$ wcag localhost:8000 --id=<achecker id>
```

### Options

#### id

Type: `string`  

Your free [AChecker API ID](http://achecker.ca).

```sh
$ wcag wikipedia.org --id=845cc0a8435cb0a766396a8c56399a43df0c843
```

If an `id` is not passed on the command line,
the tool will check for an `ACHECKER_ID` environment variable.

#### guide

Type: `string`  
Choices: `508`, `WCAG1-A`, `WCAG1-AA`, `WCAG1-AAA`, `WCAG2-A`, `WCAG2-AA`, `WCAG2-AAA`, `BITV1`, `STANCA`
Default: `WCAG2-AA`

The accessbility guideline to validate against.

```sh
$ wcag wikipedia.org --id=<achecker id> --guide=508
$ wcag wikipedia.org --id=<achecker id> --guide=BITV1
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running node-wcag-cli locally

To contribute code, fork this repo, clone it down to your machine and use npm link:

```sh
$ npm uninstall -g wcag-cli
$ cd node-wcag
$ npm link
$ wcag whatever.com
```

### Running tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test.
To run tests, first install nodeunit and any dependencies via npm:

```sh
$ npm install
```

Run tests with:

```sh
$ npm test
```

## Related

- [node-wcag](https://github.com/cfpb/node-wcag) The API for this module

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/
