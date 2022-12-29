async function DadMakepromise() {
    try {
        const a = 1;
        const dadPromise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let salaryCredited = true;
                let salary = 30000;
                let costOfPS5 = 34000;
                let costOfPS4 = 20000;
                if (salaryCredited === true && salary > costOfPS5) {
                    resolve(' buy him PS5');
                }
                else if (salaryCredited === true && salary > costOfPS4 && salary < costOfPS5) {
                    reject('dont buy him PS5. Instead buy him PS4 😅');
                }
                else
                    reject(" sorry dont buy him")

            }, 5000);
        })


    }
    catch (err) {
        console.log(err)
    }
}


DadMakepromise();