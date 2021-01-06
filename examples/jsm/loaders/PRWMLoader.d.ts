import {
	BufferGeometry,
	Loader,
	LoadingManager
} from '../../../src/Three';


export class PRWMLoader extends Loader {

	constructor( manager?: LoadingManager );

	load( url: string, onLoad: ( geometry: BufferGeometry ) => void, onProgress?: ( event: ProgressEvent ) => void, onError?: ( event: ErrorEvent ) => void ) : void;
	parse( data: ArrayBuffer ) : BufferGeometry;

	loadAsync( url: string, onProgress?: ( event: ProgressEvent ) => void ): Promise<BufferGeometry>;

	static isBigEndianPlatform(): boolean;

}
