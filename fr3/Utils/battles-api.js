import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = 'http://localhost:8080';

export {getPublicStartupBattles, getPrivateStartupBattles};

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public`;
  return azios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private`;
  return azios.get(url).then(response => response.data);
  return azios.get(url, { headers: { Authorization: `Bearer $(getAccessToken())`}}).then(response.data);
}

