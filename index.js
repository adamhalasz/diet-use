
	// Use - Advanced Require v1
	/*
		Require Features:
		- require file
		- require module
		- require directory
	*/
	
	module.exports = function(base_path){
		//console.log('base_path = ', base_path);
		return function(Path){
			
			var path = base_path + '/' + Path;
			try {
				var stats = fs.lstatSync(path);
				
				// REQUIRE DIRECTORY
				if(stats.isDirectory()){
					var files = fs.readdirSync(path);
					
					for(var i = 0; i < files.length; i++){ 
						var file = path+'/'+files[i];
						var file_stats = fs.lstatSync(file);
						if(file_stats.isFile()){ require(file); } 
					}
				}
				
				// REQUIRE FILE
				if(stats.isFile()){
					require(path);
				} 
				
			} catch (error) {
				if(error.code == 'ENOENT'){
					// REQUIRE MODULE
					return require(path);
				} else {
					console.log(error);
					return null;
				}
			}
		}
	}