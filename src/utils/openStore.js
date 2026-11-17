import { scrollToDownload } from "@/utils/scrollToDownload";

const SETTINGS_URL =
  "https://tsafi.e-solutionsgroup.org/api/v2/website/settings";

// One request shared by both navbars, cached after the first call
let linksPromise = null;

const getSiteLinks = () => {
  if (!linksPromise) {
    linksPromise = fetch(SETTINGS_URL, {
      headers: {
        Accept: "application/json",
        "Accept-Language": localStorage.getItem("language") || "ar",
      },
    })
      .then((res) => res.json())
      .then((json) => json?.data?.links ?? null)
      .catch(() => {
        linksPromise = null; // allow a retry on the next click
        return null;
      });
  }
  return linksPromise;
};

// Start loading early, so the links are ready before the first click
export const preloadSiteLinks = () => {
  getSiteLinks();
};

export const getMobileOS = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera || "";

  if (/android/i.test(ua)) return "android";

  // iPadOS 13+ reports itself as "Macintosh", so check touch support too
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";

  return "other";
};

export const handleDownloadClick = async () => {
  const os = getMobileOS();

  // Desktop: scroll to the footer download buttons
  if (os === "other") {
    scrollToDownload();
    return;
  }

  const links = await getSiteLinks();

  // Android: open Google Play immediately
  if (os === "android" && links?.google_play) {
    window.location.href = links.google_play;
    return;
  }

  // iPhone / iPad: open the App Store immediately
  if (os === "ios" && links?.app_store) {
    window.location.href = links.app_store;
    return;
  }

  // Last resort only (link missing, e.g. app_store is still null in the API)
  scrollToDownload();
};