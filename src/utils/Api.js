export default class Api {

  static fetchProfiles() {
      return fetch('http://localhost:8000/profiles').then(response => response.json())
      .then(json => {
        console.log('this');
				return json;
			})
			.catch(err => {
				throw err;
			});
    }



static newProfile(subject, body) {
  fetch(`http://localhost:8000/profiles`, {method: 'POST', body: JSON.stringify(body), headers: new Headers({'Content-Type': 'application/json'}) })
 .then(response => {
   return response;
 })
 .catch(err => {
   console.error(err);
 })
}





}
