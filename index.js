// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
  
    { year: "1960", result: "N/A"}
  ]



// function superbowlWin(inventory,finder){
//     let result = null;
//     for (let item of inventory) {
//         if(finder(item)=== true){
//             result =item;
//             break
//         }
      
        
//     }
//     return result;
// }
// function finder(record){
//     return record.year ==="2015"
// }
// superbowlWin(record,finder);

// let superbowlWin=record.find(finder)
// function finder(record){
//     return record.year ==="2015"
// }
// function superbowlWin(record, finder){
//     return record.find( finder)
// }
// function finder(record){
//    return record.year ==="Win"

//      }

    //  superbowlWin(record, finder)

    // function superbowlWin(record){
    //   let winResult = record.find(function(record){
    //     return record.result ==="W";
    //   })
    //   if(winResult){
    //     return winResult.year;
        
    //   }
      
    // }

    function superbowlWin(records){
      return records.result ==="W"
    }

    let winResult = record.find(superbowlWin)

    console.log(winResult)
