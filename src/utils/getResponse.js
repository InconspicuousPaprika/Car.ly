import Promise from 'bluebird';

export default function getResponse(response) {
 return Promise.resolve(response)
 	.then(function(res) {
 		console.log('REss', res);
 	})
}
