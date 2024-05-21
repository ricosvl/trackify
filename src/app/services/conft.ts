let host = ''

if(location.hostname.includes('localhost')) {
  host = 'http://localhost:3000';
} else {

}

export const SERVICE_CONF = {
  BASE_URL: host
}
