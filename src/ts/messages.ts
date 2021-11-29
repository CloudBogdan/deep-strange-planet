export default {
    err: {
        animationLoadError: (name: string)=> `Failed to load asset "${ name }"`,
        audioPlayError: (name: string)=> `Failed to play audio asset "${ name }"`,
        cantFindBlockByInChunkId: (id: string)=> `Can't find block by inChunkId "${ id }"`,
    }
}