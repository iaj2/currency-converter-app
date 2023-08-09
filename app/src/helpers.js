export const validInput = (inputStr) => {
    const len = inputStr.length;
    if (len < 1) return true;
    let dotCount = 0;
    for(let i = 0; i < inputStr.length; i++){
      if(inputStr[i] === '.' ) {
        dotCount++;
        if(dotCount > 1 || len < 2  ) return false
      }
      else{
        if(isNaN(parseFloat(inputStr[i]))) return false;
      }
      
    }
    return true;
  }
