
const userLastCommitDate = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            for(let index = 0; index <= data.length; index++) {
                if (data[index].type === 'PushEvent') {
                    console.log(data[index].created_at)
                    break;
                }
            }
        })
}
userLastCommitDate('mario-a-welch')

   const wait = milliseconds => new Promise(resolve => {
       setTimeout(resolve, milliseconds)
   })
    wait(1000).then(() => console.log('Your promise resolved after 1 second!'));
    wait(3000).then(() => console.log('Your promise resolved after 3 second!'));

