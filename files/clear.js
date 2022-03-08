import xljs from "exceljs"

export const clearData = async () => {
    var woorkbook = new xljs.Workbook();
    const path = "data.xlsx";
    woorkbook.xlsx.readFile(path).then(function () {
        var ws = woorkbook.getWorksheet('Sheet1');
        woorkbook.removeWorksheetEx(ws);
        // workbook.removeWorksheet('Sheet1');
        woorkbook.xlsx.writeFile(path);
    })
}