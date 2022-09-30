// use local storage to manage data
const addToDb = time =>{

    localStorage.setItem('break-time', JSON.stringify(time));
}

const getaddedBreak = ()=>{
    let breakTime = [0];

    //get the shopping cart from local storage
    const addedBreak = localStorage.getItem('break-time');
    if(addedBreak){
        breakTime = JSON.parse(addedBreak);
    }
    return breakTime;
}



export {
    addToDb, 
    getaddedBreak
}