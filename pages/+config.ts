import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
export default {
  title: "My Vike App",
  passToClient: ["routeParams"],
  stream: true,
  injectScriptsAt: "STREAM",
  extends: vikeSolid,
} satisfies Config;
