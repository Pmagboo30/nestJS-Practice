//data:Data asigning data to Data
export enum ReportType{
    INCOME = "income",
    EXPENSE = "expense",
}
export const data: Data = {
    report: [
        {
    id: "46457",
    source: "Sales",
    amount: 2000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
},
{
    id: "46521",
    source: "Youtube",
    amount: 5000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
}

]}
//"interface" will let you write an object inside
 //This code specifies what the 'report' should contain.
interface Data{ 
    report:{ 
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type:ReportType;
    }[]
}

data.report.push({
    id:"uuid",
    source: "Salary",
    amount: 7500,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME

})