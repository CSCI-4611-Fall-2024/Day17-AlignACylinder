/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'


export class ExampleApp extends gfx.GfxApp
{   
    public myCylinder: gfx.Mesh3;
    private cameraControls: gfx.OrbitControls;


    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

        this.cameraControls = new gfx.OrbitControls(this.camera);
        this.myCylinder = new gfx.Mesh3();
    }

    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.renderer.background = new gfx.Color(1, 1, 1);
        this.camera.setPerspectiveCamera(60, 1920/1080, 0.1, 10);
        this.cameraControls.setDistance(5);

        const ambientLight = new gfx.AmbientLight(new gfx.Color(0.25, 0.25, 0.25));
        this.scene.add(ambientLight);
        const directionalLight = new gfx.DirectionalLight(new gfx.Color(0.5, 0.5, 0.5));
        directionalLight.position.set(1, 1.5, 1)
        this.scene.add(directionalLight);

        const axes = gfx.Geometry3Factory.createAxes(2);
        this.scene.add(axes);

        this.myCylinder = gfx.Geometry3Factory.createCylinder(20, 0.1, 1);
        this.myCylinder.material.setColor(new gfx.Color(1, 1, 0.7));
        this.scene.add(this.myCylinder);

        // How do I set myClinder's localToParent matrix to make it align with some arbitrary axis?
        const axisVec = new gfx.Vector3(1,1,1);

    }


    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.cameraControls.update(deltaTime);
    }
}
