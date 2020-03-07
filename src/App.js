import React from 'react';
import './App.css';

const equate = (arr1,arr2)=>{
  let input1 = [];
  let input2 = [];
  for(let i =0; i< arr1.length; i++){
    input1.push(arr1[i]);
    input2.push(arr2[i]);
  }
  input1.sort();
  input2.sort();
  for(let i=0; i<input1.length ; i++){
    if(input1[i]!==input2[i]){
      return false
    }
  }
  return true
}

const validate =(arr)=>{
  let validArr = [1,2,3,4,5,6,7,8,9];
  let isColoumnsValid = true;
  let isRowsValid = true;
  let isBlockValid = true;
  let emptArr = [];
  let validBlocks = [[],[],[],[],[],[],[],[],[]];
  arr.forEach((col)=>{
    if(isColoumnsValid){
      isColoumnsValid = equate(col,validArr);
    }
  })
  if(!isColoumnsValid){
    console.log('This sudoku is invalid')
  }
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      emptArr.push(arr[j][i]);
      if((i===0||i===1||i===2)&&(j===0||j===1||j===2)){
        validBlocks[0].push(arr[j][i]);
      }else if((i===3||i===4||i===5)&&(j===0||j===1||j===2)){
        validBlocks[1].push(arr[j][i]);
      }else if((i===6||i===7||i===8)&&(j===0||j===1||j===2)){
        validBlocks[2].push(arr[j][i]);
      }else if((i===0||i===1||i===2)&&(j===3||j===4||j===5)){
        validBlocks[3].push(arr[j][i]);
      }else if((i===3||i===4||i===5)&&(j===3||j===4||j===5)){
        validBlocks[4].push(arr[j][i]);
      }else if((i===6||i===7||i===8)&&(j===3||j===4||j===5)){
        validBlocks[5].push(arr[j][i]);
      }else if((i===0||i===1||i===2)&&(j===6||j===7||j===8)){
        validBlocks[6].push(arr[j][i]);
      }else if((i===3||i===4||i===5)&&(j===6||j===7||j===8)){
        validBlocks[7].push(arr[j][i]);
      }else if((i===6||i===7||i===8)&&(j===6||j===7||j===8)){
        validBlocks[8].push(arr[j][i]);
      }
    }
    emptArr = [];
    if(isRowsValid){
      isRowsValid = equate(emptArr,validArr);
    }else {
      console.log('This sudoku is invalid')
    }
  }

  validBlocks.forEach((arr)=>{
    if(isBlockValid){
      isBlockValid = equate(arr,validArr);
    }else{
      console.log('This sudoku is invalid')
    }
  }) 
  if(isBlockValid && isRowsValid && isColoumnsValid){
    console.log('This sudoku is valid')
  }
}

function App() {
  const testInput = [
  [4,3,5,2,6,9,7,8,1],
  [6,8,2,5,7,1,4,9,3],
  [1,9,7,8,3,4,5,6,2],
  [8,2,6,1,9,5,3,4,7],
  [3,7,4,6,8,2,9,1,5],
  [9,5,1,7,4,3,6,2,8],
  [5,1,9,3,2,6,8,7,4],
  [2,4,8,9,5,7,1,3,6],
  [7,6,3,4,1,8,2,5,9]]
  const mainBox = [...new Array(9)].map(() => [...new Array(9)].map(() => ''));
  // const sudoku = [...new Array(9)].map(() => [...new Array(9)].map(() => ''));
  return (
    <div className="App">
      <div id='mainDiv'>
        {
          mainBox.map((arr, i) =>
            arr.map((_, j) => {
              return <input key={''+ i + j} type="number" min='1' max='9' id={'' + i + j} className="ele" onChange={()=>{
                let val = document.getElementById(''+i+j).value;
                mainBox[i][j]=parseInt(val);
              }} ></input>
            })
          )
        }
      </div>
      <div id='submit' onClick={()=>{validate(mainBox)}} >Submit</div>
    </div>
  );
}

export default App;
