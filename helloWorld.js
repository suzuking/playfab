handlers.helloWorld = function (args)
{
		  var message = "Hello " + currentPlayerId + "!";
		    log.info(message);
			  return { messageValue: message };
}
