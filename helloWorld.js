handlers.helloWorld = function ()
{
  var message = "Hello ";
  log.info(message);
  return { messageValue: message };
}