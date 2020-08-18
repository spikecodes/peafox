// --------------------------
// PEAFOX PREF MODIFICATIONS
// --------------------------

// GENERAL
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("devtools.responsive.showUserAgentInput", true);

user_pref("browser.aboutConfig.showWarning", false);

user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.lastAppBuildId", "");

user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("startup.homepage_welcome_url", "about:newtab");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

user_pref("browser.urlbar.trimURLs", false);

// NETWORK
user_pref("network.trr.mode", 2); // Enable DNS-over-HTTPS by default
user_pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },
                                { \"name\": \"NextDNS\", \"url\": \"https://trr.dns.nextdns.io/\" },
                                { \"name\": \"LibreDNS\", \"url\": \"https://doh.libredns.gr/dns-query\" }]");
user_pref("network.trr.uri", "https://doh.libredns.gr/dns-query"); // Use LibreDNS for DNS Queries

user_pref("network.security.esni.enabled", true); // Encrypted SNI
user_pref("network.http.http3.enabled", true); // Enable HTTP3 Support

user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);

user_pref("network.IDN_show_punycode", true);  // Convert non-unicode domains to Unicode to stop phishing
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // Tighten referrer handling policy
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.cookie.cookieBehavior", 1); // Block third-party cookies

user_pref("dom.security.https_only_mode", true); // Enable HTTPS-only mode

// DISABLE SAFEBROWSING
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.pver", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");

// PRIVACY
user_pref("privacy.history.custom", true);

user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.firstparty.isolate", true);

user_pref("dom.battery.enabled", false); // Disable Battery Status API

user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches",	false);
user_pref("browser.urlbar.suggest.topsites", false);

user_pref("general.buildID.override", "");
user_pref("general.platform.override", "");
user_pref("general.oscpu.override", "");
user_pref("general.appversion.override", "4.0");

user_pref("browser.urlbar.maxCharsForSearchSuggestions", 75);
user_pref("browser.urlbar.trimURLs", false);

user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

user_pref("default-browser-agent.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", true);

user_pref("privacy.donottrackheader.enabled", false); // Resist DNT Fingerprinting

// DISABLE TELEMETRY
user_pref("beacon.enabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.rejected", true);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);

user_pref("browser.shell.checkDefaultBrowser", false); // Disable default browser check
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// DISABLE DATA REPORTING
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.sessions.current.clean", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.sessions.current.clean", true);

// DISABLE CRASH REPORTING
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// OPT OUT OF STUDIES & EXPERIMENTS
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.onboarding.enabled", false);
user_pref("experiments.enabled", false);
user_pref("network.allow-experiments", false);

// GEOLOCATION
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); // Use Mozilla's geolocation service not Google's
user_pref("geo.provider.network.compare.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

// NEWTAB PAGE
user_pref("browser.newtabpage.url", "about:newtab");

user_pref("browser.newtabpage.activity-stream.default.sites", "https://duckduckgo.com/,https://github.com/peacockweb/peafox/,https://startpage.com/");

user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.homepage_override.buildID", "");
user_pref("startup.homepage_override_url", "");

// TURN OFF AUTOFILL
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("signon.autofillForms", false);

// MEDIA
user_pref("media.video_stats.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.eme.enabled", false);

user_pref("media.gmp-manager.buildID", "");

// DISABLE POCKET
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");

// --------------------------
// END PEAFOX PREF MODIFICATIONS
// --------------------------
