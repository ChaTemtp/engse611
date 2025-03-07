// IFFE Syntax (Has it's own scope and runs right away)
(function () {
  const user = 'ANTONY';
  console.log(user);
  const hello = () => console.log('Hello from the AIETA');
  hello();
})();

// Params
(function (name) {
  console.log('Hello ' + name);
})('TE');

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})();
