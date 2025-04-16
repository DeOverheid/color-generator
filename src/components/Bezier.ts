// Helper function to generate cubic-bezier string
function generateCubicBezierString(y1: number, y2: number): string {
    return `cubic-bezier(1, ${y1}, 0, ${y2})`;
}

// Function to calculate the Y value from given X value and control points
function calculateBezierY(t: number, y1: number, y2: number): { yValue: number, bezierString: string } {

    const P1Calc = 3 * Math.pow(1 - t, 2) * t * y1;
    const P2Calc = 3 * (1 - t) * Math.pow(t, 2) * y2;
    const P3Calc = Math.pow(t, 3);

    // Calculate the Y-value using the cubic Bezier formula
    const yValue = P1Calc + P2Calc + P3Calc;

    // Generate the bezier string
    const bezierString = generateCubicBezierString(y1, y2);

    return { yValue, bezierString };
}

export { calculateBezierY, generateCubicBezierString };
