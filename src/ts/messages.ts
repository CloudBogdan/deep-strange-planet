export default {
    err: {
        assetLoadError: (name: string)=> `Failed to load asset with name "${ name }"`,
        audioPlayError: (name: string)=> `Failed to play audio asset "${ name }"`,
        cantFindBlockByInChunkId: (id: string)=> `Can't find block by inChunkId "${ id }"`,
    }
}