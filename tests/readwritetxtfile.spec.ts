import * as fs from "fs";
import {test} from "@playwright/test"
import xlsx from 'xlsx';

test("read text file",async()=>{
    const data=fs.readFileSync("files/demo.txt","utf-8");
    console.log(data);
})

test("write text file",async()=>{
 const data = "This is some sample text to write to the file.";
    fs.writeFileSync('files/out.txt', data, 'utf-8');
    console.log("Data written to file successfully.");
})

test("Read Excel Files Test", async () => {
    // Implement Excel file reading logic here
    // You can use a library like 'xlsx' to read Excel files
    const workbook = xlsx.readFile('testdata/empdata.xlsx');
    const sheet = workbook.Sheets["Sheet1"];

    type Row = {
        fname: string;
        lname: string;
    };

    const data: Row[] = xlsx.utils.sheet_to_json(sheet);
    console.log(data);
    console.log(data[0].fname);
    console.log(data[1].fname);
    console.log(data[2].fname);
    console.log(data[3].fname,data[3].lname);
});

test("Write Excel Files Test", async () => {

    const workbook = xlsx.utils.book_new();

    const sheetData = [
        { fname: "John", lname: "Doe" },
        { fname: "Jane", lname: "Smith" }
    ];
    const sheet = xlsx.utils.json_to_sheet(sheetData);
    xlsx.utils.book_append_sheet(workbook, sheet, "Sheet1");
    xlsx.writeFile(workbook, "testdata/out.xlsx");
    console.log("Excel file written successfully.");
});