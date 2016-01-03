// syntax
'use strict'
// modules
import 'babel-polyfill';
import {Base} from 'yeoman-generator';
import util from 'util';
import chalk from 'chalk';
import yosay from 'yosay';
import path from 'path';

// extend the yeoman.base and export as module
export default class Generator extends Base {

  constructor(...args) {
    super(...args);

    this.argument('appName', {
      type: String,
      defaults: path.basename(process.cwd())
    });
  }

  initializing() {
    this.props = {};
  }

  get prompting() {

    return {

      greeting() {
        // greeting
        console.log(yosay('\'Ey \'Yo! So, u wanna start with your next project? Alright!'));
      },

      appName() {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'appName',
          message: 'What\'s application name?',
          default: this.appName
        }];

        this.prompt(prompts, ( { appName } ) => {
          this.options.appName = appName;
          // resolve
          done();
        });
      }
    };
  }

  writing() {
    // Write your files
    this.fs.write(this.destinationPath('README.md'), `# The name is: ${ this.options.appName }\n`);
    this.config.set('props', this.props);
  }

  default() {
    // Compose here with others Yeoman generator
  }

  installing() {
    // Install dependencies
  }

  end() {
    // End message
    this.log('End of generator-yeoman-boilerplate-es6!');
  }
}
