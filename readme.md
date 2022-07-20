# Create el

## sukurti ir patalpinti sias strukturas

1. ```html
   <section>
     <h2 id="yes">Section title</h2>
     <p class="text">Hello i am section text</p>
   </section>
   ```
2. ```html
   <article>
     <h3 class="title_a">JS</h3>
     <p class="date">2022 02 15</p>
     <p class="text">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?
     </p>
   </article>
   ```
3. Sukurti funkcijas kurios sukuria [1.] [2.] punktuose pavaizduotus elementus ir juos grazina
   3.1 patobulinti funkcija [3] ir padaryti kad ji argumentu priimtu elementa kuriame patalpinti.
   3.2 kurti sekcija su mygtuko paspaudimu <button id="btn1">Create section</button>
4. sukurti struktura

```html
<article class="about">
  <h3 class="a__title">About me</h3>
  <p class="a__summary">This is short summary about me</p>
  <h4 class="a__towns-title">towns I have visited</h4>
  <ul>
    <li class="a__towns">Kaunas</li>
    <li class="a__towns">Vilnius</li>
    <li class="a__towns">Klaipeda</li>
  </ul>
  <button id="more-btn">Learn more</button>
</article>
```

4.1 sukurti funkcija kuri sukuria [4] punkto struktura ir priima selektoriaus argumenta kur ikelti.
pvz `createLargeArticle('#app')` - sukurs struktura ir ikels i elementa su id 'app'

5. nusikopijuoti i html sita struktura tiesiogiai. sukurti ir prideti trukstamas dienas su javascript

```html
<ul>
  <li>Pirmadienis</li>
  <li>Antradienis</li>
  <li>Treciadienis</li>
  <li>Penktadienis</li>
  <li>Sekmadienis</li>
</ul>
```

6. atskirame helper.js faile aprasyti funkcija kuri sukuria ir patalpina tokia struktura

```html
<div class="alert">
  <strong>Hi there</strong> This is and alert <span>✖️</span>
</div>
```

6.1 padaryti kad paspaudus <span>✖️</span> elementa alertas isnyktu po 1 sekundes
