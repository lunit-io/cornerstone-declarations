/// <reference path="./cornerstone-core.d.ts"/>
/// <reference path="./dicom-parser.d.ts"/>

declare const cornerstoneWADOImageLoader: {
  external: {
    cornerstone: typeof cornerstone;
    dicomParser: typeof dicomParser;
  };
  webWorkerManager: {
    initialize: (config: object) => void;
  };
  wadouri: {
    dataSetCacheManager: {
      unload: (imageId: string) => void;
    };
  };
};
