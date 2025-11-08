import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'keycloak_guardians',
  clientId: 'personal-management-system',
};

const keycloak = new Keycloak(keycloakConfig);

export const initKeycloak = (onAuthenticatedCallback) => {
  keycloak.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256'
  }).then((authenticated) => {
    if (authenticated) {
      onAuthenticatedCallback();
    } else {
      console.log("User is not authenticated");
    }
  }).catch((error) => {
    console.error("Keycloak initialization failed", error);
  });
};

export default keycloak;