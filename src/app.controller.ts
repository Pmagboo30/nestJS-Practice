import { Controller,Get, Post,Put,Delete,Param} from "@nestjs/common";
import { report } from "process";
import { data, ReportType } from "src/data";


@Controller("report/:type")
export class AppController{
  @Get() //responsible for get request
  getAllReports(
    @Param('type') type:string)
    {
    const reportType = type === "income" ? ReportType.INCOME: ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType);
  }
  @Get(":id") //responsible for get request
  getReportById(){
    return [];
  }
  @Post(":id")
  createReport(){
    return "Created";
  }
  @Put(":id")
  updateReport(){
    return "Updated";
  }
  @Delete(":id")
  deleteReport(){
    return "Deleted";
  }

}