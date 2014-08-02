
	// Use - Advanced Require v1
	/*
		Require Features:
		- require file
		- require module
		- require directory
	*/
	var fs = require('fs');
	module.exports = function(base_path){
		return function(Path){
			var $path = base_path + '/' +Path;
			try {
				var stats = fs.lstatSync($path);
				
				// REQUIRE DIRECTORY
				if(stats.isDirectory()){
					var files = fs.readdirSync($path);
					
					for(var i = 0; i < files.length; i++){ 
						var file = $path+'/'+files[i];
						var file_stats = fs.lstatSync(file);
						if(file_stats.isFile() && path.extname($path+'/'+files[i]) == '.js'){ require(file); } 
					}
				}
				
				// REQUIRE FILE
				if(stats.isFile()){
					require($path);
				} 
				
			} catch (error) {
				if(error.code == 'ENOENT'){
					// REQUIRE MODULE
					return require($path);
				} else {
					throw new Error(error);
					return null;
				}
			}
		}
	}