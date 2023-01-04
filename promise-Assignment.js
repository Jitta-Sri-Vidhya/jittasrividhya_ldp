//function getData(uId) {
    //  setTimeout(() => {
    //  console.log("Fetched the data!");
    //  return "skc@gmail.com";
    //  }, 4000);
    // }

    // console.log("start");
    // var email = getData("skc");
    // console.log("Email id of the user id is: " + email);
    // console.log("end");
    function getData(uId) {
        return new Promise(function(resolve, reject) {
        setTimeout(() => {resolve(uId)}, 4000);
        console.log("email fetched")
        });
    }
    function printDetails(res)
    {
        console.log("Email id of the user id is: " + res+"@gmail.com");
    }
    console.log("start");
    async function init(){
        const email=await getData("skc");
        console.log("Email id of the user id is: " + email+"@gmail.com");
        console.log("end");
    }

    init();