var router = new FrontRouter();
console.log(router);
router.route('blue', function() {
  document.body.style.backgroundColor = 'blue';
})
router.route('yellow', function() {
  document.body.style.backgroundColor = 'yellow';
})
router.route('red', function() {
  document.body.style.backgroundColor = 'red';
})
