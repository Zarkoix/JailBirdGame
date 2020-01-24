exports.onRouteUpdate = ({ location }) => {
  // Don't track while developing.
  if (process.env.NODE_ENV !== `production`) {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("trackCustom", "SplashPageView", location.pathname)
      }
    }
  }
}
