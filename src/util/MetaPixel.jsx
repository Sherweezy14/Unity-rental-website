import ReactPixelImport from "react-facebook-pixel";

const ReactPixel = ReactPixelImport.default ?? ReactPixelImport;

const pixelId = import.meta.env.VITE_META_PIXEL_ID;

if (pixelId && typeof ReactPixel.init === "function") {
  ReactPixel.init(pixelId);
}

export default ReactPixel;
