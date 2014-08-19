define([ 
	'src/util/util',
	'src/main/datas',
	'src/util/debug',
	'src/main/variable'
	], 

	function( Util, Datas, Debug, Variable, Versioning ) { // Ensures Data is loaded, although not compulsory

	

	var allVariables = {};

	function getVariable( varName ) {

		if( allVariables[ varName ] ) {
			return allVariables[ varName ];
		}

		return newVariable( varName );		
	}

	function newVariable( varName ) {

		allVariables[ varName ] = new Variable( varName );
		return allVariables[ varName ];
	}

	function setVariable( name, jpath, newData, filter ) {

		var variable = getVariable( name );
		var filterFunction = false;

		if( variable.killFilter ) {
			variable.killFilter();
		}

		variable.killFilter = false;

		if( filter ) {
			filterFunction = function( value, resolve, reject ) {
				
				require( [ filter ], function( filterFunction ) {
				
					if( filterFunction.kill ) {
						
						variable.killFilter = filterFunction.kill;
					}	

					if( filterFunction.filter ) {
						return filterFunction.filter( value, resolve, reject );
					}
					
					reject("No filter function defined");
				} );

			};
		}



		if( jpath ) {

			variable.setjPath( jpath, filterFunction );

		} else {
			
			variable.createData( [ name ], newData, filterFunction );
			
		}
	}

        function getNames () {
            return Object.keys(allVariables).sort();
        }

	return {
		getVariable: getVariable,
		setVariable: setVariable,
        getNames: getNames
	};
	
});
