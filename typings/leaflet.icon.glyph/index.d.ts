// Type definitions for Leaflet.Icon.Glyph.js 0.2.0
// Project: https://github.com/Leaflet/Leaflet.Icon.Glyph
// Definitions by: Søren Raarup <https://github.com/rasor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

//export as namespace L2;

declare module "leaflet.icon.glyp"{

    import * as L3 from 'leaflet';

    export interface GlyphOptions extends L3.IconOptions {
        prefix?: string, //'',
        glyph?: string, //'home',
        glyphColor?: string,//'white',
        glyphSize?: string,//'11px',	// in CSS units
        glyphAnchor?: L3.PointExpression // [0, -7]	// In pixels, counting from the center of the image.
    }

    export interface Glyph {
        options?: GlyphOptions,
        //createIcon: function (): void,
        //_createGlyph: function (): void,
        //_setIconStyles: function (div: any, name: any): void,
    }

    export interface glyph {
        (options: GlyphOptions): Glyph
    }
}

