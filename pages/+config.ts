import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.js";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "My Vike App",
  stream: true,
  injectScriptsAt: "STREAM",
  extends: vikeSolid,
} satisfies Config;
