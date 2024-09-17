import { KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      loadUserProfileAtStartUp: false,
      initOptions: {
        checkLoginIframe: false,
        onLoad: 'login-required',
      },
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}
