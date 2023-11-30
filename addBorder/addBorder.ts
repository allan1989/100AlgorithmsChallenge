export function addBorder(picture: string[]): string[] {
    // let result = [];
    // let symbol = '*';
    // const borderLength = picture[0].length + 2;
    // const matrixPerimeter = symbol.repeat(borderLength);
   
    // for(let el of picture) {
    //     let tempArr = el.split('');
    //     tempArr.splice(0, 0, symbol);
    //     tempArr.splice(el.length + 1, 0, symbol);
    //     //result.push(tempArr.join(''))
    // }
    // result.unshift(matrixPerimeter);
    // result.push(matrixPerimeter);
    // console.log('test', result)
    // return result;

    const wall = '*'.repeat(picture[0].length + 2);
    picture.unshift(wall);
    picture.push(wall);

    for(let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }
    return picture;
}

console.log(addBorder(["abc", "ded"]));