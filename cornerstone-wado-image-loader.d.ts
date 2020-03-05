/// <reference path="./cornerstone-core.d.ts"/>
/// <reference path="./dicom-parser.d.ts"/>

declare const cornerstoneWADOImageLoader: {
  external: {
    cornerstone: typeof cornerstone;
    dicomParser: typeof dicomParser;
  };
  webWorkerManager: {
    initialize: (config: {
      maxWebWorkers?: number;
      startWebWorkersOnDemand?: boolean;
      webWorkerTaskPaths?: string[];
      taskConfiguration?: {
        decodeTask?: {
          initializeCodecsOnStartup?: boolean;
          usePDFJS?: false;
          strict?: boolean;
        };
        sleepTask?: {
          sleepTime?: number;
        };
      };
    }) => void;
    terminate: () => void;
  };
  wadouri: {
    dataSetCacheManager: {
      unload: (imageId: string) => void;
    };
    fileManager: {
      add: (file: File) => string;
    };
  };
};
