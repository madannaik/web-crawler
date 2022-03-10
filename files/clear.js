import xljs from "exceljs"

export const clearData = async () => {
    var woorkbook = new xljs.Workbook();
    const path = "./dist/data.xlsx";
    woorkbook.xlsx.readFile(path).then(function () {
        var ws = woorkbook.getWorksheet('Sheet1');
        ws.spliceColumns(1, 2, 3, 4);
        woorkbook.xlsx.writeFile(path).then(() => {
            console.log("file deleted");
            return true;
        })
    });
}