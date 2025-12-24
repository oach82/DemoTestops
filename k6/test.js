import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5, // Usuarios concurrentes
  duration: '1m', // Tiempo de jejcucion
};

export default function () {
  const rand = Math.random();

  let url;
  if (rand < 0.7) {
    url = 'http://demo-app/status/200';
  } else if (rand < 0.9) {
    url = 'http://demo-app/status/400';
  } else {
    url = 'http://demo-app/status/500';
  }

  const res = http.get(url, { timeout: '5s' });

  check(res, {
    'status is 2xx': (r) => r.status >= 200 && r.status < 300,
  });

  sleep(Math.random());
}
