import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  constructor(
    private data: UserdataService,
    private route: Router
  ){}

  donutChartData: number[] = [];
  donutChartLabels: string[] = ['Medicina', 'Supervisor','Liberados'];
  donutChartColors: any[] = [];
  resultGraph : any[] = []
  page = 1
  filteredResults: any[] = []

  currentDate = new Date()
  day = this.currentDate.getDate().toString().padStart(2, '0')
  month = (this.currentDate.getMonth()+1).toString().padStart(2, '0')
  year = this.currentDate.getFullYear()
  todayDate = this.day + "/" + this.month + "/" + this.year;

  formatDate(date: string): string {
    const objectDate = date.split('-');
    const year = objectDate[0];
    const month = objectDate[1];
    const day = objectDate[2];
    return `${day}/${month}/${year}`;
}

  filterData(){
    const input = document.getElementById('date') as HTMLInputElement
    let currentInputDate = this.formatDate(input.value)
    this.page = 1
    this.todayDate = currentInputDate
    this.getFilterResult()
  }

  getFilterResult() {
    this.data.getFilteredResults(this.todayDate, this.page).subscribe(
      (response) => {
        if(response.status === "success") {
          this.filteredResults = response.results;
        } else {
          alert('Erro ao buscar resultados filtrados')
        }
      }
    )
  }

  getResults(): any {
    this.data.getAllResults(this.todayDate).subscribe(
      (response: any) => {
        if(response.status === 'success'){
          response.results.forEach((item: any) => {
            let resultado = item.result;
            this.resultGraph.push(resultado)
          })
          this.createGraph()
        } else {
          alert('Erro ao buscar resultados')
        }
    })
  }
  
  nextPageFilter() {
    this.page++
    this.getFilterResult()
  }

  prevPageFilter() {
    if(this.page == 1) {
      console.log('first-page')
    }else {
      this.page--
      this.getFilterResult()
    }
  }

  createGraph() {
    // Extrai os resultados dos dados
    this.donutChartData = this.resultGraph;
    // Inicializa as contagens
    let abaixoDe60 = 0;
    let entre60e80 = 0;
    let acimaDe80 = 0;

    // Conta quantos resultados estão em cada faixa
    this.donutChartData.forEach(resultado => {
      if (resultado < 60) {
        abaixoDe60++;
      } else if (resultado >= 60 && resultado <= 80) {
        entre60e80++;
      } else {
        acimaDe80++;
      }
    });

    // Define as cores com base nas contagens
    this.donutChartColors = [
      'rgb(242, 226, 5)',
      'rgb(46, 32, 80)',
      'rgb(16, 23, 38)'
    ];

    // Cria o gráfico de donut
    new Chart('dash', {
      type: 'doughnut',
      data: {
        labels: this.donutChartLabels,
        datasets: [{
          data: [abaixoDe60, entre60e80, acimaDe80],
          backgroundColor: this.donutChartColors
        }]
      }
    });
  }
  ngOnInit(): void {
    this.getResults()
    this.getFilterResult()
  }
}