/* globals window, document */
( function() {

// Find the script element
var scripts = document.getElementsByTagName( "script" );
var script = scripts[ scripts.length - 1 ];

// Read the modules
var modules = script.getAttribute( "data-modules" );
var composite = script.getAttribute( "data-composite" ) || false;
var pathParts = window.location.pathname.split( "/" );
var effectsAll = [
	"effects/effect-blind",
	"effects/effect-bounce",
	"effects/effect-clip",
	"effects/effect-drop",
	"effects/effect-explode",
	"effects/effect-fade",
	"effects/effect-fold",
	"effects/effect-highlight",
	"effects/effect-puff",
	"effects/effect-pulsate",
	"effects/effect-scale",
	"effects/effect-shake",
	"effects/effect-size",
	"effects/effect-slide",
	"effects/effect-transfer"
];
var widgets = [
	"accordion",
	"autocomplete",
	"button",
	"checkboxradio",
	"controlgroup",
	"datepicker",
	"dialog",
	"draggable",
	"droppable",
	"menu",
	"mouse",
	"progressbar",
	"resizable",
	"selectable",
	"selectmenu",
	"slider",
	"sortable",
	"spinner",
	"tabs",
	"tooltip"
];

function getPath( module ) {
	for ( var i = 0; i < widgets.length; i++ ) {
		if ( widgets[ i ] === module ) {
			return "widgets/" + module;
		}
	}
	for ( var j = 0; j < effectsAll.length; j++ ) {
		if ( module !== "effect" ) {
			if ( effectsAll[ j ] === module ) {
				return module;
			}
			if ( effectsAll[ j ].indexOf( module ) !== -1 ) {
				return "effects/" + module;
			}
		}
	}
	return module;
}
function fixPaths( modules ) {
	for ( var i = 0; i < modules.length; i++ ) {
		modules[ i ] = getPath( modules[ i ] );
	}
	return modules;
}

// Hide the page while things are loading to prevent a FOUC
document.documentElement.className = "demo-loading";

require.config( {
	baseUrl: window.location.pathname.indexOf( "node-arc-d3/" ) !== -1 ? "node_modules/jquery-ui/ui/" : "../node_modules/jquery-ui/ui/",
	paths: {
                lodash: "../../lodash/lodash",
		jquery: "../external/jquery/jquery",
		external: "../external/",
//                d3sketch: "../demos/d3sketch",
                d3: "../../d3/build/d3",
//                d3: "../demos/d3.v4.min",
//                isthebest: "../demos/isthebest",
                fn_parsefile: "../../../js/libraries/fn_parsefile",
                n3lib: "../../../js/libraries/bun2-exportN3",
                jsonld: "../../jsonld/js/jsonld",
                fn_ldpsparql: "../../../js/libraries/fn_ldpsparql",
                fn_triplemodifications: "../../../js/libraries/fn_triplemodifications",
                parsetriples: "../../../js/parsetriples",
                urijs: "../../urijs/src/",
                triplemodifications: "../../../js/triplemodifications",
                createprimitives: "../../../js/createprimitives",
                d3sketch: "../../../js/d3sketch",
                sigma: "../../sigma/build/sigma.require"
             //   d3: "../../d3/build/d3"
	},
	shim: {
		"external/globalize/globalize.culture.de-DE": [ "external/globalize/globalize" ],
		"external/globalize/globalize.culture.ja-JP": [ "external/globalize/globalize" ],
                "sigma" : {  exports: "sigma" }
	}
} );

// Replace effects all shortcut modules with all the effects modules
if ( modules && modules.indexOf( "effects-all" ) !== -1 ) {
	modules = modules.replace( /effects-all/, effectsAll.join( " " ) );
}

modules = modules ? modules.replace( /^\s+|\s+$/g, "" ).split( /\s+/ ) : [];
if ( !composite ) {
        modules.push('dialog');
//	modules.push( pathParts[ pathParts.length - 2 ] );
}
modules = fixPaths( modules );

// pull in d3sketch into the modules array so that it is available to the scripts
modules.push('d3');
//modules.push('d3sketch');
modules.push('fn_parsefile');
modules.push('lodash');
modules.push('fn_ldpsparql');
modules.push('fn_triplemodifications');
modules.push('parsetriples');
modules.push('triplemodifications');
modules.push('createprimitives');
modules.push('d3sketch');
// push in the sigma
modules.push('sigma');

require( modules, function() {
	var newScript = document.createElement( "script" );

	document.documentElement.className = "";

	newScript.text = "( function() { " + script.innerHTML + " } )();";
	document.body.appendChild( newScript ).parentNode.removeChild( newScript );
} );

} )();
