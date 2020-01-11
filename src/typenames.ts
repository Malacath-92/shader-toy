'use strict';

export class Mouse {
    x: number = -1;
    y: number = -1;
    z: number = -1;
    w: number = -1;
}
export class NormalizedMouse {
    x: number = 0;
    y: number = 0;
}
export type Keys = number[];
export class RenderStartingData {
    Time: number = 0;
    Mouse: Mouse = new Mouse();
    NormalizedMouse: NormalizedMouse = new NormalizedMouse();
    Keys: Keys = [];
}

// Texture setting enums start at 1 so valid settings never implicitly convert to false
export enum TextureMagFilter {
    Linear  = "Linear",
    Nearest = "Nearest",
}
export enum TextureMinFilter {
    Nearest                 = "Nearest",
    NearestMipMapNearest    = "NearestMipMapNearest",
    NearestMipMapLinear     = "NearestMipMapLinear",
    Linear                  = "Linear",
    LinearMipMapNearest     = "LinearMipMapNearest",
    LinearMipMapLinear      = "LinearMipMapLinear",
}
export enum TextureWrapMode {
    Repeat  = "Repeat",
    Clamp   = "Clamp",
    Mirror  = "Mirror",
}

export type TextureDefinition = {
    Channel: number,
    File: string,
    Buffer?: string,
    BufferIndex?: number,
    LocalTexture?: string,
    RemoteTexture?: string,
    Self?: boolean,
    Mag?: TextureMagFilter,
    MagLine?: number,
    Min?: TextureMinFilter,
    MinLine?: number,
    Wrap?: TextureWrapMode
    WrapLine?: number,
};
export type AudioDefinition = {
    Channel: number,
    LocalPath?: string,
    RemotePath?: string,
    UserPath: string
};
export type UniformDefinition = {
    Name: string,
    Typename: string,
    Default: number[],
    Min?: number[],
    Max?: number[],
    Step?: number[]
};
export type BufferDependency = {
    Index: number,
    Channel: number
};
export type IncludeDefinition = {
    Name: string,
    File: string,
    Code: string,
    LineCount: number
};
export type BufferDefinition = {
    Name: string,
    File: string,
    Code: string,
    TextureInputs: TextureDefinition[],
    AudioInputs: AudioDefinition[],
    CustomUniforms: UniformDefinition[],
    UsesSelf: boolean,
    SelfChannel: number,
    Dependents: BufferDependency[],
    LineOffset: number
    Includes: IncludeDefinition[],
    UsesKeyboard?: boolean,
};

export type Diagnostic = {
    line: number,
    message: string
};
export type DiagnosticBatch = {
    filename: string,
    diagnostics: Diagnostic[]
};

export type BoxedValue<T> = { Value: T };
