export class TMath {
    /**
     * Returns the provided rotation in radians.
     * @param degrees The rotation in degrees.
     */
    public static DegToRad( degrees: number ) : number {
        return degrees * Math.PI / 180.0;
    }

    /**
     * Returns the provided rotation in radians.
     * @param radians Te rotation in degrees
     */
    public static RadToDeg( radians: number): number {
        return radians * 180.0 / Math.PI;
    }

    /**
     * Returns value within the range of min/max.
     * @param value The value to be clamped.
     * @param min The min value.
     * @param max The max value.
     */
    public static Clamp( value: number, min: number, max: number ): number {
        if ( value < min ) {
            return min;
        }
        if ( value > max ) {
            return max;
        }
        return value;
    }
}