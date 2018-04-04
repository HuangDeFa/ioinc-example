import { LoadingManager, BufferGeometry } from "three";

export declare class STLLoader {
    constructor(manager:LoadingManager);

    load:(url, onLoad, onProgress, onError)=>void; 

    parse:( data )=>boolean|BufferGeometry; 
}