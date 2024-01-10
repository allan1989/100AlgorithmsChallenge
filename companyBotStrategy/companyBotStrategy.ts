function companyBotStrategy(trainingData: number[][]): number {
	const successfulTrainers = trainingData.filter(data => {
        [answerTime, correctness] = data;
        return Math.sign(answerTime) > 0 && Math.sign(answerTime) > -1 && Math.sign(correctness) > 0 && Math.sign(correctness) > -1
    });
    
    return +((successfulTrainers.reduce((acc, curr) => curr[0] + acc, 0) / successfulTrainers.length).toFixed(1)) || 0
}   

// console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
// console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
// console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
