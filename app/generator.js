// syntax
'use strict'
// modules
import 'babel-polyfill';
import {Base as Yeoman} from 'yeoman-generator';
import {default as Util} from 'util';
import {default as Chalk} from 'chalk';
import {default as Yosay} from 'yosay';
import {default as Path} from 'path';

// extend the yeoman.base and export as module
export default class Generator extends Yeoman {

  constructor(...args) {
    super(...args);

    this.argument('appName', {
      type: String,
      defaults: Path.basename(process.cwd())
    });
  }

  initializing() {
    this.props = {};
  }

  get prompting() {

    return {

      greeting() {
        // greeting
        console.log(Yosay('\'Ey \'Yo! So, u wanna start with your next project? Alright!'));
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
