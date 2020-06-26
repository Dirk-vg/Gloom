import {Camera, Color, Scene, WebGLRenderer, WebGLRendererParameters} from "three";
import {Level} from "../Level";

export class Renderer {
    private _internal: WebGLRenderer;
    private width: Scene;
    private height: Camera;

    public constructor(canvasElement: HTMLCanvasElement) {
        let params: WebGLRendererParameters = {
            canvas: canvasElement
        };
        this._internal = new WebGLRenderer( params );

        this._internal.setClearColor( new Color( 0.8, 0.8, 1 ) );
    }

    public update( dt: number ): void {
        this._internal.clear();
    }

    public Render( dt: number, level: Level, camera: Camera ): void {
        this._internal.render( level.InternalScene, camera);
    }

    public OnResize( width: number, height: number): void {
        this._internal.setSize( width, height );
    }
}