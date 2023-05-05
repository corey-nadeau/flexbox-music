const fetchata = async () => {
    const response = await fetch(
        'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=336&size=6&apikey=5GKKVRzQfiGWhRD7SAwRA3PvB0YQocrM');
        let data = await response.json();
        console.log(data)
  
          //    get events
    document.getElementById('event1').innerHTML= JSON.stringify(data._embedded.events[5].name).replace(/['"]+/g, '')
    document.getElementById('event2').innerHTML= JSON.stringify(data._embedded.events[4].name).replace(/['"]+/g, '')
    document.getElementById('event3').innerHTML= JSON.stringify(data._embedded.events[3].name).replace(/['"]+/g, '')
    document.getElementById('event4').innerHTML= JSON.stringify(data._embedded.events[2].name).replace(/['"]+/g, '')
    document.getElementById('event5').innerHTML= JSON.stringify(data._embedded.events[1].name).replace(/['"]+/g, '')
    document.getElementById('event6').innerHTML= JSON.stringify(data._embedded.events[0].name).replace(/['"]+/g, '')
  
  
          //    get venues
    document.getElementById('venue1').innerHTML= JSON.stringify(data._embedded.events[5]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue2').innerHTML= JSON.stringify(data._embedded.events[4]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue3').innerHTML= JSON.stringify(data._embedded.events[3]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue4').innerHTML= JSON.stringify(data._embedded.events[2]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue5').innerHTML= JSON.stringify(data._embedded.events[1]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue6').innerHTML= JSON.stringify(data._embedded.events[0]._embedded.venues[0].name).replace(/['"]+/g, '')
  
  
          //    get dates
    document.getElementById('date1').innerHTML= JSON.stringify(data._embedded.events[5].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date2').innerHTML= JSON.stringify(data._embedded.events[4].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date3').innerHTML= JSON.stringify(data._embedded.events[3].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date4').innerHTML= JSON.stringify(data._embedded.events[2].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date5').innerHTML= JSON.stringify(data._embedded.events[1].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date6').innerHTML= JSON.stringify(data._embedded.events[0].dates.start.localDate).replace(/['"]+/g, '')
}
fetchata()