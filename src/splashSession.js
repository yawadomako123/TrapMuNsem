export const SEEN_KEY = 'tmn-splash-seen'

// The splash shows once per browser session, so moving around the site doesn't replay it.
export function shouldShowSplash() {
  try {
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return true
  }
}

export function markSplashSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    // private mode: the splash simply shows again next visit
  }
}
