const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export function initializeMetaPixel() {
  if (!PIXEL_ID) {
    console.error("VITE_META_PIXEL_ID is missing");
    return;
  }

  if (window.fbq) return;

  !(function (f, b, e, v, n, t, s) {
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };

    if (!f._fbq) f._fbq = n;

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e);
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");

  console.log("Meta Pixel initialized:", PIXEL_ID);
}

export function trackMetaLead() {
  if (!window.fbq) {
    console.error("Meta Pixel is not initialized");
    return;
  }

  window.fbq("track", "Lead", {
    content_name: "Unity Rental Inquiry",
  });
}

export function trackRentalInquiry({ eventType, guestCount }) {
  if (!window.fbq) return;

  window.fbq("trackCustom", "RentalInquiry", {
    event_type: eventType,
    guest_count: guestCount,
  });
}