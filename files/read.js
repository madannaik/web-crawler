// import * as XLSX from 'xlsx/xlsx.mjs';
// import * as fs from 'fs';
// XLSX.set_fs(fs);
// import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
// XLSX.set_cptable(cpexcel);

// export const dumpDataXLXS = (data) => {
//     try {
//         const file = XLSX.readFile("./dist/data.xlsx");
//         var worksheetName = file.SheetNames[0];
//         const workSheet = file.Sheets[worksheetName];
//         const ws = XLSX.utils.json_to_sheet(data);

//         // XLSX.utils.sheet_add_aoa(workSheet, ws);
//         // XLSX.writeFile(file, "./dist/data.xlsx");

//         // console.log(ws);
//         // XLSX.utils.sheet_add_json(worksheetName, ws);

//         // XLSX.writeFileXLSX(file, './dist/data.xlsx')
//     } catch (error) {
//         return error;
//     }
// }
import xljs from "exceljs"

export const dumpDataXLXS = (data) => {
    var woorkbook = new xljs.Workbook();
    const path = "data.xlsx";
    woorkbook.xlsx.readFile(path).then(function () {
        var ws = woorkbook.getWorksheet('Sheet1');
        ws.addRow(data);
        woorkbook.xlsx.writeFile(path).then(() => {
            console.log("file created");
        })
    })
}