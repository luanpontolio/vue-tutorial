import Vue from 'vue'
import { Time } from './time'
import main from './assets/main.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  data: {
    title: 'Campeonato Brasileiro - Série A',
    times: [
      new Time("São Paulo", require("./assets/sao_paulo_60x60.png")),
      new Time("Santos", require("./assets/santos_60x60.png")),
      new Time("Palmeiras", require("./assets/palmeiras_60x60.png")),
      new Time("Corinthians", require("./assets/corinthians_60x60.png")),
      new Time("Atletico MG", require("./assets/atletico_mg_60x60.png")),
      new Time("Chapecoense", require("./assets/chapecoense_60x60.png")),
      new Time("Cruzeiro", require("./assets/cruzeiro_60x60.png")),
      new Time("Flamengo", require("./assets/flamengo_60x60.png")),
      new Time("Coritiba", require("./assets/coritiba_60x60.png")),
      new Time("Gremio", require("./assets/gremio_60x60.png")),
    ]
  }
})
