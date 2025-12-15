(function () {
  // 🛑 Prevent double initialization
  if (window.__POPUP_WIDGET_LOADED__) return;
  window.__POPUP_WIDGET_LOADED__ = true;

  function loadVueAndInit() {
    if (typeof Vue === "undefined") {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/vue@3/dist/vue.global.prod.js";
      script.onload = initPopupWidget;
      document.head.appendChild(script);
    } else {
      initPopupWidget();
    }
  }

  function initPopupWidget() {
    const { createApp, ref } = Vue;

    // 🛑 Prevent duplicate container
    if (document.getElementById("popup-widget-container")) return;

    const container = document.createElement("div");
    container.id = "popup-widget-container";
    document.body.appendChild(container);

    const app = createApp({
      template: `
        <div v-if="isOpen"
          style="position:fixed; inset:0; background:rgba(0,0,0,.5);
                 display:flex; align-items:center; justify-content:center;
                 z-index:99999"
          @click="closePopup">

          <div style="background:#fff; padding:20px; border-radius:8px;
                      max-width:500px; width:90%; box-shadow:0 2px 10px rgba(0,0,0,.2)"
               @click.stop>

            <button @click="closePopup"
              style="float:right; background:none; border:none;
                     font-size:24px; cursor:pointer">×</button>

            <h2>{{ title }}</h2>
            <p>{{ message }}</p>

            <button @click="closePopup"
              style="margin-top:12px; padding:10px 20px;
                     background:#007bff; color:#fff; border:none;
                     border-radius:4px; cursor:pointer; width:100%">
              {{ buttonText }}
            </button>
          </div>
        </div>
      `,
      setup() {
        const isOpen = ref(false);
        const title = ref("Popup Title");
        const message = ref("This is a simple popup component!");
        const buttonText = ref("Got it!");

        function open(options = {}) {
          title.value = options.title || title.value;
          message.value = options.message || message.value;
          buttonText.value = options.buttonText || buttonText.value;
          isOpen.value = true;
        }

        function close() {
          isOpen.value = false;
        }

        // ✅ Stable public API
        window.PopupWidget = {
          open,
          close,
        };

        return { isOpen, title, message, buttonText, closePopup: close };
      },
    });

    app.mount(container);
  }

  // Ensure body exists
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadVueAndInit);
  } else {
    loadVueAndInit();
  }
})();
