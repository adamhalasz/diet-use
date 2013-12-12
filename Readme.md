# Use
Require files, modules and directories too

### Install
```
npm install diet-use
```

### Require
- **files**: `use('/path/to/file.js')` - this includes a single file
- **modules**: `use('/path/to/module')` - this includes a default or a custom module
- **directories**: `use('/path/to/directory')` - This includes all `.js` files in a directory
	
### 


### How does module requireing work?
It will traverse up from the current directory to search for a module in a `node_modules` folder until it finds it. If no modules match it will try to inlcude the directory.

### Example
```
// file structure
- root
	- node_modules
		- matrix
	- project
		- server.js
```

```javascript
// in server.js
use('matrix');
```