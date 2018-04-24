import Raven from 'raven-js';

const sentry_key = 'b9d9d2c046b046e39487a58c6bd2a5f2';
const sentry_app = '1194666';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
