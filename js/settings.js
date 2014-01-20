document.getElementById('back').addEventListener('click', function() {
  var activity = new MozActivity({
    name: 'configure',
    data: {
      target: 'device'
    }
  });

  // Close ourselves after the activity transition is completed.
  setTimeout(function() {
    window.close();
  }, 1000);
});
