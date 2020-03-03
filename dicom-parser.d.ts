declare module dicomParser {
  type ByteArrayParser = {};

  interface DicomElement {
    readonly parser: unknown;
    readonly tag: string;
    readonly vr: string;
    readonly length: number;
    readonly dataOffset: number;
    readonly hadUndefinedLength: boolean;
  }

  interface ParseDicomOptions {
    untilTag?: string;
    vrCallback?: Function; // TODO unknown callback type
    inflater?: (byteArray: Uint8Array, position: number) => void;
  }

  class DataSet {
    readonly byteArray: Uint8Array;
    readonly elements: { [tag: string]: DicomElement };
    readonly byteArrayParser: unknown;

    uint16: (tag: string, index?: number) => ByteArrayParser | undefined;
    int16: (tag: string, index?: number) => ByteArrayParser | undefined;
    uint32: (tag: string, index?: number) => ByteArrayParser | undefined;
    int32: (tag: string, index?: number) => ByteArrayParser | undefined;
    float: (tag: string, index?: number) => ByteArrayParser | undefined;
    double: (tag: string, index?: number) => ByteArrayParser | undefined;
    numStringValues: (tag: string) => number | undefined;
    string: (tag: string, index?: number) => string | undefined;
    text: (tag: string, index?: number) => string | undefined;
    floatString: (tag: string, index?: number) => string | undefined;
    intString: (tag: string, index?: number) => string | undefined;
    attributeTag: (tag: string) => string | undefined;
  }

  function parseDicom(byteArray: Uint8Array, options?: ParseDicomOptions): DataSet;

  export { parseDicom, DataSet, DicomElement };
}
