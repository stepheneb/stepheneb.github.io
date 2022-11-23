stepheneb.github.io
===================

Using gulp, node, and browsersync locally to implement live browser reload and a task for generating pdf of resume.

To re-generate resume.pdf after making changes:

```
    % gulp pdf
```

**Local Development Prerequisites**

1. Install nvm: https://github.com/nvm-sh/nvm

2. Install gulp-cli globally: https://gulpjs.com/docs/en/getting-started/quick-start

```
% gulp -v
CLI version: 2.3.0
Local version: 4.0.2
```

**Local development**

```
% git checkout git@github.com:stepheneb/stepheneb.github.io.git
% cd stepheneb.github.io
% nvm use
Found '.nvmrc' with version <lts/gallium>
Now using node v16.18.0 (npm v8.19.2)
% npm install
```

**Start server and enable live reload using gulp and browsersync**

```
% gulp
[11:50:13] Requiring external module esm
[11:50:14] Using gulpfile ~/dev/00-stepheneb/stepheneb.github.io/gulpfile.esm.js
[11:50:14] Starting 'default'...
[11:50:14] Starting 'serve'...
[11:50:14] Finished 'serve' after 6.08 ms
[11:50:14] Starting 'watch'...
[Browsersync] Access URLs:
--------------------------------------
    Local: http://localhost:3001
    External: http://192.168.1.111:3001
--------------------------------------
        UI: http://localhost:3002
UI External: http://localhost:3002
--------------------------------------
[Browsersync] Serving files from: ./
```

**Generate resume.pdf**


**Broadcasting with ZeroConf/Bonjour**

After localserver is started on port 3000 start up `dns-sd`.

```
% dns-sd -P stepheneb _http._tcp . 3000 stepheneb.local `hostname`
Registering Service stepheneb._http._tcp host stepheneb.local port 3000
DATE: ---Tue 14 Jan 2020---
12:32:59.162  ...STARTING...
12:32:59.900  Got a reply for record stepheneb.local: Name now registered and active
12:32:59.900  Got a reply for service stepheneb._http._tcp.local.: Name now registered and active
```

Now other devices on local-area network with zeroconf/bonjour capability can connect
at this url: http://stepheneb.local:3000

**References**

1. Node.js

    Node is a JavaScript runtime built on Chrome's V8 JavaScript engine.

    This project is tested using Node lts/gallium (v16.18.0).

    https://nodejs.org/

2. nvm

    https://github.com/nvm-sh/nvm

    Node Version Manager is a POSIX-compliant bash script to manage multiple active node.js versions

3. Gulp

    Gulp is a task managements system running on node with tasks described in JavaScript.

    Quick Start https://gulpjs.com/docs/en/getting-started/quick-start

    The gulpfile script is using CJS (CommonJS) for module references. This is the same architecture as used in Node for referencing modules: https://nodejs.org/docs/v12.14.0/api/modules.html

    I enabled this when setting up the project by:

    1. Adding **esm** as a development module.

        `% npm install --save-dev esm`

    2. Adding 'esm' to the name of the Gulpfile, so `gulpfile.js` became `gulpfile.esm.js`.

4. Browsersync

    Browsersync is a tool built on Node.js which can perform automatic browser reloading (as well as many other features) during development.

    https://www.browsersync.io/docs
