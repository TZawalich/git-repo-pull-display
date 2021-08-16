# Github Repo Pull and Sort

## Description
Quickly pull, sort, and touch up the names of your public github repositories using an API call. 

Outputs the data as a list of links to each repo.

## How to Use
Copy in the code
- Set the repoContainer variable to where you'd like the outputted list to appear.
- Change the /USERNAME/ in the url to your github username.
- Update USERNAME within foreach loop (unless you want your github config files to show up on the list).
- Update the regex within the loop to manipulate how the title is displayed.
- Call the getRepos function.