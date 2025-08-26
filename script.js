// let buttons = document.querySelectorAll("button");
// let input = document.querySelector("#box-input");

// let string = "";
// let arr = Array.from(buttons);

// let a, b, c, d;
// let eqnMode = false;   // quadratic/cubic mode active?
// let eqnStep = 0;       // which step we’re at
// let degree = 0;        // equation degree (2 or 3)

// // ----------- Cubic Solver Function -----------
// function solveCubic(a, b, c, d) {
//     if (a === 0) return ["Not a cubic equation"];

//     // Normalize
//     let A = b / a, B = c / a, C = d / a;
//     let p = B - (A * A) / 3;
//     let q = (2 * A * A * A) / 27 - (A * B) / 3 + C;
//     let Δ = (q * q) / 4 + (p * p * p) / 27;

//     let roots = [];

//     if (Δ > 0) {
//         // One real, two complex
//         let sqrtΔ = Math.sqrt(Δ);
//         let u = Math.cbrt(-q / 2 + sqrtΔ);
//         let v = Math.cbrt(-q / 2 - sqrtΔ);
//         let y = u + v;
//         roots.push((y - A / 3).toFixed(4));

//         let real = (-y / 2 - A / 3).toFixed(4);
//         let imag = ((Math.sqrt(3) / 2) * (u - v)).toFixed(4);
//         roots.push(`${real} + ${imag}i`);
//         roots.push(`${real} - ${imag}i`);
//     } else if (Δ === 0) {
//         // Multiple roots
//         let u = Math.cbrt(-q / 2);
//         let y1 = 2 * u;
//         let y2 = -u;
//         roots.push((y1 - A / 3).toFixed(4));
//         roots.push((y2 - A / 3).toFixed(4));
//         roots.push((y2 - A / 3).toFixed(4));
//     } else {
//         // Three real roots
//         let phi = Math.acos(-q / (2 * Math.sqrt(-(p * p * p) / 27)));
//         let t = 2 * Math.sqrt(-p / 3);

//         let x1 = t * Math.cos(phi / 3) - A / 3;
//         let x2 = t * Math.cos((phi + 2 * Math.PI) / 3) - A / 3;
//         let x3 = t * Math.cos((phi + 4 * Math.PI) / 3) - A / 3;

//         roots.push(x1.toFixed(4));
//         roots.push(x2.toFixed(4));
//         roots.push(x3.toFixed(4));
//     }

//     return roots;
// }

// // ----------- Main Calculator Logic -----------
// arr.forEach(button => {
//     button.addEventListener("click", (evt) => {
//         let val = evt.target.innerText;

//         // -------- Normal calculator mode --------
//         if (!eqnMode) {
//             if (val == "=") {
//                 try {
//                     string = eval(string);
//                     input.value = string;
//                 } catch {
//                     input.value = "Error";
//                 }
//             }
//             else if (val == "AC") {
//                 string = "";
//                 input.value = string;
//             } 
//             else if (val == "DEL") {
//                 string = string.substring(0, string.length - 1);
//                 input.value = string;
//             } 
//             else if (val == "EQN") {
//                 eqnMode = true;
//                 eqnStep = 0;
//                 string = "";
//                 input.value = "Degree? (2 or 3)";
//             } 
//             else {
//                 string += val;
//                 input.value = string;
//             }
//         } 
        
//         // -------- EQN mode (Quadratic or Cubic) --------
//         else {
//             if (val == "=") {
//                 if (eqnStep === 0) {
//                     degree = parseInt(string);
//                     string = "";
//                     if (degree === 2) {
//                         eqnStep = 1;
//                         input.value = "Enter A:";
//                     } else if (degree === 3) {
//                         eqnStep = 1;
//                         input.value = "Enter A:";
//                     } else {
//                         input.value = "Invalid degree!";
//                         eqnMode = false;
//                     }
//                 } 
//                 // Quadratic case
//                 else if (degree === 2) {
//                     if (eqnStep === 1) {
//                         a = parseFloat(string); string = "";
//                         eqnStep++; input.value = "Enter B:";
//                     } else if (eqnStep === 2) {
//                         b = parseFloat(string); string = "";
//                         eqnStep++; input.value = "Enter C:";
//                     } else if (eqnStep === 3) {
//                         c = parseFloat(string); string = "";
//                         eqnMode = false;

//                         let dsc = b*b - 4*a*c;
//                         if (dsc > 0) {
//                             let r1 = (-b + Math.sqrt(dsc)) / (2*a);
//                             let r2 = (-b - Math.sqrt(dsc)) / (2*a);
//                             input.value = `Roots: ${r1.toFixed(2)}, ${r2.toFixed(2)}`;
//                         } else if (dsc === 0) {
//                             let r = (-b) / (2*a);
//                             input.value = `Root: ${r.toFixed(2)}`;
//                         } else {
//                             let real = (-b / (2*a)).toFixed(2);
//                             let imag = (Math.sqrt(-dsc) / (2*a)).toFixed(2);
//                             input.value = `Roots: ${real} ± ${imag}i`;
//                         }
//                     }
//                 } 
//                 // Cubic case
//                 else if (degree === 3) {
//                     if (eqnStep === 1) {
//                         a = parseFloat(string); string = "";
//                         eqnStep++; input.value = "Enter B:";
//                     } else if (eqnStep === 2) {
//                         b = parseFloat(string); string = "";
//                         eqnStep++; input.value = "Enter C:";
//                     } else if (eqnStep === 3) {
//                         c = parseFloat(string); string = "";
//                         eqnStep++; input.value = "Enter D:";
//                     } else if (eqnStep === 4) {
//                         d = parseFloat(string); string = "";
//                         eqnMode = false;

//                         let roots = solveCubic(a, b, c, d);
//                         input.value = "Roots: " + roots.join(", ");
//                     }
//                 }
//             } else {
//                 string += val;
//                 input.value = string;
//             }
//         }
//     });
// });
let buttons = document.querySelectorAll("button");
let input = document.querySelector("#box-input");

let string = "";
let arr = Array.from(buttons);

let eqnMode = false;   // whether user is entering equation mode
let eqnDegree = 0;     // degree (2 or 3)
let eqnCount = 0;      // number of coefficients entered
let coeffs = [];       // stores coefficients (a, b, c, d)

// ---------- Helper Functions ----------
function clearInput() {
    string = "";
    input.value = "";
}

function deleteLast() {
    string = string.slice(0, -1);
    input.value = string;
}

function calculateNormal() {
    try {
        string = eval(string);
        input.value = string;
    } catch {
        input.value = "Error";
    }
}

// ---------- Equation Functions ----------
function startEquationMode() {
    eqnMode = true;
    eqnDegree = 0;
    eqnCount = 0;
    coeffs = [];
    clearInput();
    input.value = "Enter Degree (2 or 3): ";
}

function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Roots: ${root1}, ${root2}`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return `Root: ${root}`;
    } else {
        let real = (-b / (2 * a)).toFixed(2);
        let imag = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        return `Roots: ${real} + ${imag}i, ${real} - ${imag}i`;
    }
}

function solveCubic(a, b, c, d) {
    // Normalize equation ax^3+bx^2+cx+d=0 => divide by a
    b /= a;
    c /= a;
    d /= a;

    let q = (3 * c - b * b) / 9;
    let r = (9 * b * c - 27 * d - 2 * b * b * b) / 54;
    let disc = q * q * q + r * r;

    if (disc > 0) {
        let s = Math.cbrt(r + Math.sqrt(disc));
        let t = Math.cbrt(r - Math.sqrt(disc));
        let root1 = -b / 3 + (s + t);
        let real = -b / 3 - (s + t) / 2;
        let imag = (Math.sqrt(3) * (s - t)) / 2;
        return `Roots: ${root1}, ${real}+${imag}i, ${real}-${imag}i`;
    } else if (disc === 0) {
        let s = Math.cbrt(r);
        let root1 = -b / 3 + 2 * s;
        let root2 = -b / 3 - s;
        return `Roots: ${root1}, ${root2}, ${root2}`;
    } else {
        let theta = Math.acos(r / Math.sqrt(-q * q * q));
        let root1 = 2 * Math.sqrt(-q) * Math.cos(theta / 3) - b / 3;
        let root2 = 2 * Math.sqrt(-q) * Math.cos((theta + 2 * Math.PI) / 3) - b / 3;
        let root3 = 2 * Math.sqrt(-q) * Math.cos((theta + 4 * Math.PI) / 3) - b / 3;
        return `Roots: ${root1}, ${root2}, ${root3}`;
    }
}

// ---------- Button Logic ----------
arr.forEach(button => {
    button.addEventListener("click", (evt) => {
        let val = evt.target.innerText;

        if (val === "=" && !eqnMode) return calculateNormal();
        if (val === "AC") return clearInput();
        if (val === "DEL") return deleteLast();
        if (val === "EQN") return startEquationMode();

        if (eqnMode) {
            if (val === "=") {
                if (eqnDegree === 0) {
                    eqnDegree = parseInt(string);
                    string = "";
                    eqnCount = 0;
                    if (eqnDegree === 2) {
                        input.value = "Enter Coefficient A:";
                    } else if (eqnDegree === 3) {
                        input.value = "Enter Coefficient A:";
                    } else {
                        eqnMode = false;
                        input.value = "Invalid Degree!";
                    }
                } else {
                    coeffs.push(parseFloat(string));
                    string = "";
                    eqnCount++;

                    if (eqnDegree === 2) {
                        if (eqnCount === 1) input.value = "Enter Coefficient B:";
                        else if (eqnCount === 2) input.value = "Enter Coefficient C:";
                        else {
                            eqnMode = false;
                            input.value = solveQuadratic(coeffs[0], coeffs[1], coeffs[2]);
                        }
                    } else if (eqnDegree === 3) {
                        if (eqnCount === 1) input.value = "Enter Coefficient B:";
                        else if (eqnCount === 2) input.value = "Enter Coefficient C:";
                        else if (eqnCount === 3) input.value = "Enter Coefficient D:";
                        else {
                            eqnMode = false;
                            input.value = solveCubic(coeffs[0], coeffs[1], coeffs[2], coeffs[3]);
                        }
                    }
                }
                return;
            }
            string += val;
            input.value = string;
        } else {
            string += val;
            input.value = string;
        }
    });
});
