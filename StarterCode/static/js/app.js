// Plan

// init function 
// 1) Fill out dropdown with all of the ids
// 2) Calls a buildPage function that draws the chart and the panel for the first one

// buildPage function 
// 1) That takes one parameter, which is the subject ID
// 2) Draws our plotly charts and fills the panel

// Need an event listener for the dropdown
// optionChanged function
// - That takes as a parameter the user selection


function buildPage(subject){

  d3.json("samples.json").then((data) => {

    console.log(subject);

    // Filter data.samples based on subject
    // The array that you get back you are interested in [0]

    // Use dot notation to get at .otu_ids, .otu_labels, .otu_sample_values
    // Use slice for the horizontal bar chart
    function filterBySubject(testData){
      return testData.id == subject;
    }
    var samples = data.samples;
    var filteredSample = samples.filter(filterBySubject);
    console.log(samples);
    console.log(filteredSample);

    var otuIds = otuIdList[0].slice(0, 10).reverse();
    var otuIdLabelsList = filteredSample.map(sample => sample.otu_ids);
    var otuIdList = filteredSample.map(sample => sample.otu_ids);
    var otuSamplesList = filteredSample.map(sample => sample.sample_values);
    var otuSamples = otuSamplesList[0].slice(0,10).reverse();
    var TextIds = otuIds.map(id => 'OTU $ {id}');
    console.log(otuIds);
    console.log(filteredSample);
    console.log(otuSamples);
    console.log(otuTextIds);

    // Plotly Charts
    // Horizonatal bar chart- orientation: "h"
    var trace1 = {
      orientation: "h",
      type: "bar",
      x: otuSamples,
      y: otuTextIds
    };

    // Create Data Array 
    var data1 = [trace1];

    // Layout
    var layout = {
      margin: {
        b: 100,
        l: 100,
        r: 100,
        t: 100
      }
    }
   
    // Plot Chart
    Plotly.newPlot("bar", data1, layout);

    // Panel
    // Filter data.metadata based on subject
    // The array that you get back you are interested in [0]

    var panel = d3.select("#sample-metadata");

    panel.html("");

    var panelData = data.metadata;
    console.log(panelData);

    var filteredPanel = panelData.filter(filterBySubject);
    console.log(filteredPanel[0]);

    var table = panel.append("table");

    Object.entries(filteredPanel[0]).forEach(([key, value]) => {
      // One idea is to append header elements (h5 or h6) of the key: value
      console.log(key);
      console.log(value);

      var cell1 = row.append("td");
      cell1.text(key);

      var cell2 = row.append("td");
      cell2.text(value);

      var row = table.append("tr");
    })
      // Gauge Chart
      var washFreq = filtered[0].wfreq;
      console.log(washFreq);

      var data2 = [{
        name: "Scrubs per Week",
        type: "indicator",
        mode: "gauge+number",
        value: washFreq,
        gauge: {
          axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue"},
          bar: { color: "gray"},
          bgcolor: "white",
          borderwidth: 0,
          bordercolor: "gray",
          steps: [
            { range: [0,1], color: 'rgb(0, 0, 0)'},
            { range: [1,2], color: 'rgb(0, 0, 0)'},
            { range: [2,3], color: 'rgb(0, 0, 0)'},
            { range: [3,4], color: 'rgb(0, 0, 0)'},
            { range: [4,5], color: 'rgb(0, 0, 0)'},
            { range: [5,6], color: 'rgb(0, 0, 0)'},
            { range: [6,7], color: 'rgb(0, 0, 0)'},
            { range: [7,8], color: 'rgb(0, 0, 0)'},
            { range: [8,9], color: 'rgb(0, 105, 0)'}
             
          ]
      

      }

      }
      ]





      // Bubble Chart

  })
}


function init() {

  // Fill dropdown with IDs
  // Get firstOne id and call buildPage with that id

  d3.json("samples.json").then((data) => {

    var selector = d3.select("#selDataset");

    console.log(data);

    data.names.forEach((ids) => {
      selector
        .append("option")
        .text(ids)
        .property("value", ids)
    })

    firstOne = data.names[0];

    buildPage(firstOne);

  })
}

function optionChanged(selection) {

  buildPage(selection);
}


init()


