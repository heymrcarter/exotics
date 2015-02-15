module.exports = {
	sessionSecret: 'developmentSessionSecret',
	db: 'mongodb://localhost/exotics-development',
	facebook: {
		clientId: '1608234912740149',
		clientSecret: 'd804227588b4cee8e7bb81f4d168a6b9',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientId: 'j8dg4Szeho4ITr32W3c0rx5HZ',
		clientSecret: 'XEGRH3UolWTNJUhOkeS8f9VneRlPOm5988w9CtRbkbsrLLnOFO',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientId: '714688627121-m9ocari3m15shtt2purm357q68ba258u.apps.googleusercontent.com',
		clientSecret: 'LCa9XcXBfuxkNt_v8CYbfMAS',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};