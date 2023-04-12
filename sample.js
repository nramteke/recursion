function printConsole(filter){
    let nestedObj = {
        "options": [
            {
                "id": "a",
                "name": "a",
                "options" : [
                    {
                        "id": "a.1",
                        "name": "a.1",
                        "options" : [
                            {
                                "id": "a.1.1",
                                 "name": "a.1.1",
                            },
                            {
                                "id": "a.1.2",
                                 "name": "a.1.2",
                            },
                            {
                                "id": "a.1.3",
                                 "name": "a.1.3",
                            }
                        ]
                    }
                ]
            },
            {
                "id": "b",
                "name": "b",
                "options" : [
                    {
                        "id": "b.1",
                        "name": "b.1",
                        "options" : [
                            {
                                "id": "b.1.1",
                                 "name": "b.1.1",
                            },
                            {
                                "id": "b.1.2",
                                 "name": "b.1.2",
                            },
                            {
                                "id": "b.1.3",
                                 "name": "b.1.3",
                            }
                        ]
                    }
                ]
            }
        ]
    };

    var result = [];
    recurFunc(filter, nestedObj,result);
    console.log("Result :" + result);

     let textArea = document.getElementById("text-area");
    textArea.innerHTML = result.toString;

}

function recurFunc(inputStr, inputObj, resultArray){
    inputObj["options"].forEach(option => {
        if(inputStr.includes(option.id)){
            resultArray.push(option.id);
            let optionArr = option.options;
            if(Array.isArray(optionArr)){
            optionArr.forEach(optionelement => {
                console.log("option optionelement: "+ JSON.stringify(optionelement));
                if(optionelement.hasOwnProperty("options")){
                    console.log("recussion ");
                    recurFunc(inputStr, optionelement,resultArray);
                }
            })
        }   
        }
    //}  
    })
}

printConsole("a.1.3");