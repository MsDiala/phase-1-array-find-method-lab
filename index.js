// code your solution here
function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }
  
  const record = [
    { year: "2018", result: "L" },
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
    { year: "2014", result: "L" },
    { year: "2013", result: "W" },
  ];
  
  const winYear = superbowlWin(record);
  console.log("Superbowl Win Year:", winYear);