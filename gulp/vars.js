const devel = 'devel/';
const deploy = 'deploy/';
const assetsSrc = `${devel}_assets/`;
const assetsDest = `${deploy}_assets/`;
const bower = 'bower_components/';
const offline = `${assetsDest}offline/`;

const paths = {

	deploy: `./${deploy}**/*`,

	delete: {
		development: [
			`${deploy}**/*`,
			`${deploy}.htaccess`
		],
		production: [

		]
	},


	html: {
		src: `${devel}**/*.html`,
		dest: deploy,
		bs: `${deploy}**/*.html`
	},

	styles: {

		all: {
			src: `${assetsSrc}sass/main.scss`,
			dest: `${assetsDest}generated/`,
			watch: `${assetsSrc}sass/**/*.+(scss|sass)`
		},
		bs:`${assetsDest}generated/*.css`
	},

	scripts: {
		all: {
			src: `${assetsSrc}scripts/`,
			dest: `${assetsDest}generated/`,
			watch: `${assetsSrc}scripts/**/*.js`,
		},
		bs: `${assetsDest}generated/*.js`,
		webpack: {
			entry: `${assetsSrc}scripts/index.js`,
			bundle: `${assetsDest}generated/`
		}
	},

	sassUtils: {

		bourbon: {
			src: `${bower}bourbon/app/assets/stylesheets/**/*.+(scss|sass)`,
			dest: `${assetsSrc}sass/utils/bourbon/`
		},
		normalize: {
			src: `${bower}normalize-scss/sass/**/*.+(scss|sass)`,
			dest: `${assetsSrc}sass/utils/normalize/`
		}
	},

	libs: {
		jquery: {
			src: `${bower}jquery/dist/jquery.min.js`,
			dest: `${assetsDest}offline/`
		},

		jquerySlim: {
			src: `${bower}jquery/dist/jquery.slim.min.js`,
			dest: `${assetsDest}offline/`
		},

		semantic: {
			src: `${bower}semantic/dist/**/*`,
			dest: `${assetsDest}offline/semantic`,
			js: `${bower}semantic/dist/semantic.min.js`
		},

		gsap: {
			src: `${bower}gsap/src/minified/**/*.js`,
			dest: `${assetsDest}offline/gsap/`
		}
	},

	data: {
		images: {
			src: `${assetsSrc}images/**/*.+(jpg|jpeg|png|svg|gif)`,
			dest: `${assetsDest}images/`
		},
		json: {
			src: `${assetsSrc}json/**/*.json`,
			dest: `${assetsDest}`
		},
		fonts: {
			src: `${assetsSrc}fonts/**/*.+(ttf|otf|woff|woff2|svg|eot)`,
			dest: `${assetsDest}`
		},
		yml: {
			watch: `${devel}_data/**/*.yml`
		}
	},

	merged: {
		dest: `${assetsDest}offline/merged/`
	}
};


const renderedNames = {
	javascript: {

		/* MY MERGED JAVASCRIPT */
		scripts: 'scripts.js',

		/* MERGED LIBS */
		semantic: 'semantic.min.js',
		all: 'libs.min.js'
	}
};

const ignoreModernizr = `!${paths.scripts.all.src}autogenerated/modernizr.js`;
const watchedJsFiles = [ignoreModernizr, paths.scripts.all.src];
const filterObject = (obj,newObj, exclude) => {
	Object.keys(obj).forEach(function (key) {
		if (key !== exclude) {
			if (typeof(obj[key]) === "object") {
				newObj[key] = {};
				filterObject(obj[key],newObj[key]);
			} else {
				newObj[key] = obj[key];
			}
		}
	});
};

export {paths, ignoreModernizr, watchedJsFiles, renderedNames, filterObject, devel, deploy, assetsSrc, assetsDest};