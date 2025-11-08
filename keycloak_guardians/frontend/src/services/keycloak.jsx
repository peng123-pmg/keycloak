// import Keycloak from 'keycloak-js'

// const keycloakConfig = {
//   url: 'http://localhost:8080',
//   realm: 'keycloak_guardians',
//   clientId: 'personal-management-system',
// }

// const keycloak = new Keycloak(keycloakConfig)

// export const initKeycloak = (onAuthenticatedCallback) => {
//   keycloak.init({
//     onLoad: 'check-sso',
//     pkceMethod: 'S256'
//   }).then((authenticated) => {
//     if (authenticated) {
//       onAuthenticatedCallback()
//     } else {
//       console.log("用户未认证")
//     }
//   }).catch((error) => {
//     console.error("Keycloak 初始化失败", error)
//   })
// }

// export default keycloak



import Keycloak from 'keycloak-js'

const keycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'keycloak_guardians',
  clientId: 'personal-management-system',
}

const keycloak = new Keycloak(keycloakConfig)

export const initKeycloak = (onAuthenticatedCallback) => {
  keycloak.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
    checkLoginIframe: false
  }).then((authenticated) => {
    console.log('Keycloak 初始化完成，认证状态:', authenticated)
    if (authenticated) {
      onAuthenticatedCallback()
    } else {
      console.log("用户未认证，显示登录页面")
    }
  }).catch((error) => {
    console.error("Keycloak 初始化失败", error)
  })
}

export default keycloak