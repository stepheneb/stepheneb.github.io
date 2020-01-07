stepheneb.github.io
===================

Using gulp, node, and browsersync locally to implement live browser reload and a task for generating pdf of resume.

```
    $ gulp --tasks
    Tasks for ~/dev/stepheneb.github.io/gulpfile.esm.js
    ├─┬ default  Start server and use browsersync to watch files and update pages.
    │ └─┬ <series>
    │   ├── serve
    │   └── watch
    └── pdf      Generate a PDF of the resume page using applescript and Safari
```

Enable live reload using gulp and browsersync

```
    $ gulp
```

To re-generate resume.pdf after making changes:

```
    $ gulp pdf
```

**Local Development Prerequisites**

1. Install nvm: https://github.com/nvm-sh/nvm

2. Use `nvm` to install node v12.14.0.

```
    $ nvm install v12.14.0
```

3. Install gulp: https://gulpjs.com/docs/en/getting-started/quick-start


**Local development**

```
    $ git checkout git@github.com:stepheneb/stepheneb.github.io.git
    $ cd stepheneb.github.io
    $ npm install
```

**References**

1. Node.js

    Node is a JavaScript runtime built on Chrome's V8 JavaScript engine.

    This project is tested using Node v12.14.0.

    https://nodejs.org/docs/v12.14.0/api/

2. nvm

    https://github.com/nvm-sh/nvm

    Node Version Manager is a POSIX-compliant bash script to manage multiple active node.js versions

3. Gulp

    Gulp is a task managements system running on node with tasks described in JavaScript.

    Quick Start https://gulpjs.com/docs/en/getting-started/quick-start

    The gulpfile script is using CJS (CommonJS) for module references. This is the same architecture as used in Node for referencing modules: https://nodejs.org/docs/v12.14.0/api/modules.html

    I enabled this when setting up the project by:

    1. Adding **esm** as a development module.

        `$ npm install --save-dev esm`

    2. Adding 'esm' to the name of the Gulpfile, so `gulpfile.js` became `gulpfile.esm.js`.

4. Browsersync

    Browsersync is a tool built on Node.js which can perform automatic browser reloading (as well as many other features) during development.

    https://www.browsersync.io/docs
