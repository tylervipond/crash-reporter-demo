# Crash Report Demonstration
This is a demonstration using a [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) to determine whether or not a tab is crashing.
The main thread basically has an interval that pings the worker every so often. The worker in turn pings a server with some "interesting" data. we can see that the worker continues to post after the thread has started locking up, but will also stop once the tab has finished crashing, presumably because there are no more connections to it. I also attempted it with a [DedicatedWorker](https://developer.mozilla.org/en-US/docs/Web/API/Worker), however I was able to observe that the worker stopped posting when the main thread locked up, and continued after the crash had completed. This isn't Ideal as not all crashes happen gracefully, some result in the entire browser crashing.

## Usage
1. `npm install`
2. `node server.js`
3. `npx serve .`
4. navigate to localhost:5000 in chrome