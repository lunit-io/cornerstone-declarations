/// <reference path="./cornerstone-core.d.ts"/>
/// <reference path="./dicom-parser.d.ts"/>

declare module cornerstoneWADOImageLoader {
  export interface WebWorkerConfig {
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
  }
}

declare const cornerstoneWADOImageLoader: {
  external: {
    cornerstone: typeof cornerstone;
    dicomParser: typeof dicomParser;
  };
  webWorkerManager: {
    initialize: (config: cornerstoneWADOImageLoader.WebWorkerConfig) => void;
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
  wadors: {
    metaData: {
      getNumberString: (element: unknown, index?: number, defaultValue?: string) => unknown;
      getNumberValue: (element: unknown, index?: number) => unknown;
      getNumberValues: (element: unknown, minimumLength?: number) => unknown;
      getValue: (element: unknown, index?: number, defaultValue?: string) => unknown;
      metaDataProvider: (type: string, imageId: string) => unknown;
    };
    findIndexOfString: (data: unknown, str: string, offset?: number) => number;
    getPixelData: (
      uri,
      imageId,
      mediaType?: string,
    ) => Promise<{ contentType: string; imageFrame: { pixelData: Uint8Array } }>;
    loadImage: (imageId: string, options: unknown) => Promise<cornerstone.Image>;
    metaDataManager: {
      add: (imageId: string, metadata: unknown) => void;
      get: (imageId: string) => unknown;
      remove: (imageId: string) => void;
      purge: () => void;
    };
    register: (_cornerstone: typeof cornerstone) => void;
  };
};
