import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/auth_service';
declare var Highcharts: any;
@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  loading: boolean = false;
  temp = Array(12).fill(0);
  noData: boolean = false;
  constructor(private service: Service) {

  }
  ngAfterViewInit() {
    this.createChaart();
  }
  createChaart() {
    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      xAxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Feb 2015 - Jan2016',
        data: [...this.temp]
      }]
    });
  }
  ngOnInit() {
    this.getFromDB();
  }
  getFebData() {
    const month = { name: "feb" }
    this.service.getdata(month).subscribe(data => {
      this.temp[0] = (data.totalTemp / data.count);
      this.createChaart();
      this.getMarchData()
    })
  }
  getMarchData() {
    const month = { name: "march" }
    this.service.getdata(month).subscribe(data => {
      this.temp[1] = (data.totalTemp / data.count);
      this.createChaart();
      this.getAprilData()
    })
  }
  getAprilData() {
    const month = { name: "april" }
    this.service.getdata(month).subscribe(data => {
      this.temp[2] = (data.totalTemp / data.count);
      this.createChaart();
      this.getMayData()
    })
  }
  getMayData() {
    const month = { name: "may" }
    this.service.getdata(month).subscribe(data => {
      this.temp[3] = (data.totalTemp / data.count);
      this.createChaart();
      this.getJuneData()
    })
  }
  getJuneData() {
    const month = { name: "june" }
    this.service.getdata(month).subscribe(data => {
      this.temp[4] = (data.totalTemp / data.count);
      this.createChaart();
      this.getJulyData()
    })
  }
  getJulyData() {
    const month = { name: "july" }
    this.service.getdata(month).subscribe(data => {
      this.temp[5] = (data.totalTemp / data.count);
      this.createChaart();
      this.getAugData()
    })
  }
  getAugData() {
    const month = { name: "aug" }
    this.service.getdata(month).subscribe(data => {
      this.temp[6] = (data.totalTemp / data.count);
      this.createChaart();
      this.getSeptData()
    })
  }
  getSeptData() {
    const month = { name: "sept" }
    this.service.getdata(month).subscribe(data => {
      this.temp[7] = (data.totalTemp / data.count);
      this.createChaart();
      this.getOctData()
    })
  }
  getOctData() {
    const month = { name: "oct" }
    this.service.getdata(month).subscribe(data => {
      this.temp[8] = (data.totalTemp / data.count);
      this.createChaart();
      this.getNovData()
    })
  }
  getNovData() {
    const month = { name: "nov" }
    this.service.getdata(month).subscribe(data => {
      this.temp[9] = (data.totalTemp / data.count);
      this.createChaart();
      this.getDecData()
    })
  }
  getDecData() {
    const month = { name: "dec" }
    this.service.getdata(month).subscribe(data => {
      this.temp[10] = (data.totalTemp / data.count);
      this.createChaart();
      this.getJanData()
    })
  }
  getJanData() {
    const month = { name: "jan" }
    this.service.getdata(month).subscribe(data => {
      this.temp[11] = (data.totalTemp / data.count);
      this.createChaart();
      this.loading = false;
    })
  }
  getFromDB() {
    this.loading = true;
    this.service.getAllTemp().subscribe(data => {
      if (data) {
        console.log(data)
        this.temp[0] = data.feb.totalTemp / data.feb.count;
        this.temp[1] = data.march.totalTemp / data.march.count;
        this.temp[2] = data.april.totalTemp / data.april.count;
        this.temp[3] = data.may.totalTemp / data.may.count;
        this.temp[4] = data.june.totalTemp / data.june.count;
        this.temp[5] = data.july.totalTemp / data.july.count;
        this.temp[6] = data.aug.totalTemp / data.aug.count;
        this.temp[7] = data.sept.totalTemp / data.sept.count;
        this.temp[8] = data.oct.totalTemp / data.oct.count;
        this.temp[9] = data.nov.totalTemp / data.nov.count;
        this.temp[10] = data.dec.totalTemp / data.dec.count;
        this.temp[11] = data.jan.totalTemp / data.jan.count;
        this.createChaart();
      }
      else {
        this.noData = true;
        setTimeout(() => {
          this.noData = false;
        }, 1000);
      }

    });
    this.loading = false;
  }
  getFromFile() {
    this.loading = true;
    this.service.getTemperature().subscribe(data => {
      if (data.message == "ok") {
        this.getFebData();
      }
    })
  }
}
