export function fancyRide(l: number, fares: number[]): string {
   let car;
   const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

   for (let i = 0; i < fares.length; i++) {
     if (fares[i] * l < 20) {
       car = rides[i];
     }
   }

   return car;
}

// console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));