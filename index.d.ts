/// <reference path="./cornerstone-core.d.ts"/>
/// <reference path="./dicom-parser.d.ts"/>
/// <reference path="./cornerstone-wado-image-loader.d.ts"/>
/// <reference path="./cornerstone-web-image-loader.d.ts"/>

declare module 'cornerstone-core' {
  export = cornerstone;
}

declare module 'cornerstone-wado-image-loader' {
  export = cornerstoneWADOImageLoader;
}

declare module 'cornerstone-web-image-loader' {
  export = cornerstoneWebImageLoader;
}

declare module 'dicom-parser' {
  export = dicomParser;
}
