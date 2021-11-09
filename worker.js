let mostRecentMessage = Date.now();
onmessage = function (e) {
  mostRecentMessage = Date.now();
};

setInterval(() => {
  const now = Date.now();
  const timeSinceLastMessage = String(now - mostRecentMessage);
  const params = new URLSearchParams({ timeSinceLastMessage });
  this.fetch(`http://localhost:3000?${params.toString()}`);
}, 2000);
