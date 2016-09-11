##### These are my solutions to problems from the book *Cracking the Coding Interview* (5th edition) in Javascript. I am also adding my implementations of common data structures. #####

The problems in the book are created for Java and C++ so not all are well suited for Javascript. Whenever possible, I have tried to do problems in the way the authors intended them to be done (for example, not using arrays to implement things like linked lists, stacks, and queues).

I welcome any and all feedback– there are any issues, please feel free to add a Github issue. Additionally, I encourage contributions to this project. If you have your own solution in Javascript, please make a pull request. 

# Running the tests

Make sure you have `testem` – install it globally using npm with
`npm install testem -g`

Don't have `npm` or `node` installed? [Install those first](http://nodejs.org/)and then install `testem`. 

To run all the tests, run `testem`. 

To run a single test,  you can either modify the list of src_files in `testem.json` or add `.only` to the tests you want to run. For example,
```javascript
context('when the element is in the binary search tree', function() {
```
would become 
```javascript
context.only('when the element is in the binary search tree', function() {
```
if you only wanted to run the tests in that context. 
