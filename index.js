const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]



// superbowlWin(record);

function superbowlWin(array) {
    const wins = array.find(array => array.result === 'W');

    if (wins) {
        return wins.year;
    }
}

superbowlWin(record);
