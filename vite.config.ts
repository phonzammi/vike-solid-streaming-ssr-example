import vikeSolid from "vike-solid/vite";
import type { UserConfig } from "vite";
import vike from "vike/plugin";

export default {
  plugins: [vike({}), vikeSolid()],
} satisfies UserConfig;