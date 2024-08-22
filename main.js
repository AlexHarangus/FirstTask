// main.js

const { getOlympicData } = require('./console');

const olympicData = getOlympicData();

// 1. Numele țărilor participante
const countryNames = olympicData.map(item => item.Nation);
console.log('1. Numele tarilor participante:', countryNames);

// 2. Top 5 țări cu populația cea mai numeroasă
const top5PopulousCountries = olympicData
    .sort((a, b) => b.Population - a.Population)
    .slice(0, 5)
    .map(item => ({ nation: item.Nation, population: item.Population }));
console.log('2. Top 5 tari cu populatia cea mai numeroasa:', top5PopulousCountries);

// 3. Țările care încă există și încep cu litera A
const countriesStartingWithA = olympicData
    .filter(item => item.Exists === 'YES' && item.Nation.startsWith('A'))
    .map(item => item.Nation);
console.log('3. Tari care inca exista si incep cu litera A:', countriesStartingWithA);

// 4. Suma tuturor populațiilor
const totalPopulation = olympicData.reduce((acc, item) => acc + item.Population, 0);
console.log('4. Suma tuturor populatiilor:', totalPopulation);

// 5. Top 5 țări cu cea mai devreme apariție
const top5EarliestAppearance = olympicData
    .sort((a, b) => a.First_App - b.First_App)
    .slice(0, 5)
    .map(item => ({ nation: item.Nation, firstAppearance: item.First_App }));
console.log('5. Top 5 tari cu cea mai devreme aparitie:', top5EarliestAppearance);

// 6. Array de obiecte cu națiune și cod
const nationCodeArray = olympicData.map(item => ({
    nation: item.Nation,
    code: item.Code
}));
console.log('6. Array de obiecte de forma { nation, code }:', nationCodeArray);

// 7. Țara cu cele mai multe apariții
const mostAppearances = olympicData.reduce((max, item) => (item.Apps > max.Apps ? item : max), olympicData[0]);
console.log('7. Tara cu cele mai multe aparitii:', mostAppearances.Nation);

// 8. Țările cu sportul "MostSuccessfull" -> "Athletics"
const athleticsCountries = olympicData
    .filter(item => item.MostSuccessfulSport === 'Athletics')
    .map(item => item.Nation);
console.log('8. Tarile cu sportul "MostSuccessful" -> "Athletics":', athleticsCountries);

// 9. Țara cea mai mică cu cel puțin o medalie câștigată
const smallestWithMedal = olympicData
    .filter(item => item.Medals > 0)
    .sort((a, b) => a.Population - b.Population)[0];
console.log('9. Tara cea mai mica cu cel putin o medalie castigata:', smallestWithMedal.Nation);

// 10. Obiect cu țări și populații
const countryPopulationObject = olympicData.reduce((acc, item) => {
    acc[item.Nation] = item.Population;
    return acc;
}, {});
console.log('10. Obiect cu tari si populatii:', countryPopulationObject);

// 11. Țară random și populația acesteia
const randomCountry = olympicData[Math.floor(Math.random() * olympicData.length)];
console.log('11. O tara random si populatia acesteia:', { nation: randomCountry.Nation, population: randomCountry.Population });

// 12. Țările cu populația peste 1 milion care au câștigat mai multe medalii iarna decât vara
const moreWinterThanSummerMedals = olympicData
    .filter(item => item.Population > 1000000 && item.W_Medal > item.S_Medal)
    .map(item => item.Nation);
console.log('12. Tarile cu populatia peste 1 milion care au castigat mai multe medalii iarna decat vara:', moreWinterThanSummerMedals);

// 13. Țările cu populația sub 5 milioane care au câștigat un număr de medalii mai mare decât 50% din numărul mediu de medalii / țară
const averageMedals = olympicData.reduce((acc, item) => acc + item.Medals, 0) / olympicData.length;
const smallCountriesWithManyMedals = olympicData
    .filter(item => item.Population < 5000000 && item.Medals > averageMedals * 0.5)
    .map(item => item.Nation);
console.log('13. Tarile cu populatia sub 5 milioane si cu numar mare de medalii:', smallCountriesWithManyMedals);

// 14. Țara cu cea mai recentă primă apariție
const latestFirstAppearance = olympicData.reduce((latest, item) => (item.First_App > latest.First_App ? item : latest), olympicData[0]);
console.log('14. Tara cu cea mai recenta prima aparitie:', latestFirstAppearance.Nation);

// 15. Țările cu cea mai veche primă apariție care există și în zilele noastre
const oldestExistingAppearance = olympicData
    .filter(item => item.Exists === 'YES')
    .reduce((oldest, item) => (item.First_App < oldest.First_App ? item : oldest), olympicData[0]);
console.log('15. Tarile cu cea mai veche prima aparitie care exista si in zilele noastre:', oldestExistingAppearance.Nation);
