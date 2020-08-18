# Peafox

*🔥🦊 A Firefox `user.js` for the optimal balance between privacy, security and compatibility.*

## Contents
- [Features](#features)
	- [Key Features](#key-features)
	- [Enhancing Features](#enhancing-features)
- **[Installation](#installation)**
- [Credits](#credits)

## Features

### Key Features
- Disabled Mozilla telemetry
	- Default browser agent and default browser check are both off by default.
	- Users are opted out of Mozilla Studies and Experiments.
	- Data reporting and pings are disabled.
- Removed reliance on Google services
	- This includes disabling [Safe Browsing](https://en.wikipedia.org/wiki/Google_Safe_Browsing)
	- Uses Mozilla Location Services as geolocation provider instead of Google
- DNS-over-HTTPS is enabled by default ([Firefox has begun adoption](https://blog.mozilla.org/blog/2020/02/25/firefox-continues-push-to-bring-dns-over-https-by-default-for-us-users/))
	- Default DoH provider is [LibreDNS](https://libredns.gr)
- New Tab Page URL can be changed without extensions.
	- See the [wiki](https://github.com/peacockweb/peafox/wiki/changing-the-new-tab-page).

### Enhancing Features
#### General
- [Pocket](https://getpocket.com) integration is disabled.
	- New Tab Page will not show Pocket stories either.
- Snippets and sponsored content is disabled.
- Downloads won't be saved to the Downloads directory automatically, users can choose where to save them.
- Cosmetic animations are turned off to improve performance.
- Recommended Extensions and Themes are disabled
- User agent can be changed in devtools

#### Network
- DNS and DNS provider changes (see [above](#key-features)).
- Encrypted SNI is enabled
- [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) Support is enabled
- All predictors and prefetching is turned off.
- Third party cookies are blocked, first party cookies are allowed.
- Tightened [Referrer header](https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) policy to stop tracking.
	- Referrer is only sent when full hostnames match.
	- Referrer will only contain scheme, host and port.
- Non-unicode domains are converted to Unicode to stop phishing

#### Geolocation
- Geolocation provider is set from Google to Mozilla.
- Geo-specific search defaults are disabled.
- Disable using the OS's geolocation service.

#### Privacy
- [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) values (buildID, platform, oscpu and appversion) are overridden to better protect against fingerprinting.
- Tracking elements are removed from URLs recommended by the browser.
- Onboarding and beacon are disabled.
- URLs are never trimmed and will always show the protocol.
- Crash reporting (breakpad) is disabled.
- [Battery Status API](https://www.w3.org/TR/battery-status/) which only serves as a fingerprintable detail, is disabeld.
- The "speculativeConnect" feature of the URL bar is disabled.
- Tracking Protection is set to strict.
	- Resists fingerprinting.
- URL bar suggestions of any kind are disabled.
- Autofill for forms, addresses and credit cards is disabled.
- Video statistics and [Widevine](https://widevine.com) (proprietary software by Google) are disabled.

## Installation

1. Simply download [user.js](user.js).
2. Visit `about:support` in Firefox to see your profile directory.
3. Copy [user.js](user.js) into your profile folder.

## Credits

- Many hardening enhancements were taken from [PrivacyTools.io](https://www.privacytools.io/browsers/#about_config) and [ghacks-user.js](https://github.com/ghacksuserjs/ghacks-user.js)
