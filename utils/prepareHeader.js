import xljs from "exceljs"

export const prepareHeader = (data) => {
    var woorkbook = new xljs.Workbook();
    const path = "./dist/data.xlsx";
    woorkbook.xlsx.readFile(path).then(function () {
        var ws = woorkbook.getWorksheet('Sheet1');
        ws.columns = [
            {
                header: "Question URL",

            },
            {
                header: "Vote Count",

            },
            {
                header: "Total Number of Answers",

            },
            {
                header: "Reference Count",

            }
        ]
        woorkbook.xlsx.writeFile(path).then(() => {
            console.log("Header Created");
        })
    })
}