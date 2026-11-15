// extensions.config.ts
import TextToSayPlugin from "./TextToSayPlugin.tsx";
import MinifyProject from "./MinifyProject.tsx";

export default {
  TextToSayPlugin,
  MinifyProject,
  defaultVisible: false,
} as const;