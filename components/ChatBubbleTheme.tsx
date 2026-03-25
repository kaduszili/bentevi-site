"use client";

import { useEffect } from "react";

export default function ChatBubbleTheme() {
  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const bottomY = scrollY + viewportHeight;

      const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]");
      let currentTheme = "dark";

      sections.forEach((section) => {
        if (section.offsetTop <= bottomY - 80) {
          currentTheme = section.dataset.navbarTheme ?? "dark";
        }
      });

      const host = document.getElementById("kai-widget-host");
      if (!host) return;

      const shadow = host.shadowRoot;
      const singleClasses = [
        ".kai-bubble-label",
        ".kai-welcome-title",
        ".kai-welcome-desc",
        ".kai-welcome-close",
        ".kai-header-name",
        ".kai-header-desc",
        ".kai-input",
        "#kaiBack",
        "#kaiMenu",
        "#kaiClose",
      ];
      const multiClasses = [".kai-welcome-link", ".kai-msg-meta"];

      const applyColor = (color: string) => {
        singleClasses.forEach((cls) => {
          shadow?.querySelector<HTMLElement>(cls)?.style.setProperty("color", color);
        });
        multiClasses.forEach((cls) => {
          shadow?.querySelectorAll<HTMLElement>(cls).forEach((el) => {
            el.style.setProperty("color", color);
          });
        });
      };

      if (currentTheme === "dark") {
        host.style.setProperty("--kai-bubble-bg", "#000000");
        host.style.setProperty("--kai-bubble-icon", "#ffffff");
        applyColor("#ffffff");
      } else {
        host.style.setProperty("--kai-bubble-bg", "#ffffff");
        host.style.setProperty("--kai-bubble-icon", "#111111");
        applyColor("#111111");
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return null;
}
