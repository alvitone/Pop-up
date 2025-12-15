(function () {
  // Create and inject Vue script if not already present
  if (typeof Vue === "undefined") {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/vue@3/dist/vue.global.js";
    script.onload = initPopupWidget;
    document.head.appendChild(script);
  } else {
    initPopupWidget();
  }

  function initPopupWidget() {
    const { createApp, ref } = Vue;

    // Create container for the widget
    const container = document.createElement("div");
    container.id = "popup-widget-container";
    document.body.appendChild(container);

    // Create the app
    const app = createApp({
      template: `
        <div v-if="isOpen" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;" @click="closePopup">
          <div style="background: white; padding: 20px; border-radius: 8px; max-width: 500px; width: 90%; box-shadow: 0 2px 10px rgba(0,0,0,0.2);" @click.stop>
            <button @click="closePopup" style="float: right; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
            <h2>{{ title }}</h2>
            <p>{{ message }}</p>
            <button @click="closePopup" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%;">{{ buttonText }}</button>
          </div>
        </div>
      `,
      setup() {
        const isOpen = ref(false);
        const title = ref("Popup Title");
        const message = ref("This is a simple popup component!");
        const buttonText = ref("Got it!");

        const openPopup = (options = {}) => {
          if (options.title) title.value = options.title;
          if (options.message) message.value = options.message;
          if (options.buttonText) buttonText.value = options.buttonText;
          isOpen.value = true;
        };

        const closePopup = () => {
          isOpen.value = false;
        };

        // Expose globally
        window.PopupWidget = {
          open: openPopup,
          close: closePopup,
        };

        return {
          isOpen,
          title,
          message,
          buttonText,
          openPopup,
          closePopup,
        };
      },
    });

    app.mount("#popup-widget-container");
  }
})();
