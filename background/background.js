/**
 * Grab all timers from chrome.sync storage
 */
const getTimers = (propName = 'timers') =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.get(propName, timers => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      console.log('Grabbed timers out of sync.');
      const empty = Object.keys(timers).length <= 0;
      return resolve(empty ? { timers: [] } : timers);
    })
  );
/**
 * Add a single timer object to the chrome.sync storage
 */
const setNewTimer = (timeString, name) =>
  new Promise(async (resolve, reject) => {
    const timers = await getTimers();
    const createdAt = Date.now();
    timers.timers.push({ timeString, name, createdAt });
    return chrome.storage.sync.set(timers, () => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      console.log('Wrote new timestring into sync.');
      return resolve(timeString);
    });
  });
/**
 * Remove a single timer from the chrome.sync store
 */
const unstoreTimer = timeString =>
  new Promise(async (resolve, reject) => {
    const oldTimers = await getTimers();
    const timers = oldTimers.timers.filter(t => t.timeString !== timeString);
    return chrome.storage.sync.set({ timers }, () => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      console.log('Removed timer from sync.');
      return resolve();
    });
  });

/**
 * Create a notification given a timeString, createdAt, and name
 * displays some silly nonsense about how long it had been running
 */
const sendNotification = ({ timeString, createdAt, name = 'timeout!' }) =>
  chrome.notifications.create(timeString, {
    type: 'basic',
    iconUrl: 'timeout128.png',
    title: `${name}`,
    message: `Your timer has expired after ${(Date.now() - createdAt) / 1000}s`
  });

/**
 * set an alarm, given a valid timeString
 */
const makeAlarm = timeString =>
  chrome.alarms.create(timeString, {
    when: new Date(timeString).getTime()
  });

const setNewAlarm = async timer => {
  await setNewTimer(timer.timeString, timer.name);
  await makeAlarm(timer.timeString);
};

/**
 * Set our listener for when an alarm goes off, triggering a notification
 */
chrome.alarms.onAlarm.addListener(async alarm => {
  const timers = await getTimers();
  const timer = timers.timers.find(e => e.timeString === alarm.name);
  await sendNotification(timer);
  await unstoreTimer(alarm.name);
});

chrome.runtime.onMessage.addListener(async (timer, sender, sendRes) => {
  await setNewAlarm(timer);
  return sendRes({ message: 'successfully set alarm' });
});

/**
 * Recursively load alarms from chrome.sync storage of timers
 */
const loadUpAlarms = async () => {
  const timers = await getTimers();
  timers.timers.forEach(async timer => {
    if (new Date(timer.timeString).getTime() <= Date.now()) {
      await sendNotification(timer);
      unstoreTimer(timer.timeString);
    }
    makeAlarm(timer.timeString);
  });
};
loadUpAlarms();
