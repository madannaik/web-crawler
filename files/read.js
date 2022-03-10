import xljs from "exceljs"

export const dumpDataXLXS = (data) => {
    var woorkbook = new xljs.Workbook();
    const path = "./dist/data.xlsx";
    woorkbook.xlsx.readFile(path).then(function () {
        var ws = woorkbook.getWorksheet('Sheet1');
        data.forEach(element => {
            ws.insertRow(2, [element.questionUrl, element.voteCount, element.answers, element.referenceCount])
        });
        woorkbook.xlsx.writeFile(path).then(() => {
            console.log("file created");
        })
    })
}