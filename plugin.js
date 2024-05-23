/**
 * KeeWeb plugin: theme-catppuccin-mocha
 * @author Henrique Oliveira
 * @license MIT
 */

import { instance } from "models/app-settings-model";
import { isDesktop } from "util/feature-detector";

const FIRST_RUN_KEY = "keeweb-mojave-first-run";
const PREVIOUS_TITLEBAR_STYLE_KEY = "keeweb-mojave-previous-titlebar-style";

if (isDesktop) {
  if (!localStorage.getItem(FIRST_RUN_KEY)) {
    localStorage.setItem(FIRST_RUN_KEY, true);
    localStorage.setItem(
      PREVIOUS_TITLEBAR_STYLE_KEY,
      instance.get("titlebarStyle"),
    );
    instance.set("titlebarStyle", "hidden");
  }
}

export function uninstall() {
  localStorage.removeItem(FIRST_RUN_KEY);
  localStorage.removeItem(PREVIOUS_TITLEBAR_STYLE_KEY);
}

