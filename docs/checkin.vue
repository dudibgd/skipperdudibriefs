
<template>
  <div class="mainDiv">
    <h2 class="mb">CEKIRANJE</h2>

    <h3 class="mb">Savet: iskljuciti odmah jedan tank vode (imati u rezervi)</h3>

    <div>
      <h3>Oko gostiju</h3>
      <ul class="list">
        <li v-for="listGost in listGosti" :key="listGost.id" >
          {{listGost.naziv}}
        </li>
      </ul>
    </div>

    <div>
      <h3>Oko dokumenata</h3>
      <ul class="list">
        <li v-for="listDokument in listDokumenta" :key="listDokument.id">
          {{listDokument.naziv}}
        </li>
      </ul>
    </div>

    <div id="last">
      <h3>Oko broda</h3>
      <ul class="list">
        <li v-for="listb in listBrod" :key="listb.id">
          {{listb.naziv}}
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
export default {
  data(){
    return{
      listGosti:[
        {id:1, naziv:"any special diets, medications, health conditions..."},
      ], 
      listDokumenta:[
        {id:1, naziv:"Declaration for guests"},
        {id:2, naziv:"Port authorities stamped papers"},
      ], 
      listBrod:[
        {id:1, naziv:"prop wash (eventually prop walk)"},
        {id:2, naziv:"engine state (oil, belt...)"},
        {id:3, naziv:"batteries, main switch"},
        {id:4, naziv:"winch battery and switch"},
        {id:5, naziv:"duzina lanca, brzina spustanja lanca"},
        {id:6, naziv:"pribor u navigacionom stolu"},
        {id:7, naziv:"polozaj rudder-a u odnosu na autopilot (odstupanje)"},
        {id:8, naziv:"proveriti rad autopilota"},
        {id:9, naziv:"promena intenziteta svetla na displeju autopilota"},
        {id:10, naziv:"proveriti duzinu lanca ili konopa rezervnog sidra"},
        {id:11, naziv:"proveriti kolicinu dodatnih konopaca (narocito za landline)"},
        {id:12, naziv:"proveriti za dingija (lepkovi, vesla, stanje alki za vezivanje, stanje drzaca za vesla, kolicina goriva)"},
        {id:13, naziv:"traziti od chartera dodatni konop za preventer !!"},
        {id:14, naziv:"bilge state ad bilge pump"},
      ]
    }
  }
}
</script>

<style scoped>
.mb{
  margin-bottom: 3rem;
}

.mainDiv{
  background-color: #7eb4e2;
  font: 200;
  color: bisque;
}

ul {
  list-style-type: "*";
  margin-bottom: 2rem;
}

ul li {
  list-style: none;
  position: relative;
  padding: 3px 0 2px 25px;
}

ul li::before {
  content: '*';
  position: absolute;
  top: 6px;
  left: 0;
}
</style>