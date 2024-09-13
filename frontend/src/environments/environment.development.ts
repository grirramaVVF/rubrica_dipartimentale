export const environment = {
  production: false,
  homeLink: '/',
  apiCreateToken: 'http://localhost:3000/createtoken',
  apiGetHome: 'http://localhost:3000/ufficiRubrica',
  // generata con openssl rand -hex 64 per HS512
  jwtKey: '9f794ebaa59c4a6d7002292f46dfafdc2f5f2cb9bc87c1d2038bfa6ba4de25f25a53ea5b0881fb468f338639138bd0efd7815a2da25395a9b8ade17973af50e6'
};
