import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { format } from 'highcharts';

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
  dateI = this.day + "/" + this.month + "/" + this.year;
  dateF = this.day + "/" + this.month + "/" + this.year;

  counter = 0

  formatDate(date: string): string {
    const objectDate = date.split('-');
    const year = objectDate[0];
    const month = objectDate[1];
    const day = objectDate[2];
    return `${day}/${month}/${year}`;
}

  filterData(){
    const inputDateStart = document.getElementById('date_start') as HTMLInputElement
    const inputDateFinal = document.getElementById('date_final') as HTMLInputElement
    
    if(inputDateStart.value == ""){
      alert('Insira uma data para aplicar o filtro')
    } else if(inputDateFinal.value != "" && inputDateStart.value > inputDateFinal.value){
      alert('A data inicial não pode ser maior que a data final')
    } else {
      let dateStart = inputDateStart.value
      let dateEnd = inputDateFinal.value

      if(dateStart){
        dateStart = this.formatDate(dateStart)
      } else {
        dateStart = this.dateI
      }
      if(dateEnd) {
        dateEnd = this.formatDate(dateEnd)
      } else {
        dateEnd = this.dateI
      }

      if(dateStart == this.dateI && dateEnd == "") {
        alert('Filtro já aplicado')
      } else {
        this.dateI = dateStart
        this.dateF = dateEnd
        this.page = 1
        this.countResult()
        this.getResults()
        this.getFilterResult()
        this.dateF = ""
      }
    }
    
  }

  getFilterResult() {
    this.data.getFilteredResults(this.dateI, this.dateF, this.page).subscribe(
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
    this.resultGraph = []
    const canvas = document.getElementById('dash') as HTMLCanvasElement
    const canvasContainer = document.getElementById('dash-content')
    if(canvas){
      canvas.parentNode?.removeChild(canvas);
    }
    const currentCanvas = document.createElement('canvas');
    currentCanvas.id = 'dash'
    currentCanvas.classList.add('dash')
    canvasContainer?.appendChild(currentCanvas)

    this.data.getAllResults(this.dateI,this.dateF).subscribe(
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

  countResult() {
    this.data.countResults(this.dateI, this.dateF).subscribe(
      (response) => {
        if(response.status === 'success'){
          this.counter = Math.ceil(response.amount/5)
      } else {
        alert('Erro ao quantificar resultados')
      }
    }
    )
  }
  
  nextPageFilter() {
    if(this.page < this.counter) {
      this.page++
      this.getFilterResult()
    }
  }

  prevPageFilter() {
    if( this.page != 1 ){
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
      } else if (resultado >= 60 && resultado < 80) {
        entre60e80++;
      } else {
        acimaDe80++;
      }
    });

    // Define as cores com base nas contagens
    this.donutChartColors = [
      'rgb(196, 34, 34)', // Medicina
      'rgb(236, 177, 31)', // Supervisor
      'rgb(0, 126, 122)'  // Liberados
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
    this.countResult();
    this.getResults()
    this.getFilterResult()
  }
}
