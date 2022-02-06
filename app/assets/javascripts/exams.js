const import_init = () => {
  console.log('exams list context');

  $("#search-input").on('click', function(){
    $(this).val("");
  });

  $("#imported-exams").on("change", function(){
    $( "#import-exams-form" ).submit();
  });

  $("#imported-instructions").on("change", function(){
    $( "#import-instruc-form" ).submit();
  });

  $("#imported-tags").on("change", function(){
    $( "#import-tags-form" ).submit();
  });

  // $("#imported-books").on("change", function(){
  //   $( "#import-books-form" ).submit();
  // });
}

showDots = true

// Write your JavaScript code.
function drawCircle(c, context) {
  //context.fillStyle = '#fff';

  context.beginPath();
  // context.arc(c.x, c.y, c.r, 0, 2 * Math.PI, false);
  context.arc(c.x, c.y, c.r, 0, 2 * Math.PI, true);
  context.closePath();

  //context.globalAlpha = 1;
  //context.lineWidth = .05;
  //context.fill();
  if (c.f) context.fill();
  else context.stroke();

  //context.textBaseline = 'top';
  //context.font = 'bold 6pt Arial';
  //context.globalAlpha = .5;
  //context.fillText(i + 1, rpoints[i].x + 3, rpoints[i].y + 3);
}

function drawArc(c, context) {
  //context.fillStyle = '#fff';

  context.beginPath();
  context.arc(c.x, c.y, c.r, c.b, c.e, c.o);
  //context.closePath();

  //context.globalAlpha = 1;
  //context.lineWidth = .05;
  //if (c.o) context.fill();
  context.stroke();

  //context.textBaseline = 'top';
  //context.font = 'bold 6pt Arial';
  //context.globalAlpha = .5;
  //context.fillText(i + 1, rpoints[i].x + 3, rpoints[i].y + 3);
}

const exams_init = () => {
  $(document).ready(function(){
    gradientOpacity();
    $('.log-list').fadeIn(500);
    // $('#voronoi, #screenSystemElem, #nodeCon, #particles, .log-list, #plusigns, #back-dot-grid, #circular-menu, #discovery, .controls, #rain-meter').fadeOut(500);
    $('.canvas, #voronoi, #screenSystemElem, #nodeCon, #particles, .log-list, #plusigns, #circular-menu, #discovery, .controls, #rain-meter').fadeOut(500);

    setTimeout(function () {
      $("#black-canvas").fadeOut(500);
    }, 500);

    $('.element, .inner_canvas').click(function(){
      $(this).toggleClass('selected')
    })

    var getPositionData = function (el) {
      return $.extend({
        width: el.outerWidth(false),
        height: el.outerHeight(false)
      }, el.offset());
    };

    var canvasPlusSigns = document.getElementById('plusigns');
    canvasPlusSigns.width = canvasPlusSigns.clientWidth; //window.innerWidth; //canvasWidth; //
    canvasPlusSigns.height = canvasPlusSigns.clientHeight;
    contextPlusSigns = canvasPlusSigns.getContext('2d');

    contextPlusSigns.clearRect(0, 0, canvasPlusSigns.width, canvasPlusSigns.height);

    grid_cel_wh = 80; //103;

    for (var c = 1; c < 100; c++) {
      for (var i = 1; i < 100; i++) {
        contextPlusSigns.beginPath();

        contextPlusSigns.font = "18px Arial";
        rand = Math.round(Math.random() * 10)
        
        contextPlusSigns.fillStyle = "#ffffff";
        contextPlusSigns.globalAlpha = .07;

        if (rand == 1){
          contextPlusSigns.fillStyle = "#cc0000";
          contextPlusSigns.globalAlpha = .3;
        }

        contextPlusSigns.textAlign = "center";
        contextPlusSigns.textBaseline = "middle";
        // contextPlusSigns.fillText('+', i * grid_cel_wh, c * grid_cel_wh);
        contextPlusSigns.fillText('.', i * grid_cel_wh, c * grid_cel_wh);

        contextPlusSigns.closePath();
      }
    }

    var table2 = [
      ["h", "hydrogen", "1.00794", 1, 1,       [1,2,3,4,5]],
      ["he", "helium", "4.002602", 18, 1,      [2,5,6,7,8,9]],
      ["li", "lithium", "6.941", 1, 2,         [3,9,10,11]],
      ["be", "beryllium", "9.012182", 2, 2,    [4,11,12,13]],
      ["b", "boron", "10.811", 13, 2,          [5,13,14]],
      ["c", "carbon", "12.0107", 14, 2,        [6,14,15,16]],
      ["n", "nitrogen", "14.0067", 15, 2,      [7,16,17,18]],
      ["o", "oxygen", "15.9994", 16, 2,        [8,18,19]],
      ["f", "fluorine", "18.9984032", 17, 2,   [9,19,20,21]],
      ["ne", "neon", "20.1797", 18, 2,         [10,21,22]],
      ["na", "sodium", "22.98976...", 1, 3,    [11,22,23,24]],
      ["mg", "magnesium", "24.305", 2, 3,      [12,24,25]],
      ["al", "aluminium", "26.9815386", 13, 3, [13,25,26]],
      ["si", "silicon", "28.0855", 14, 3,      [14,26,27,28]],
      ["p", "phosphorus", "30.973762", 15, 3,  [15,28,29]],
      ["s", "sulfur", "32.065", 16, 3,         [16,29,30,31]],
      ["cl", "chlorine", "35.453", 17, 3,      [17,31,32]],
      ["ar", "argon", "39.948", 18, 3,         [18,32,33]],
      ["k", "potassium", "39.948", 1, 4,       [19,33,34]],
      ["ca", "calcium", "40.078", 2, 4,        [20,34,35]],
      ["sc", "scandium", "44.955912", 3, 4,    [21,35,36,37]],
      ["ti", "titanium", "47.867", 4, 4,       [22,37,38]],
      ["v", "vanadium", "50.9415", 5, 4,       [23,38,39]],
      ["cr", "chromium", "51.9961", 6, 4,      [24,39,40]],
      ["mn", "manganese", "54.938045", 7, 4,   [25,40,41,42]],
      ["fe", "iron", "55.845", 8, 4,           [26,42,43]],
      ["co", "cobalt", "58.933195", 9, 4,      [27,43,44]],
      ["ni", "nickel", "58.6934", 10, 4,       [28,44,45]],
      ["cu", "copper", "63.546", 11, 4,        [29,45,46]],
      ["zn", "zinc", "65.38", 12, 4,           [30,46,47]],
      ["ga", "gallium", "69.723", 13, 4,       [31,47,48]],
      ["ge", "germanium", "72.63", 14, 4,      [32,48,49,50]],
      ["as", "arsenic", "74.9216", 15, 4,      [33,50,51]],
      ["se", "selenium", "78.96", 16, 4,       [34,51,52]],
      ["br", "bromine", "79.904", 17, 4,       [35,52,53]],
      ["kr", "krypton", "83.798", 18, 4,       [36,53,54]],
      ["rb", "rubidium", "85.4678", 1, 5,      [37,54,55]],
      ["sr", "strontium", "87.62", 2, 5,       [38,55,56]],
      ["y", "yttrium", "88.90585", 3, 5,       [39,56,57]],
      ["zr", "zirconium", "91.224", 4, 5,      [40,57,58]],
      ["nb", "niobium", "92.90628", 5, 5,      [41,58,59]],
      ["mo", "molybdenum", "95.96", 6, 5,      [42,59,60]],
      ["tc", "technetium", "98", 7, 5,         [43,60,61]],
      ["ru", "ruthenium", "101.07", 8, 5,      [44,61,62]],
      ["rh", "rhodium", "102.9055", 9, 5,      [45,62,63]],
      ["pd", "palladium", "106.42", 10, 5,     [46,63,64,65]],
      ["ag", "silver", "107.8682", 11, 5,      [47,65,66]],
      ["cd", "cadmium", "112.411", 12, 5,      [48,66,67]],
      ["in", "indium", "114.818", 13, 5,       [49,67,68]],
      ["sn", "tin", "118.71", 14, 5,           [50,68,69]],
      ["sb", "antimony", "121.76", 15, 5,      [51,69,70]],
      ["te", "tellurium", "127.6", 16, 5,      [52,70,71]],
      ["i", "iodine", "126.90447", 17, 5,      [53,71,72]],
      ["xe", "xenon", "131.293", 18, 5,        [54,72,73]],
      ["cs", "caesium", "132.9054", 1, 6,      [55,73]],
      ["ba", "barium", "132.9054", 2, 6,       [56,73,74]],
      ["la", "lanthanum", "138.90547", 4, 9,   [57,74,75]],
      ["ce", "cerium", "140.116", 5, 9,        [58,75,76]],
      ["pr", "praseodymium", "140.90765", 6, 9,[59,76,77]],
      ["nd", "neodymium", "144.242", 7, 9,     [60,77,78]],
      ["pm", "promethium", "145", 8, 9,        [61,78,79]],
      ["sm", "samarium", "150.36", 9, 9,       [62,79,80]],
      ["eu", "europium", "151.964", 10, 9,     [63,80,81]],
      ["gd", "gadolinium", "157.25", 11, 9,    [64,81,82]],
      ["tb", "terbium", "158.92535", 12, 9,    [65,82,83]],
      ["dy", "dysprosium", "162.5", 13, 9,     [66,83,84]],
      ["ho", "holmium", "164.93032", 14, 9,    [67,84,85]],
      ["er", "erbium", "167.259", 15, 9,       [68,85,86]],
      ["tm", "thulium", "168.93421", 16, 9,    [69,86,87]],
      ["yb", "ytterbium", "173.054", 17, 9,    [70,87]],
      ["lu", "lutetium", "174.9668", 18, 9,    [71,87,88]],
      ["hf", "hafnium", "178.49", 4, 6,        [72,88,89]],
      ["ta", "tantalum", "180.94788", 5, 6,    [73,89,90]],
      ["w", "tungsten", "183.84", 6, 6,        [74,90,91]],
      ["re", "rhenium", "186.207", 7, 6,       [75,91,92]],
      ["os", "osmium", "190.23", 8, 6,         [76,92,93]],
      ["ir", "iridium", "192.217", 9, 6,       [77,93,94]],
      ["pt", "platinum", "195.084", 10, 6,     [78,94]],
      ["au", "gold", "196.966569", 11, 6,      [79,94,95]],
      ["hg", "mercury", "200.59", 12, 6,       [80,95,96]],
      ["tl", "thallium", "204.3833", 13, 6,    [81,96,97]],
      ["pb", "lead", "207.2", 14, 6,           [82,97,98]],
      ["bi", "bismuth", "208.9804", 15, 6,     [83,98,99]],
      ["po", "polonium", "209", 16, 6,         [84,99]],
      ["at", "astatine", "210", 17, 6,         [85,99,100]],
      ["rn", "radon", "222", 18, 6,            [86,100,101]],
      ["fr", "francium", "223", 1, 7,          [87,101,102]],
      ["ra", "radium", "226", 2, 7,            [88,102]],
      ["ac", "actinium", "227", 4, 10,         [89,102,103]],
      ["th", "thorium", "232.03806", 5, 10,    [90,103,104]],
      ["pa", "protactinium", "231.0588", 6, 10,[91,104,105]],
      ["u", "uranium", "238.02891", 7, 10,     [92,105]],
      ["np", "neptunium", "237", 8, 10,        [93,105,106]],
      ["pu", "plutonium", "244", 9, 10,        [94,106,107]],
      ["am", "americium", "243", 10, 10,       [95,107,108]],
      ["cm", "curium", "247", 11, 10,          [96,108]],
      ["bk", "berkelium", "247", 12, 10,       [97,108,109]],
      ["cf", "californium", "251", 13, 10,     [98,109,110]],
      ["es", "einstenium", "252", 14, 10,      [99,110]],
      ["fm", "fermium", "257", 15, 10,         [100,110,111]],
      ["md", "mendelevium", "258", 16, 10,     [101,111,112]],
      ["no", "nobelium", "259", 17, 10,        [102,112]],
      ["lr", "lawrencium", "262", 18, 10,      [103,112,113]],
      ["rf", "rutherfordium", "267", 4, 7,     [104,113]],
      ["db", "dubnium", "268", 5, 7,           [105,113,114]],
      ["sg", "seaborgium", "271", 6, 7,        [106,114,115]],
      ["bh", "bohrium", "272", 7, 7,           [107,115]],
      ["hs", "hassium", "270", 8, 7,           [108,115,116]],
      ["mt", "meitnerium", "276", 9, 7,        [109,116]],
      ["ds", "darmstadium", "281", 10, 7,      [110,116,117]],
      ["rg", "roentgenium", "280", 11, 7,      [111,117]],
      ["cn", "copernicium", "285", 12, 7,      [112,117]],
      ["uut", "unutrium", "284", 13, 7,        [113,117]],
      ["fl", "flerovium", "289", 14, 7,        [114,117]],
      ["uup", "ununpentium", "288", 15, 7,     [115,117]],
      ["lv", "livermorium", "293", 16, 7,      [116,117]],
      ["uus", "ununseptium", "294", 17, 7,     [117]],
      ["uuo", "ununoctium", "294", 18, 7,      [118]]
    ];

    for (var i = 0; i < targets.sphere.length; i++) { 
      table[i * 6 + 5] = [];
      pi = targets.sphere[i].position;
      
      for (var n = 0; n < targets.sphere.length; n++) { 
        pn = targets.sphere[n].position;
        new_dist = Math.sqrt(Math.pow((pn.x - pi.x),2) + Math.pow((pn.y - pi.y),2) + Math.pow((pn.z - pi.z),2));

        if (table[i * 6 + 5].length == 0) {
          table[i * 6 + 5].push(n);
        }
        
        pc = targets.sphere[table[i * 6 + 5][0]].position;
          
        current_dist = Math.sqrt(Math.pow((pc.x - pi.x),2) + Math.pow((pc.y - pi.y),2) + Math.pow((pc.z - pi.z),2));

        if (new_dist <= current_dist || current_dist == 0) {
          table[i * 6 + 5] = [];
          table[i * 6 + 5].push(n);
        }
      }
    }

    console.log("### finish connecting dots ###");

    window.conStrokeOpacity = .3;

    randArray = [];

    for (var i = 0; i < $(".log-list li").length; i++) {
      randomIndex = Math.round(Math.random() * (objects.length - 1));
      if (randArray.indexOf(randomIndex) == -1) randArray.push(randomIndex);
    }

    var connections = setInterval(function () {
      var centerConPointVal = 6;

      $('.log-list li').css('position', 'absolute');
      $('.log-list li').css('z-index', '1000');
      $('.log-list li').css('opacity', '.9');

      for (var i = 0; i < $(".log-list li").length; i++) {
        rp = {
          x: getPositionData($('.element:nth(' + randArray[i] + ')')).left + centerConPointVal,
          y: getPositionData($('.element:nth(' + randArray[i] + ')')).top + centerConPointVal
        }

        $('.log-list li:nth('+ i +')').css('left', rp.x);
        $('.log-list li:nth('+ i +')').css('top', rp.y);
      }

      if (false) {
        // if (!($('#nodeCon').css('display') == 'none')) {
        var canvasCon = document.getElementById('nodeCon');
        canvasCon.width = canvasCon.clientWidth; //window.innerWidth; //canvasWidth; //
        canvasCon.height = canvasCon.clientHeight;
        contextCon = canvasCon.getContext('2d');

        contextCon.clearRect(0, 0, canvasCon.width, canvasCon.height);

        var centerConPointVal = 6;

        for (var i = 0; i < objects.length; i++) {
          con_nodes = table[i * 6 + 5];
          contextCon.beginPath();

          p1 = {
            x: getPositionData($('.element:nth(' + i + ')')).left + centerConPointVal,
            y: getPositionData($('.element:nth(' + i + ')')).top + centerConPointVal
          }

          for ( var c = 0; c < con_nodes.length; c++ ) {
            pa = {
              x: getPositionData($('.element:nth(' + con_nodes[c] + ')')).left + centerConPointVal,
              y: getPositionData($('.element:nth(' + con_nodes[c] + ')')).top + centerConPointVal
            }

            contextCon.moveTo(p1.x, p1.y);
            contextCon.lineTo(pa.x, pa.y);
          }

          // var arrayException = [20, 21, 22, 23, 24, 45, 46, 47, 48, 49, 70, 71, 72, 73, 74, 95, 96, 97, 98, 99];
          // if (arrayException.indexOf(i) == -1) {
            // contextCon.moveTo(p1.x, p1.y);
            // contextCon.lineTo(p4.x, p4.y);
          // }

          contextCon.closePath();

          contextCon.lineWidth = 1;
          contextCon.globalAlpha = conStrokeOpacity;
          contextCon.strokeStyle = '#B9DAFF80'; //'#DB4856'; //"#b9daff";  //"#85CCFF"; //'#DB4856';
          // contextCon.setLineDash([2, 6]);
          contextCon.setLineDash([1, 9]);
          //if ((i + 1) % 5 != 0 || i == 0)
          contextCon.stroke();

        }
      }

      // if (true) {
      if (!($('#nodeCon').css('display') == 'none')) {
        var canvasCon = document.getElementById('nodeCon');
        canvasCon.width = canvasCon.clientWidth; //window.innerWidth; //canvasWidth; //
        canvasCon.height = canvasCon.clientHeight;
        contextCon = canvasCon.getContext('2d');

        contextCon.clearRect(0, 0, canvasCon.width, canvasCon.height);

        var centerConPointVal = 6;

        for (var i = 0; i < objects.length; i++) {
          // console.log(i + ' ' + $('.element:nth(' + i + ')').toString())
          con_nodes = table[i * 6 + 5];
          contextCon.beginPath();

          p1 = {
            x: getPositionData($('.element:nth(' + i + ')')).left + centerConPointVal,
            y: getPositionData($('.element:nth(' + i + ')')).top + centerConPointVal
          }

          for ( var c = 0; c < con_nodes.length; c++ ) {
            pa = {
              x: getPositionData($('.element:nth(' + con_nodes[c] + ')')).left + centerConPointVal,
              y: getPositionData($('.element:nth(' + con_nodes[c] + ')')).top + centerConPointVal
            }

            contextCon.moveTo(p1.x, p1.y);
            contextCon.lineTo(pa.x, pa.y);
          }

          // var arrayException = [20, 21, 22, 23, 24, 45, 46, 47, 48, 49, 70, 71, 72, 73, 74, 95, 96, 97, 98, 99];
          // if (arrayException.indexOf(i) == -1) {
            // contextCon.moveTo(p1.x, p1.y);
            // contextCon.lineTo(p4.x, p4.y);
          // }

          contextCon.closePath();

          contextCon.lineWidth = 1;
          contextCon.globalAlpha = conStrokeOpacity;
          // if ($('.element:nth(' + i + ')')[0]["attributes"][0].value.indexOf("red") != -1) {
          //   contextCon.globalAlpha = .3;
          //   contextCon.strokeStyle = '#DB4856'; //"#b9daff";  //"#85CCFF"; //'#DB4856';
          // }
          // else if ($('.element:nth(' + i + ')')[0]["attributes"][0].value.indexOf("blue") != -1) {
          //   contextCon.globalAlpha = .3;
          //   contextCon.strokeStyle = '#B9DAFF'; //'#DB4856'; //"#b9daff";  //"#85CCFF"; //'#DB4856';
          // }
          // else
            contextCon.strokeStyle = '#B9DAFF80'; //'#DB4856'; //"#b9daff";  //"#85CCFF"; //'#DB4856';
          // contextCon.setLineDash([2, 6]);
          contextCon.setLineDash([1, 9]);
          //if ((i + 1) % 5 != 0 || i == 0)
          contextCon.stroke();

        }
      }
    }, 1000 / 60);

    // var connections = setInterval(function () {

    //   if (!($('#nodeCon').css('display') == 'none')) {

    //     var canvasCon = document.getElementById('nodeCon');
    //     canvasCon.width = canvasCon.clientWidth; //window.innerWidth; //canvasWidth; //
    //     canvasCon.height = canvasCon.clientHeight;
    //     contextCon = canvasCon.getContext('2d');

    //     contextCon.clearRect(0, 0, canvasCon.width, canvasCon.height);

    //     var centerConPointVal = 6;

    //     for (var i = 0; i < objects.length; i++) {
    //       con_nodes = table[i * 6 + 5];
    //       contextCon.beginPath();

    //       p1 = {
    //         x: getPositionData($('.element:nth(' + i + ')')).left + centerConPointVal,
    //         y: getPositionData($('.element:nth(' + i + ')')).top + centerConPointVal
    //       }

    //       for ( var c = 0; c < con_nodes.length; c++ ) {
    //         pa = {
    //           x: getPositionData($('.element:nth(' + con_nodes[c] + ')')).left + centerConPointVal,
    //           y: getPositionData($('.element:nth(' + con_nodes[c] + ')')).top + centerConPointVal
    //         }

    //         contextCon.moveTo(p1.x, p1.y);
    //         contextCon.lineTo(pa.x, pa.y);
    //       }

    //       // var arrayException = [20, 21, 22, 23, 24, 45, 46, 47, 48, 49, 70, 71, 72, 73, 74, 95, 96, 97, 98, 99];
    //       // if (arrayException.indexOf(i) == -1) {
    //         // contextCon.moveTo(p1.x, p1.y);
    //         // contextCon.lineTo(p4.x, p4.y);
    //       // }

    //       contextCon.closePath();

    //       contextCon.lineWidth = 1;
    //       contextCon.globalAlpha = conStrokeOpacity;
    //       contextCon.strokeStyle = '#B9DAFF'; //'#DB4856'; //"#b9daff";  //"#85CCFF"; //'#DB4856';
    //       contextCon.setLineDash([2, 6]);
    //       //if ((i + 1) % 5 != 0 || i == 0)
    //       contextCon.stroke();

    //     }
    //   }
    // }, 1000 / 60);

    
  })

  $('.log-list li').hover(function(){ 
    $('.log-list li').removeClass('selected')
    $(this).addClass('selected') 
  }, function(){ 
    $(this).removeClass('hover') 
  })

  $('span').click(function(){
    $('.log-list').prepend($('.log-list li:last'))
  })

  function gradientOpacity(){
    listSize = $('.log-list li').length;

    middle = Math.ceil(listSize / 2);

    $('.log-list li').removeClass('selected');
    $('.log-list li:nth-child(' + middle + ')').addClass('selected');

    $('.log-list li').each(function(){
      index = $(this).index() + 1

      if (index <= middle) {
        $(this).css("opacity", 1 - (middle-index) / 7)
      } else {
        $(this).css("opacity", 1 - (index-middle) / 7)
      }
    })
  }

    /**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */


var _Group = function () {
	this._tweens = {};
	this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
	getAll: function () {

		return Object.keys(this._tweens).map(function (tweenId) {
			return this._tweens[tweenId];
		}.bind(this));

	},

	removeAll: function () {

		this._tweens = {};

	},

	add: function (tween) {

		this._tweens[tween.getId()] = tween;
		this._tweensAddedDuringUpdate[tween.getId()] = tween;

	},

	remove: function (tween) {

		delete this._tweens[tween.getId()];
		delete this._tweensAddedDuringUpdate[tween.getId()];

	},

	update: function (time, preserve) {

		var tweenIds = Object.keys(this._tweens);

		if (tweenIds.length === 0) {
			return false;
		}

		time = time !== undefined ? time : TWEEN.now();

		// Tweens are updated in "batches". If you add a new tween during an
		// update, then the new tween will be updated in the next batch.
		// If you remove a tween during an update, it may or may not be updated.
		// However, if the removed tween was added during the current batch,
		// then it will not be updated.
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};

			for (var i = 0; i < tweenIds.length; i++) {

				var tween = this._tweens[tweenIds[i]];

				if (tween && tween.update(time) === false) {
					tween._isPlaying = false;

					if (!preserve) {
						delete this._tweens[tweenIds[i]];
					}
				}
			}

			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}

		return true;

	}
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
	return TWEEN._nextId++;
};


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use self.performance.now if it is available.
else if (typeof (self) !== 'undefined' &&
         self.performance !== undefined &&
		 self.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object, group) {
	this._isPaused = false;
	this._pauseStart = null;
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._repeatDelayTime = undefined;
	this._yoyo = false;
	this._isPlaying = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TWEEN.Easing.Linear.None;
	this._interpolationFunction = TWEEN.Interpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onRepeatCallback = null;
	this._onCompleteCallback = null;
	this._onStopCallback = null;
	this._group = group || TWEEN;
	this._id = TWEEN.nextId();

};

TWEEN.Tween.prototype = {
	getId: function () {
		return this._id;
	},

	isPlaying: function () {
		return this._isPlaying;
	},

	isPaused: function () {
		return this._isPaused;
	},

	to: function (properties, duration) {

		this._valuesEnd = Object.create(properties);

		if (duration !== undefined) {
			this._duration = duration;
		}

		return this;

	},

	duration: function duration(d) {
		this._duration = d;
		return this;
	},

	start: function (time) {

		this._group.add(this);

		this._isPlaying = true;

		this._isPaused = false;

		this._onStartCallbackFired = false;

		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
		this._startTime += this._delayTime;

		for (var property in this._valuesEnd) {

			// Check if an Array was provided as property value
			if (this._valuesEnd[property] instanceof Array) {

				if (this._valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (this._object[property] === undefined) {
				continue;
			}

			// Save the starting value, but only once.
			if (typeof(this._valuesStart[property]) === 'undefined') {
				this._valuesStart[property] = this._object[property];
			}

			if ((this._valuesStart[property] instanceof Array) === false) {
				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

		}

		return this;

	},

	stop: function () {

		if (!this._isPlaying) {
			return this;
		}

		this._group.remove(this);

		this._isPlaying = false;

		this._isPaused = false;

		if (this._onStopCallback !== null) {
			this._onStopCallback(this._object);
		}

		this.stopChainedTweens();
		return this;

	},

	end: function () {

		this.update(Infinity);
		return this;

	},

	pause: function(time) {

		if (this._isPaused || !this._isPlaying) {
			return this;
		}

		this._isPaused = true;

		this._pauseStart = time === undefined ? TWEEN.now() : time;

		this._group.remove(this);

		return this;

	},

	resume: function(time) {

		if (!this._isPaused || !this._isPlaying) {
			return this;
		}

		this._isPaused = false;

		this._startTime += (time === undefined ? TWEEN.now() : time)
			- this._pauseStart;

		this._pauseStart = 0;

		this._group.add(this);

		return this;

	},

	stopChainedTweens: function () {

		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
			this._chainedTweens[i].stop();
		}

	},

	group: function (group) {
		this._group = group;
		return this;
	},

	delay: function (amount) {

		this._delayTime = amount;
		return this;

	},

	repeat: function (times) {

		this._repeat = times;
		return this;

	},

	repeatDelay: function (amount) {

		this._repeatDelayTime = amount;
		return this;

	},

	yoyo: function (yoyo) {

		this._yoyo = yoyo;
		return this;

	},

	easing: function (easingFunction) {

		this._easingFunction = easingFunction;
		return this;

	},

	interpolation: function (interpolationFunction) {

		this._interpolationFunction = interpolationFunction;
		return this;

	},

	chain: function () {

		this._chainedTweens = arguments;
		return this;

	},

	onStart: function (callback) {

		this._onStartCallback = callback;
		return this;

	},

	onUpdate: function (callback) {

		this._onUpdateCallback = callback;
		return this;

	},

	onRepeat: function onRepeat(callback) {

		this._onRepeatCallback = callback;
		return this;

	},

	onComplete: function (callback) {

		this._onCompleteCallback = callback;
		return this;

	},

	onStop: function (callback) {

		this._onStopCallback = callback;
		return this;

	},

	update: function (time) {

		var property;
		var elapsed;
		var value;

		if (time < this._startTime) {
			return true;
		}

		if (this._onStartCallbackFired === false) {

			if (this._onStartCallback !== null) {
				this._onStartCallback(this._object);
			}

			this._onStartCallbackFired = true;
		}

		elapsed = (time - this._startTime) / this._duration;
		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

		value = this._easingFunction(elapsed);

		for (property in this._valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (this._valuesStart[property] === undefined) {
				continue;
			}

			var start = this._valuesStart[property] || 0;
			var end = this._valuesEnd[property];

			if (end instanceof Array) {

				this._object[property] = this._interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					this._object[property] = start + (end - start) * value;
				}

			}

		}

		if (this._onUpdateCallback !== null) {
			this._onUpdateCallback(this._object, elapsed);
		}

		if (elapsed === 1) {

			if (this._repeat > 0) {

				if (isFinite(this._repeat)) {
					this._repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in this._valuesStartRepeat) {

					if (typeof (this._valuesEnd[property]) === 'string') {
						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					}

					if (this._yoyo) {
						var tmp = this._valuesStartRepeat[property];

						this._valuesStartRepeat[property] = this._valuesEnd[property];
						this._valuesEnd[property] = tmp;
					}

					this._valuesStart[property] = this._valuesStartRepeat[property];

				}

				if (this._yoyo) {
					this._reversed = !this._reversed;
				}

				if (this._repeatDelayTime !== undefined) {
					this._startTime = time + this._repeatDelayTime;
				} else {
					this._startTime = time + this._delayTime;
				}

				if (this._onRepeatCallback !== null) {
					this._onRepeatCallback(this._object);
				}

				return true;

			} else {

				if (this._onCompleteCallback !== null) {

					this._onCompleteCallback(this._object);
				}

				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					this._chainedTweens[i].start(this._startTime + this._duration);
				}

				return false;

			}

		}

		return true;

	}
};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

THREE.TrackballControls = function ( object, domElement ) {

	if ( domElement === undefined ) console.warn( 'THREE.TrackballControls: The second parameter "domElement" is now mandatory.' );
	if ( domElement === document ) console.error( 'THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.' );

	var _this = this;
	var STATE = { NONE: - 1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

	this.object = object;
	this.domElement = domElement;

	// API

	this.enabled = true;

	this.screen = { left: 0, top: 0, width: 0, height: 0 };

	this.rotateSpeed = 1.0;
	this.zoomSpeed = 1.2;
	this.panSpeed = 0.3;

	this.noRotate = false;
	this.noZoom = false;
	this.noPan = false;

	this.staticMoving = false;
	this.dynamicDampingFactor = 0.2;

	this.minDistance = 0;
	this.maxDistance = Infinity;

	this.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];

	this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.ZOOM, RIGHT: THREE.MOUSE.PAN };

	// internals

	this.target = new THREE.Vector3();

	var EPS = 0.000001;

	var lastPosition = new THREE.Vector3();
	var lastZoom = 1;

	var _state = STATE.NONE,
		_keyState = STATE.NONE,

		_eye = new THREE.Vector3(),

		_movePrev = new THREE.Vector2(),
		_moveCurr = new THREE.Vector2(),

		_lastAxis = new THREE.Vector3(),
		_lastAngle = 0,

		_zoomStart = new THREE.Vector2(),
		_zoomEnd = new THREE.Vector2(),

		_touchZoomDistanceStart = 0,
		_touchZoomDistanceEnd = 0,

		_panStart = new THREE.Vector2(),
		_panEnd = new THREE.Vector2();

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();
	this.zoom0 = this.object.zoom;

	// events

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };


	// methods

	this.handleResize = function () {

		var box = this.domElement.getBoundingClientRect();
		// adjustments come from similar code in the jquery offset() function
		var d = this.domElement.ownerDocument.documentElement;
		this.screen.left = box.left + window.pageXOffset - d.clientLeft;
		this.screen.top = box.top + window.pageYOffset - d.clientTop;
		this.screen.width = box.width;
		this.screen.height = box.height;

	};

	var getMouseOnScreen = ( function () {

		var vector = new THREE.Vector2();

		return function getMouseOnScreen( pageX, pageY ) {

			vector.set(
				( pageX - _this.screen.left ) / _this.screen.width,
				( pageY - _this.screen.top ) / _this.screen.height
			);

			return vector;

		};

	}() );

	var getMouseOnCircle = ( function () {

		var vector = new THREE.Vector2();

		return function getMouseOnCircle( pageX, pageY ) {

			vector.set(
				( ( pageX - _this.screen.width * 0.5 - _this.screen.left ) / ( _this.screen.width * 0.5 ) ),
				( ( _this.screen.height + 2 * ( _this.screen.top - pageY ) ) / _this.screen.width ) // screen.width intentional
			);

			return vector;

		};

	}() );

	this.rotateCamera = ( function () {

		var axis = new THREE.Vector3(),
			quaternion = new THREE.Quaternion(),
			eyeDirection = new THREE.Vector3(),
			objectUpDirection = new THREE.Vector3(),
			objectSidewaysDirection = new THREE.Vector3(),
			moveDirection = new THREE.Vector3(),
			angle;

		return function rotateCamera() {

			moveDirection.set( _moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0 );
			angle = moveDirection.length();

			if ( angle ) {

				_eye.copy( _this.object.position ).sub( _this.target );

				eyeDirection.copy( _eye ).normalize();
				objectUpDirection.copy( _this.object.up ).normalize();
				objectSidewaysDirection.crossVectors( objectUpDirection, eyeDirection ).normalize();

				objectUpDirection.setLength( _moveCurr.y - _movePrev.y );
				objectSidewaysDirection.setLength( _moveCurr.x - _movePrev.x );

				moveDirection.copy( objectUpDirection.add( objectSidewaysDirection ) );

				axis.crossVectors( moveDirection, _eye ).normalize();

				angle *= _this.rotateSpeed;
				quaternion.setFromAxisAngle( axis, angle );

				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

				_lastAxis.copy( axis );
				_lastAngle = angle;

			} else if ( ! _this.staticMoving && _lastAngle ) {

				_lastAngle *= Math.sqrt( 1.0 - _this.dynamicDampingFactor );
				_eye.copy( _this.object.position ).sub( _this.target );
				quaternion.setFromAxisAngle( _lastAxis, _lastAngle );
				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

			}

			_movePrev.copy( _moveCurr );

		};

	}() );


	this.zoomCamera = function () {

		var factor;

		if ( _state === STATE.TOUCH_ZOOM_PAN ) {

			factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
			_touchZoomDistanceStart = _touchZoomDistanceEnd;

			if ( _this.object.isPerspectiveCamera ) {

				_eye.multiplyScalar( factor );

			} else if ( _this.object.isOrthographicCamera ) {

				_this.object.zoom *= factor;
				_this.object.updateProjectionMatrix();

			} else {

				console.warn( 'THREE.TrackballControls: Unsupported camera type' );

			}

		} else {

			factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;

			if ( factor !== 1.0 && factor > 0.0 ) {

				if ( _this.object.isPerspectiveCamera ) {

					_eye.multiplyScalar( factor );

				} else if ( _this.object.isOrthographicCamera ) {

					_this.object.zoom /= factor;
					_this.object.updateProjectionMatrix();

				} else {

					console.warn( 'THREE.TrackballControls: Unsupported camera type' );

				}

			}

			if ( _this.staticMoving ) {

				_zoomStart.copy( _zoomEnd );

			} else {

				_zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

			}

		}

	};

	this.panCamera = ( function () {

		var mouseChange = new THREE.Vector2(),
			objectUp = new THREE.Vector3(),
			pan = new THREE.Vector3();

		return function panCamera() {

			mouseChange.copy( _panEnd ).sub( _panStart );

			if ( mouseChange.lengthSq() ) {

				if ( _this.object.isOrthographicCamera ) {

					var scale_x = ( _this.object.right - _this.object.left ) / _this.object.zoom / _this.domElement.clientWidth;
					var scale_y = ( _this.object.top - _this.object.bottom ) / _this.object.zoom / _this.domElement.clientWidth;

					mouseChange.x *= scale_x;
					mouseChange.y *= scale_y;

				}

				mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );

				pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
				pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );

				_this.object.position.add( pan );
				_this.target.add( pan );

				if ( _this.staticMoving ) {

					_panStart.copy( _panEnd );

				} else {

					_panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );

				}

			}

		};

	}() );

	this.checkDistances = function () {

		if ( ! _this.noZoom || ! _this.noPan ) {

			if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );
				_zoomStart.copy( _zoomEnd );

			}

			if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );
				_zoomStart.copy( _zoomEnd );

			}

		}

	};

	this.update = function () {

		_eye.subVectors( _this.object.position, _this.target );

		if ( ! _this.noRotate ) {

			_this.rotateCamera();

		}

		if ( ! _this.noZoom ) {

			_this.zoomCamera();

		}

		if ( ! _this.noPan ) {

			_this.panCamera();

		}

		_this.object.position.addVectors( _this.target, _eye );

		if ( _this.object.isPerspectiveCamera ) {

			_this.checkDistances();

			_this.object.lookAt( _this.target );

			if ( lastPosition.distanceToSquared( _this.object.position ) > EPS ) {

				_this.dispatchEvent( changeEvent );

				lastPosition.copy( _this.object.position );

			}

		} else if ( _this.object.isOrthographicCamera ) {

			_this.object.lookAt( _this.target );

			if ( lastPosition.distanceToSquared( _this.object.position ) > EPS || lastZoom !== _this.object.zoom ) {

				_this.dispatchEvent( changeEvent );

				lastPosition.copy( _this.object.position );
				lastZoom = _this.object.zoom;

			}

		} else {

			console.warn( 'THREE.TrackballControls: Unsupported camera type' );

		}

	};

	this.reset = function () {

		_state = STATE.NONE;
		_keyState = STATE.NONE;

		_this.target.copy( _this.target0 );
		_this.object.position.copy( _this.position0 );
		_this.object.up.copy( _this.up0 );
		_this.object.zoom = _this.zoom0;

		_this.object.updateProjectionMatrix();

		_eye.subVectors( _this.object.position, _this.target );

		_this.object.lookAt( _this.target );

		_this.dispatchEvent( changeEvent );

		lastPosition.copy( _this.object.position );
		lastZoom = _this.object.zoom;

	};

	// listeners

	function keydown( event ) {

		if ( _this.enabled === false ) return;

		window.removeEventListener( 'keydown', keydown );

		if ( _keyState !== STATE.NONE ) {

			return;

		} else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && ! _this.noRotate ) {

			_keyState = STATE.ROTATE;

		} else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && ! _this.noZoom ) {

			_keyState = STATE.ZOOM;

		} else if ( event.keyCode === _this.keys[ STATE.PAN ] && ! _this.noPan ) {

			_keyState = STATE.PAN;

		}

	}

	function keyup() {

		if ( _this.enabled === false ) return;

		_keyState = STATE.NONE;

		window.addEventListener( 'keydown', keydown, false );

	}

	function mousedown( event ) {

		if ( _this.enabled === false ) return;

		// event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.NONE ) {

			switch ( event.button ) {

				case _this.mouseButtons.LEFT:
					_state = STATE.ROTATE;
					break;

				case _this.mouseButtons.MIDDLE:
					_state = STATE.ZOOM;
					break;

				case _this.mouseButtons.RIGHT:
					_state = STATE.PAN;
					break;

				default:
					_state = STATE.NONE;

			}

		}

		var state = ( _keyState !== STATE.NONE ) ? _keyState : _state;

		if ( state === STATE.ROTATE && ! _this.noRotate ) {

			_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
			_movePrev.copy( _moveCurr );

		} else if ( state === STATE.ZOOM && ! _this.noZoom ) {

			_zoomStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
			_zoomEnd.copy( _zoomStart );

		} else if ( state === STATE.PAN && ! _this.noPan ) {

			_panStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
			_panEnd.copy( _panStart );

		}

		document.addEventListener( 'mousemove', mousemove, false );
		document.addEventListener( 'mouseup', mouseup, false );

		_this.dispatchEvent( startEvent );

	}

	function mousemove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		var state = ( _keyState !== STATE.NONE ) ? _keyState : _state;

		if ( state === STATE.ROTATE && ! _this.noRotate ) {

			_movePrev.copy( _moveCurr );
			_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );

		} else if ( state === STATE.ZOOM && ! _this.noZoom ) {

			_zoomEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

		} else if ( state === STATE.PAN && ! _this.noPan ) {

			_panEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

		}

	}

	function mouseup( event ) {

		if ( _this.enabled === false ) return;

		// event.preventDefault();
		event.stopPropagation();

		_state = STATE.NONE;

		document.removeEventListener( 'mousemove', mousemove );
		document.removeEventListener( 'mouseup', mouseup );
		_this.dispatchEvent( endEvent );

	}

	function mousewheel( event ) {

		if ( _this.enabled === false ) return;

		if ( _this.noZoom === true ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.deltaMode ) {

			case 2:
				// Zoom in pages
				_zoomStart.y -= event.deltaY * 0.025;
				break;

			case 1:
				// Zoom in lines
				_zoomStart.y -= event.deltaY * 0.01;
				break;

			default:
				// undefined, 0, assume pixels
				_zoomStart.y -= event.deltaY * 0.00025;
				break;

		}

		_this.dispatchEvent( startEvent );
		_this.dispatchEvent( endEvent );

	}

	function touchstart( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();

		switch ( event.touches.length ) {

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				_movePrev.copy( _moveCurr );
				break;

			default: // 2 or more
				_state = STATE.TOUCH_ZOOM_PAN;
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panStart.copy( getMouseOnScreen( x, y ) );
				_panEnd.copy( _panStart );
				break;

		}

		_this.dispatchEvent( startEvent );

	}

	function touchmove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1:
				_movePrev.copy( _moveCurr );
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				break;

			default: // 2 or more
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy );

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panEnd.copy( getMouseOnScreen( x, y ) );
				break;

		}

	}

	function touchend( event ) {

		if ( _this.enabled === false ) return;

		switch ( event.touches.length ) {

			case 0:
				_state = STATE.NONE;
				break;

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				_movePrev.copy( _moveCurr );
				break;

		}

		_this.dispatchEvent( endEvent );

	}

	function contextmenu( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();

	}

	this.dispose = function () {

		this.domElement.removeEventListener( 'contextmenu', contextmenu, false );
		this.domElement.removeEventListener( 'mousedown', mousedown, false );
		this.domElement.removeEventListener( 'wheel', mousewheel, false );

		this.domElement.removeEventListener( 'touchstart', touchstart, false );
		this.domElement.removeEventListener( 'touchend', touchend, false );
		this.domElement.removeEventListener( 'touchmove', touchmove, false );

		document.removeEventListener( 'mousemove', mousemove, false );
		document.removeEventListener( 'mouseup', mouseup, false );

		window.removeEventListener( 'keydown', keydown, false );
		window.removeEventListener( 'keyup', keyup, false );

	};

	this.domElement.addEventListener( 'contextmenu', contextmenu, false );
	this.domElement.addEventListener( 'mousedown', mousedown, false );
	this.domElement.addEventListener( 'wheel', mousewheel, false );

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

	window.addEventListener( 'keydown', keydown, false );
	window.addEventListener( 'keyup', keyup, false );

	this.handleResize();

	// force an update at start
	this.update();

};

THREE.TrackballControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.TrackballControls.prototype.constructor = THREE.TrackballControls;

( function () {

  /**
 * Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
 */

  class CSS3DObject extends THREE.Object3D {

    constructor( element ) {

      super();
      this.element = element || document.createElement( 'div' );
      this.element.style.position = 'absolute';
      this.element.style.pointerEvents = 'auto';
      this.element.style.userSelect = 'none';
      this.element.setAttribute( 'draggable', false );
      this.addEventListener( 'removed', function () {

        this.traverse( function ( object ) {

          if ( object.element instanceof Element && object.element.parentNode !== null ) {

            object.element.parentNode.removeChild( object.element );

          }

        } );

      } );

    }

    copy( source, recursive ) {

      super.copy( source, recursive );
      this.element = source.element.cloneNode( true );
      return this;

    }

  }

  CSS3DObject.prototype.isCSS3DObject = true;

  class CSS3DSprite extends CSS3DObject {

    constructor( element ) {

      super( element );
      this.rotation2D = 0;

    }

    copy( source, recursive ) {

      super.copy( source, recursive );
      this.rotation2D = source.rotation2D;
      return this;

    }

  }

  CSS3DSprite.prototype.isCSS3DSprite = true; //

  const _matrix = new THREE.Matrix4();

  const _matrix2 = new THREE.Matrix4();

  class CSS3DRenderer {

    constructor() {

      const _this = this;

      let _width, _height;

      let _widthHalf, _heightHalf;

      const cache = {
        camera: {
          fov: 0,
          style: ''
        },
        objects: new WeakMap()
      };
      const domElement = document.createElement( 'div' );
      domElement.style.overflow = 'hidden';
      this.domElement = domElement;
      const cameraElement = document.createElement( 'div' );
      cameraElement.style.transformStyle = 'preserve-3d';
      cameraElement.style.pointerEvents = 'none';
      domElement.appendChild( cameraElement );

      this.getSize = function () {

        return {
          width: _width,
          height: _height
        };

      };

      this.render = function ( scene, camera ) {

        const fov = camera.projectionMatrix.elements[ 5 ] * _heightHalf;

        if ( cache.camera.fov !== fov ) {

          domElement.style.perspective = camera.isPerspectiveCamera ? fov + 'px' : '';
          cache.camera.fov = fov;

        }

        if ( scene.autoUpdate === true ) scene.updateMatrixWorld();
        if ( camera.parent === null ) camera.updateMatrixWorld();
        let tx, ty;

        if ( camera.isOrthographicCamera ) {

          tx = - ( camera.right + camera.left ) / 2;
          ty = ( camera.top + camera.bottom ) / 2;

        }

        const cameraCSSMatrix = camera.isOrthographicCamera ? 'scale(' + fov + ')' + 'translate(' + epsilon( tx ) + 'px,' + epsilon( ty ) + 'px)' + getCameraCSSMatrix( camera.matrixWorldInverse ) : 'translateZ(' + fov + 'px)' + getCameraCSSMatrix( camera.matrixWorldInverse );
        const style = cameraCSSMatrix + 'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)';

        if ( cache.camera.style !== style ) {

          cameraElement.style.transform = style;
          cache.camera.style = style;

        }

        renderObject( scene, scene, camera, cameraCSSMatrix );

      };

      this.setSize = function ( width, height ) {

        _width = width;
        _height = height;
        _widthHalf = _width / 2;
        _heightHalf = _height / 2;
        domElement.style.width = width + 'px';
        domElement.style.height = height + 'px';
        cameraElement.style.width = width + 'px';
        cameraElement.style.height = height + 'px';

      };

      function epsilon( value ) {

        return Math.abs( value ) < 1e-10 ? 0 : value;

      }

      function getCameraCSSMatrix( matrix ) {

        const elements = matrix.elements;
        return 'matrix3d(' + epsilon( elements[ 0 ] ) + ',' + epsilon( - elements[ 1 ] ) + ',' + epsilon( elements[ 2 ] ) + ',' + epsilon( elements[ 3 ] ) + ',' + epsilon( elements[ 4 ] ) + ',' + epsilon( - elements[ 5 ] ) + ',' + epsilon( elements[ 6 ] ) + ',' + epsilon( elements[ 7 ] ) + ',' + epsilon( elements[ 8 ] ) + ',' + epsilon( - elements[ 9 ] ) + ',' + epsilon( elements[ 10 ] ) + ',' + epsilon( elements[ 11 ] ) + ',' + epsilon( elements[ 12 ] ) + ',' + epsilon( - elements[ 13 ] ) + ',' + epsilon( elements[ 14 ] ) + ',' + epsilon( elements[ 15 ] ) + ')';

      }

      function getObjectCSSMatrix( matrix ) {

        const elements = matrix.elements;
        const matrix3d = 'matrix3d(' + epsilon( elements[ 0 ] ) + ',' + epsilon( elements[ 1 ] ) + ',' + epsilon( elements[ 2 ] ) + ',' + epsilon( elements[ 3 ] ) + ',' + epsilon( - elements[ 4 ] ) + ',' + epsilon( - elements[ 5 ] ) + ',' + epsilon( - elements[ 6 ] ) + ',' + epsilon( - elements[ 7 ] ) + ',' + epsilon( elements[ 8 ] ) + ',' + epsilon( elements[ 9 ] ) + ',' + epsilon( elements[ 10 ] ) + ',' + epsilon( elements[ 11 ] ) + ',' + epsilon( elements[ 12 ] ) + ',' + epsilon( elements[ 13 ] ) + ',' + epsilon( elements[ 14 ] ) + ',' + epsilon( elements[ 15 ] ) + ')';
        return 'translate(-50%,-50%)' + matrix3d;

      }

      function renderObject( object, scene, camera, cameraCSSMatrix ) {

        if ( object.isCSS3DObject ) {

          object.onBeforeRender( _this, scene, camera );
          let style;

          if ( object.isCSS3DSprite ) {

            // http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/
            _matrix.copy( camera.matrixWorldInverse );

            _matrix.transpose();

            if ( object.rotation2D !== 0 ) _matrix.multiply( _matrix2.makeRotationZ( object.rotation2D ) );

            _matrix.copyPosition( object.matrixWorld );

            _matrix.scale( object.scale );

            _matrix.elements[ 3 ] = 0;
            _matrix.elements[ 7 ] = 0;
            _matrix.elements[ 11 ] = 0;
            _matrix.elements[ 15 ] = 1;
            style = getObjectCSSMatrix( _matrix );

          } else {

            style = getObjectCSSMatrix( object.matrixWorld );

          }

          const element = object.element;
          const cachedObject = cache.objects.get( object );

          if ( cachedObject === undefined || cachedObject.style !== style ) {

            element.style.transform = style;
            const objectData = {
              style: style
            };
            cache.objects.set( object, objectData );

          }

          element.style.display = object.visible ? '' : 'none';

          if ( element.parentNode !== cameraElement ) {

            cameraElement.appendChild( element );

          }

          object.onAfterRender( _this, scene, camera );

        }

        for ( let i = 0, l = object.children.length; i < l; i ++ ) {

          renderObject( object.children[ i ], scene, camera, cameraCSSMatrix );

        }

      }

    }

  }

  THREE.CSS3DObject = CSS3DObject;
  THREE.CSS3DRenderer = CSS3DRenderer;
  THREE.CSS3DSprite = CSS3DSprite;

} )();

THREE.CSS3DSprite = function ( element ) {
	THREE.CSS3DObject.call( this, element );
};

THREE.CSS3DRenderer = function () {

	var _width, _height;
	var _widthHalf, _heightHalf;

	var matrix = new THREE.Matrix4();

	var cache = {
		camera: { fov: 0, style: '' },
		objects: new WeakMap()
	};

	var domElement = document.createElement( 'div' );
	domElement.style.overflow = 'hidden';

	this.domElement = domElement;

	var cameraElement = document.createElement( 'div' );

	cameraElement.style.WebkitTransformStyle = 'preserve-3d';
	cameraElement.style.transformStyle = 'preserve-3d';

	domElement.appendChild( cameraElement );

	var isIE = /Trident/i.test( navigator.userAgent );

	this.getSize = function () {

		return {
			width: _width,
			height: _height
		};

	};

	this.setSize = function ( width, height ) {

		_width = width;
		_height = height;
		_widthHalf = _width / 2;
		_heightHalf = _height / 2;

		domElement.style.width = width + 'px';
		domElement.style.height = height + 'px';

		cameraElement.style.width = width + 'px';
		cameraElement.style.height = height + 'px';

	};

	function epsilon( value ) {

		return Math.abs( value ) < 1e-10 ? 0 : value;

	}

	function getCameraCSSMatrix( matrix ) {

		var elements = matrix.elements;

		return 'matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( - elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( elements[ 6 ] ) + ',' +
			epsilon( elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( - elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( - elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';

	}

	function getObjectCSSMatrix( matrix, cameraCSSMatrix ) {

		var elements = matrix.elements;
		var matrix3d = 'matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( - elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( - elements[ 6 ] ) + ',' +
			epsilon( - elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';

		if ( isIE ) {

			return 'translate(-50%,-50%)' +
				'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)' +
				cameraCSSMatrix +
				matrix3d;

		}

		return 'translate(-50%,-50%)' + matrix3d;

	}

	function renderObject( object, camera, cameraCSSMatrix ) {

		if ( object instanceof THREE.CSS3DObject ) {

			var style;

			if ( object instanceof THREE.CSS3DSprite ) {

				// http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/

				matrix.copy( camera.matrixWorldInverse );
				matrix.transpose();
				matrix.copyPosition( object.matrixWorld );
				matrix.scale( object.scale );

				matrix.elements[ 3 ] = 0;
				matrix.elements[ 7 ] = 0;
				matrix.elements[ 11 ] = 0;
				matrix.elements[ 15 ] = 1;

				style = getObjectCSSMatrix( matrix, cameraCSSMatrix );

			} else {

				style = getObjectCSSMatrix( object.matrixWorld, cameraCSSMatrix );

			}

			var element = object.element;
			var cachedObject = cache.objects.get( object );

			if ( cachedObject === undefined || cachedObject.style !== style ) {

				element.style.WebkitTransform = style;
				element.style.transform = style;

				var objectData = { style: style };

				if ( isIE ) {

					objectData.distanceToCameraSquared = getDistanceToSquared( camera, object );

				}

				cache.objects.set( object, objectData );

			}

			if ( element.parentNode !== cameraElement ) {

				cameraElement.appendChild( element );

			}

		}

		for ( var i = 0, l = object.children.length; i < l; i ++ ) {

			renderObject( object.children[ i ], camera, cameraCSSMatrix );

		}

	}

	var getDistanceToSquared = function () {

		var a = new THREE.Vector3();
		var b = new THREE.Vector3();

		return function ( object1, object2 ) {

			a.setFromMatrixPosition( object1.matrixWorld );
			b.setFromMatrixPosition( object2.matrixWorld );

			return a.distanceToSquared( b );

		};

	}();

	function filterAndFlatten( scene ) {

		var result = [];

		scene.traverse( function ( object ) {

			if ( object instanceof THREE.CSS3DObject ) result.push( object );

		} );

		return result;

	}

	function zOrder( scene ) {

		var sorted = filterAndFlatten( scene ).sort( function ( a, b ) {

			var distanceA = cache.objects.get( a ).distanceToCameraSquared;
			var distanceB = cache.objects.get( b ).distanceToCameraSquared;

			return distanceA - distanceB;

		} );

		var zMax = sorted.length;

		for ( var i = 0, l = sorted.length; i < l; i ++ ) {

			sorted[ i ].element.style.zIndex = zMax - i;

		}

	}

	this.render = function ( scene, camera ) {

		var fov = camera.projectionMatrix.elements[ 5 ] * _heightHalf;

		if ( cache.camera.fov !== fov ) {

			if ( camera.isPerspectiveCamera ) {

				domElement.style.WebkitPerspective = fov + 'px';
				domElement.style.perspective = fov + 'px';

			} else {

				domElement.style.WebkitPerspective = '';
				domElement.style.perspective = '';

			}

			cache.camera.fov = fov;

		}

		scene.updateMatrixWorld();

		if ( camera.parent === null ) camera.updateMatrixWorld();

		if ( camera.isOrthographicCamera ) {

			var tx = - ( camera.right + camera.left ) / 2;
			var ty = ( camera.top + camera.bottom ) / 2;

		}

		var cameraCSSMatrix = camera.isOrthographicCamera ?
			'scale(' + fov + ')' + 'translate(' + epsilon( tx ) + 'px,' + epsilon( ty ) + 'px)' + getCameraCSSMatrix( camera.matrixWorldInverse ) :
			'translateZ(' + fov + 'px)' + getCameraCSSMatrix( camera.matrixWorldInverse );

		var style = cameraCSSMatrix +
			'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)';

		if ( cache.camera.style !== style && ! isIE ) {

			cameraElement.style.WebkitTransform = style;
			cameraElement.style.transform = style;

			cache.camera.style = style;

		}

		renderObject( scene, camera, cameraCSSMatrix );

		if ( isIE ) {

			// IE10 and 11 does not support 'preserve-3d'.
			// Thus, z-order in 3D will not work.
			// We have to calc z-order manually and set CSS z-index for IE.
			// FYI: z-index can't handle object intersection
			zOrder( scene );

		}

	};

};

    var table = [
      "h", "hydrogen", "1.00794", 1, 1,       [1,2,3,4,5],
      "he", "helium", "4.002602", 18, 1,      [2,5,6,7,8,9],
      "li", "lithium", "6.941", 1, 2,         [3,9,10,11],
      "be", "beryllium", "9.012182", 2, 2,    [4,11,12,13],
      "b", "boron", "10.811", 13, 2,          [5,13,14],
      "c", "carbon", "12.0107", 14, 2,        [6,14,15,16],
      "n", "nitrogen", "14.0067", 15, 2,      [7,16,17,18],
      "o", "oxygen", "15.9994", 16, 2,        [8,18,19],
      "f", "fluorine", "18.9984032", 17, 2,   [9,19,20,21],
      "ne", "neon", "20.1797", 18, 2,         [10,21,22],
      "na", "sodium", "22.98976...", 1, 3,    [11,22,23,24],
      "mg", "magnesium", "24.305", 2, 3,      [12,24,25],
      "al", "aluminium", "26.9815386", 13, 3, [13,25,26],
      "si", "silicon", "28.0855", 14, 3,      [14,26,27,28],
      "p", "phosphorus", "30.973762", 15, 3,  [15,28,29],
      "s", "sulfur", "32.065", 16, 3,         [16,29,30,31],
      "cl", "chlorine", "35.453", 17, 3,      [17,31,32],
      "ar", "argon", "39.948", 18, 3,         [18,32,33],
      "k", "potassium", "39.948", 1, 4,       [19,33,34],
      "ca", "calcium", "40.078", 2, 4,        [20,34,35],
      "sc", "scandium", "44.955912", 3, 4,    [21,35,36,37],
      "ti", "titanium", "47.867", 4, 4,       [22,37,38],
      "v", "vanadium", "50.9415", 5, 4,       [23,38,39],
      "cr", "chromium", "51.9961", 6, 4,      [24,39,40],
      "mn", "manganese", "54.938045", 7, 4,   [25,40,41,42],
      "fe", "iron", "55.845", 8, 4,           [26,42,43],
      "co", "cobalt", "58.933195", 9, 4,      [27,43,44],
      "ni", "nickel", "58.6934", 10, 4,       [28,44,45],
      "cu", "copper", "63.546", 11, 4,        [29,45,46],
      "zn", "zinc", "65.38", 12, 4,           [30,46,47],
      "ga", "gallium", "69.723", 13, 4,       [31,47,48],
      "ge", "germanium", "72.63", 14, 4,      [32,48,49,50],
      "as", "arsenic", "74.9216", 15, 4,      [33,50,51],
      "se", "selenium", "78.96", 16, 4,       [34,51,52],
      "br", "bromine", "79.904", 17, 4,       [35,52,53],
      "kr", "krypton", "83.798", 18, 4,       [36,53,54],
      "rb", "rubidium", "85.4678", 1, 5,      [37,54,55],
      "sr", "strontium", "87.62", 2, 5,       [38,55,56],
      "y", "yttrium", "88.90585", 3, 5,       [39,56,57],
      "zr", "zirconium", "91.224", 4, 5,      [40,57,58],
      "nb", "niobium", "92.90628", 5, 5,      [41,58,59],
      "mo", "molybdenum", "95.96", 6, 5,      [42,59,60],
      "tc", "technetium", "98", 7, 5,         [43,60,61],
      "ru", "ruthenium", "101.07", 8, 5,      [44,61,62],
      "rh", "rhodium", "102.9055", 9, 5,      [45,62,63],
      "pd", "palladium", "106.42", 10, 5,     [46,63,64,65],
      "ag", "silver", "107.8682", 11, 5,      [47,65,66],
      "cd", "cadmium", "112.411", 12, 5,      [48,66,67],
      "in", "indium", "114.818", 13, 5,       [49,67,68],
      "sn", "tin", "118.71", 14, 5,           [50,68,69],
      "sb", "antimony", "121.76", 15, 5,      [51,69,70],
      "te", "tellurium", "127.6", 16, 5,      [52,70,71],
      "i", "iodine", "126.90447", 17, 5,      [53,71,72],
      "xe", "xenon", "131.293", 18, 5,        [54,72,73],
      "cs", "caesium", "132.9054", 1, 6,      [55,73],
      "ba", "barium", "132.9054", 2, 6,       [56,73,74],
      "la", "lanthanum", "138.90547", 4, 9,   [57,74,75],
      "ce", "cerium", "140.116", 5, 9,        [58,75,76],
      "pr", "praseodymium", "140.90765", 6, 9,[59,76,77],
      "nd", "neodymium", "144.242", 7, 9,     [60,77,78],
      "pm", "promethium", "145", 8, 9,        [61,78,79],
      "sm", "samarium", "150.36", 9, 9,       [62,79,80],
      "eu", "europium", "151.964", 10, 9,     [63,80,81],
      "gd", "gadolinium", "157.25", 11, 9,    [64,81,82],
      "tb", "terbium", "158.92535", 12, 9,    [65,82,83],
      "dy", "dysprosium", "162.5", 13, 9,     [66,83,84],
      "ho", "holmium", "164.93032", 14, 9,    [67,84,85],
      "er", "erbium", "167.259", 15, 9,       [68,85,86],
      "tm", "thulium", "168.93421", 16, 9,    [69,86,87],
      "yb", "ytterbium", "173.054", 17, 9,    [70,87],
      "lu", "lutetium", "174.9668", 18, 9,    [71,87,88],
      "hf", "hafnium", "178.49", 4, 6,        [72,88,89],
      "ta", "tantalum", "180.94788", 5, 6,    [73,89,90],
      "w", "tungsten", "183.84", 6, 6,        [74,90,91],
      "re", "rhenium", "186.207", 7, 6,       [75,91,92],
      "os", "osmium", "190.23", 8, 6,         [76,92,93],
      "ir", "iridium", "192.217", 9, 6,       [77,93,94],
      "pt", "platinum", "195.084", 10, 6,     [78,94],
      "au", "gold", "196.966569", 11, 6,      [79,94,95],
      "hg", "mercury", "200.59", 12, 6,       [80,95,96],
      "tl", "thallium", "204.3833", 13, 6,    [81,96,97],
      "pb", "lead", "207.2", 14, 6,           [82,97,98],
      "bi", "bismuth", "208.9804", 15, 6,     [83,98,99],
      "po", "polonium", "209", 16, 6,         [84,99],
      "at", "astatine", "210", 17, 6,         [85,99,100],
      "rn", "radon", "222", 18, 6,            [86,100,101],
      "fr", "francium", "223", 1, 7,          [87,101,102],
      "ra", "radium", "226", 2, 7,            [88,102],
      "ac", "actinium", "227", 4, 10,         [89,102,103],
      "th", "thorium", "232.03806", 5, 10,    [90,103,104],
      "pa", "protactinium", "231.0588", 6, 10,[91,104,105],
      "u", "uranium", "238.02891", 7, 10,     [92,105],
      "np", "neptunium", "237", 8, 10,        [93,105,106],
      "pu", "plutonium", "244", 9, 10,        [94,106,107],
      "am", "americium", "243", 10, 10,       [95,107,108],
      "cm", "curium", "247", 11, 10,          [96,108],
      "bk", "berkelium", "247", 12, 10,       [97,108,109],
      "cf", "californium", "251", 13, 10,     [98,109,110],
      "es", "einstenium", "252", 14, 10,      [99,110],
      "fm", "fermium", "257", 15, 10,         [100,110,111],
      "md", "mendelevium", "258", 16, 10,     [101,111,112],
      "no", "nobelium", "259", 17, 10,        [102,112],
      "lr", "lawrencium", "262", 18, 10,      [103,112,113],
      "rf", "rutherfordium", "267", 4, 7,     [104,113],
      "db", "dubnium", "268", 5, 7,           [105,113,114],
      "sg", "seaborgium", "271", 6, 7,        [106,114,115],
      "bh", "bohrium", "272", 7, 7,           [107,115],
      "hs", "hassium", "270", 8, 7,           [108,115,116],
      "mt", "meitnerium", "276", 9, 7,        [109,116],
      "ds", "darmstadium", "281", 10, 7,      [110,116,117],
      "rg", "roentgenium", "280", 11, 7,      [111,117],
      "cn", "copernicium", "285", 12, 7,      [112,117],
      "uut", "unutrium", "284", 13, 7,        [113,117],
      "fl", "flerovium", "289", 14, 7,        [114,117],
      "uup", "ununpentium", "288", 15, 7,     [115,117],
      "lv", "livermorium", "293", 16, 7,      [116,117],
      "uus", "ununseptium", "294", 17, 7,     [117],
      "uuo", "ununoctium", "294", 18, 7,      [118]
    ];
 
    var camera, scene, renderer1;
    var controls;
  
    window.objects = [];
    window.targets = { table: [], sphere: [], globe: [], helix: [], grid: [], rand: [], dna: [], city: [] };

    function transform( targets, duration ) {

      TWEEN.removeAll();
  
      // for ( var i = 0; i < objects.length; i ++ ) {
      for ( var i = 0; i < targets.length; i ++ ) {
        var object = objects[ i ];
        var target = targets[ i ];
  
        new TWEEN.Tween( object.position )
          .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
          .easing( TWEEN.Easing.Exponential.InOut )
          .start();
  
        new TWEEN.Tween( object.rotation )
          .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
          .easing( TWEEN.Easing.Exponential.InOut )
          .start();
      }
  
      new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize( window.innerWidth, window.innerHeight );
  
      render();
    }
  
    function animate() {
      requestAnimationFrame( animate );
  
      TWEEN.update();
  
      controls.update();
    }
  
    function render() {
      renderer.render( scene, camera );
    }

    function init_particles() {
      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 2500;
      // camera.position.z = 3000;

      scene = new THREE.Scene();

      // random

      for ( var i = 0; i < table.length; i += 6 ) {

        var element = document.createElement( 'div' );
        element.className = (i/6) + 1 == 63 ? 'element first' : 'element first';
        // element.id = i == 0 ? 'first' : '';
        // element.id = (i/6) + 1 == 63 ? 'first' : '';

        // element.style.backgroundColor = 'rgba(10,20,100,' + ( Math.random() * 0.25 + 0.25 ) + ')';
        //element.style.backgroundColor = 'rgba(185,218,255,.1)';

        var elementdot = document.createElement( 'div' );
        elementdot.className = 'element-dot';
        if(Math.round((Math.random() * table.length), 0) < table.length * .075) {
          element.className = 'element red-border'; //active
          //elementdot.className = 'element-dot red-border';
          elementdot.style.borderColor = 'rgba(219, 72, 86, 1)';
        } else if(Math.round((Math.random() * table.length), 0) < table.length * .15) {
          element.className = 'element blue-border'; //active
          //elementdot.className = 'element-dot red-border';
          // elementdot.style.borderColor = 'rgba(219, 72, 86, 1)';
        }
        element.appendChild( elementdot );

        var number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = (i/6) + 1;
        element.appendChild( number );

        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = table[ i ];
        // element.appendChild( symbol );

        var details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = table[ i + 2 ]; //table[ i + 1 ] + '<br>' +
        element.appendChild( details );

        var object = new THREE.CSS3DObject( element );
        // object.position.x = Math.random() * 3000 - 1500;
        // object.position.y = Math.random() * 2000 - 1000;
        // object.position.z = Math.random() * 2000 - 1000;
        scene.add( object );

        
        // targets.rand.push( object );
        objects.push( object );

        var object = new THREE.Object3D();
        // object.position.x = ( table[ i + 3 ] * 140 ); //- 1260;
        // object.position.y = - ( table[ i + 4 ] * 180 );// + 990;
        object.position.x = ( table[ i + 3 ] * 140 ) - 1260;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

        targets.table.push( object );

      }

      //random positions
      var widthRef = window.innerWidth;
      var heightRef = window.innerHeight;
      for ( var i = 0; i < objects.length; i ++ ) {
        //var element = document.createElement( 'div' );
        //var object = new THREE.CSS3DObject(element);
        var object = new THREE.Object3D();

        // object.position.x = Math.random() * widthRef * 2 - widthRef;
        // object.position.y = Math.random() * heightRef * 2 - heightRef;
        // object.position.z = Math.random() * widthRef - 1000;
        //scene.add( object );

        //objects.push( object );

        targets.rand.push( object );
      }

      //periodic table

      for ( var i = 0; i < objects.length; i ++ ) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * -500 + 1000;

        object.position.x = ( table[ i + 3 ] * 140 ) - 1260;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

        targets.table.push( object );

      }

      // grid
      var gridFactor = 500;
      for ( var i = 0; i < objects.length; i ++ ) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * gridFactor / 2 ) - gridFactor;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * gridFactor / 2 ) + gridFactor;
        object.position.z = ( Math.floor( i / 25 ) ) * -gridFactor / 2 + gridFactor; // * -500; //+ 1000;

        targets.grid.push( object );
      }

      // sphere

      var vector = new THREE.Vector3();

      for ( var i = 0, l = objects.length; i < l; i ++ ) {
        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();
        var randCircle = Math.random() * 800; //700;
        object.position.x = randCircle * Math.cos( theta ) * Math.sin( phi );
        object.position.y = randCircle * Math.sin( theta ) * Math.sin( phi );
        object.position.z = randCircle * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 )

        object.lookAt( vector );

        targets.sphere.push( object );
      }

      //city
      var scaleSize = 200;

      var vector = new THREE.Vector3();

      for ( var i = 0, l = 10; i < l; i ++ ) {
        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();
        var randCircle = Math.random() * 1000;
        // object.position.x = randCircle * Math.cos( theta ) * Math.sin( phi );
        // object.position.y = randCircle * Math.sin( theta ) * Math.sin( phi );
        // object.position.z = randCircle * Math.cos( phi );

        object.position.x = 0; //randCircle * Math.cos( theta ) * Math.sin( phi );
        object.position.y = 0; //randCircle * Math.sin( theta ) * Math.sin( phi );
        object.position.z = 1 * (scaleSize * (i + 1)); //randCircle * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.city.push( object );
      }

      for ( var i = 0, l = 10; i < l; i ++ ) {
        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();
        var randCircle = Math.random() * 1000;
        // object.position.x = randCircle * Math.cos( theta ) * Math.sin( phi );
        // object.position.y = randCircle * Math.sin( theta ) * Math.sin( phi );
        // object.position.z = randCircle * Math.cos( phi );

        object.position.x = 0; //randCircle * Math.cos( theta ) * Math.sin( phi );
        object.position.y = 1 * (scaleSize * (i + 1)); //randCircle * Math.sin( theta ) * Math.sin( phi );
        object.position.z = 0; //randCircle * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.city.push( object );
      }

      for ( var i = 0, l = 10; i < l; i ++ ) {
        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();
        var randCircle = Math.random() * 1000;
        // object.position.x = randCircle * Math.cos( theta ) * Math.sin( phi );
        // object.position.y = randCircle * Math.sin( theta ) * Math.sin( phi );
        // object.position.z = randCircle * Math.cos( phi );

        object.position.x = 1 * (scaleSize * (i + 1)); //randCircle * Math.cos( theta ) * Math.sin( phi );
        object.position.y = 0; //randCircle * Math.sin( theta ) * Math.sin( phi );
        object.position.z = 0; //randCircle * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.city.push( object );
      }

      // globe

      var vector = new THREE.Vector3();

      for ( var i = 0, l = objects.length; i < l; i ++ ) {
        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();
        var randCircle = 700;
        object.position.x = randCircle * Math.cos( theta ) * Math.sin( phi );
        object.position.y = randCircle * Math.sin( theta ) * Math.sin( phi );
        object.position.z = randCircle * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.globe.push( object );
      }

      //

      // dna

      var dnaFactor = 20;
      for (var i = 0; i < objects.length; i++) {
        var object = new THREE.Object3D();

        object.position.x = i % 2 == 0 ? -dnaFactor * 2 : dnaFactor * 2; //((i % 2) * dnaFactor / 2) - dnaFactor * i;
        object.position.y = -i * dnaFactor + window.innerHeight; //(- (Math.floor(i / 20) % 20) * dnaFactor / 2); //+ dnaFactor;
        object.position.z = (Math.floor(i / 25)) * -dnaFactor / 2 + dnaFactor;// * -500; //+ 1000;

        targets.dna.push(object);
      }

      //

      renderer = new THREE.CSS3DRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.domElement.style.position = 'fixed';
      document.getElementById( 'particles' ).appendChild( renderer.domElement );

      //

      controls = new THREE.TrackballControls( camera, renderer.domElement );
      controls.rotateSpeed = 1.5;
      controls.minDistance = 500;
      controls.maxDistance = 10000;
      controls.addEventListener( 'change', render );

      // var button = document.getElementById( 'table' );
      // button.addEventListener( 'click', function ( event ) {

      // 	transform( targets.table, 750 );

      // }, false );

      // var button = document.getElementById( 'grid' );
      // button.addEventListener( 'click', function ( event ) {

      // 	transform( targets.grid, 750 );

      // }, false );

      // var button = document.getElementById( 'rand' );
      // button.addEventListener( 'click', function ( event ) {

      // 	transform( targets.rand, 750 );

      // }, false );

        
      //transform( targets.table, 2000 );
      //transform( targets.grid, 2000 );
      // transform( targets.sphere, 1000 );
      transform( targets.rand, 1000 );

      window.addEventListener( 'resize', onWindowResize, false );

    }

    init_particles();
    animate();

    var inner_canvas = document.createElement('canvas');
    inner_canvas.className = 'inner_canvas';
    // inner_canvas.id = 'inner_canvas';

    var first = document.getElementsByClassName('first')[0];
    // var first = document.getElementById('first');

    // first.appendChild( inner_canvas );

    $(".first").append(inner_canvas);

    $('body').mouseover(function() {
      // $(this).css({
      //   cursor: 'none!important'
      // });
    });
    
    $(document).on('mousemove', function(e) {
      e.preventDefault();
      e.stopPropagation();

      $('#circle-big').css({
        left: e.pageX,
        top: e.pageY
      });

      $('#circle').css({
        left: e.pageX,
        top: e.pageY
      });
    });

    $(document).keydown(function (e) {
      if (e.keyCode == 38) {
        $('.log-list').append($('.log-list li:first'));

        var i = $('.log-list li.selected').attr('id');
        console.log($('.log-list li.selected').attr('id'));
        $('.element, .element .inner_canvas').removeClass('selected');
        $('.element:nth-child(' + i + '), .element:nth-child(' + i + ') .inner_canvas').addClass('selected');
        
        gradientOpacity()
      }

      if (e.keyCode == 40) { 
        $('.log-list').prepend($('.log-list li:last'));

        var i = $('.log-list li.selected').attr('id');
        console.log($('.log-list li.selected').attr('id'));
        $('.element, .element .inner_canvas').removeClass('selected');
        $('.element:nth-child(' + i + '), .element:nth-child(' + i + ') .inner_canvas').addClass('selected');

        gradientOpacity()
      }

      if (e.keyCode == 89 && e.ctrlKey) {
        //if ($('#screenSystemElem').css('display') == 'none')
        //  $('#screenSystemElem').fadeIn(250);
        //else $('#screenSystemElem').fadeOut(250);

        // if ($('#screenSystemElem').css('display') == 'block') {
        //   if (!showDots) {
        //     showDots = true;
        //     systemElements.init();
        //   }
        //   else {
        //     showDots = false;
        //     systemElements.init();
        //   }
        // }

        showDots = !showDots;
        systemElements.init();
      }
  
      //if ($('#ctrl-menu').css('display') == 'none')
      //  $('#ctrl-menu').fadeIn(250);
      //else $('#ctrl-menu').fadeOut(250);
      if (e.keyCode == 71 && e.ctrlKey) {
        // camera.position.z = 1500;
        transform(targets.globe, 1000);
      }

      if (e.keyCode == 67 && e.altKey) {
        if ($('#nodeCon').css('display') == 'none') {
          $('#nodeCon').fadeIn(250);
        }
        else {
          $('#nodeCon').fadeOut(250);
        }
      }

      if (e.keyCode == 67 && e.ctrlKey) {
        if ($('.controls').css('display') == 'none') {
          $('.controls').fadeIn(250);
        }
        else {
          $('.controls').fadeOut(250);
        }
      }
  
      if (e.keyCode == 66 && e.ctrlKey) {
        // if ($('#back-dot-grid').css('display') == 'none')
        //   $('#back-dot-grid').fadeIn(250);
        // else {
        //   // showDots = false;
        //   // systemElements.init();
        //   $('#back-dot-grid').fadeOut(250);
        // }

        if ($('#plusigns').css('display') == 'none')
          $('#plusigns').fadeIn(250);
        else {
          $('#plusigns').fadeOut(250);
        }
      }

      if (e.keyCode == 73 && e.ctrlKey) {
        if ($('#screenSystemElem').css('display') == 'none')
          $('#screenSystemElem').fadeIn(250);
        else {
          showDots = false;
          systemElements.init();
          $('#screenSystemElem').fadeOut(250);
        }
      }

      if (e.keyCode == 68 && e.ctrlKey) {
        showDarkLogo = !showDarkLogo;
        systemElements.init();
      }

      if (e.keyCode == 69 && e.ctrlKey) {
        engineOn = !engineOn;

        rotationVelocity = engineOn ? initialRotationVelocity : rotationVelocity;

      }
  
      if (e.keyCode == 86 && e.ctrlKey) {
        if ($('#voronoi').css('display') == 'none') {
          //$('#filter').fadeOut(250);
          $('#voronoi').fadeIn(250);
        }
        else {
          $('#voronoi').fadeOut(250);
          //$('#filter').fadeIn(250);
        }
      }
  
      if (e.keyCode == 76 && e.ctrlKey) {
        if ($('.log-list').css('display') == 'none')
          $('.log-list').fadeIn(250);
        else $('.log-list').fadeOut(250);
      }
  
      if (e.keyCode == 77 && e.ctrlKey) {
        // console.log('circular menu key event');
        if ($('#circular-menu').css('display') == 'none') {
          $('#circular-menu').fadeIn(250);
        }
        else $('#circular-menu').fadeOut(250);
      }
  
      if (e.keyCode == 65 && e.ctrlKey) {
        if ($('#neural-network').css('display') == 'none') {
          $('#neural-network').fadeIn(250);
        }
        else $('#neural-network').fadeOut(250);
      }
  
      // if (e.keyCode == 66 && e.ctrlKey) {
      //   if ($('#tagCloud').css('display') == 'none') {
      //     $('#tagCloud').fadeIn(250);
      //   }
      //   else $('#tagCloud').fadeOut(250);
      // }
  
      if (e.keyCode == 84 && e.ctrlKey) {
        // camera.position.z = 1500;
        transform(targets.grid, 1000);
      }
  
      if (e.keyCode == 80 && e.ctrlKey) {
        camera.position.z = 2500;

        transform(targets.table, 1000);
      }
  
      // if (e.keyCode == 82 && e.ctrlKey) {
      //   transform(targets.rand, 1000);
      // }

      if (e.keyCode == 82 && e.ctrlKey) {
        // if ($('#particles').css('display') == 'none') {
        //   $('#particles').fadeIn(250);
        // }
        // else {
        //   $('#particles').fadeOut(250);
        // }
        $('#rain-meter').fadeToggle(250, function(){
          clockRotationFactor = 0;
        });
      }


  
      // if (e.keyCode == 68 && e.ctrlKey) {
      //   // transform(targets.dna, 1000);
      // }

      if (e.keyCode == 68 && e.ctrlKey) {
        if ($('#discovery').css('display') == 'none') {
          $('#discovery').fadeIn(250);
        }
        else $('#discovery').fadeOut(250);
      }
  
      if (e.keyCode == 83 && e.ctrlKey) {
        
        // var connections = setInterval(function () {
        //   if (camera.position.z > 1500) camera.position.z -= 10;
        // }, 1000 / 60);

        // camera.position.z = 2000;

        transform(targets.sphere, 1000);
      }


      if (e.keyCode == 66 && e.altKey) {
        
        // var connections = setInterval(function () {
        //   if (camera.position.z > 1500) camera.position.z -= 10;
        // }, 1000 / 60);

        // camera.position.z = 2000;

        transform(targets.city, 1000);
      }
  
      if (e.keyCode == 72 && e.ctrlKey) { //&& e.ctrlKey
        if ($('#particles').css('display') == 'none') {
          $('#particles').fadeIn(250);
        }
        else {
          $('#particles').fadeOut(250);
          $('#nodeCon').fadeOut(250);
        }

        camera.position.z = 2500;
        transform(targets.rand, 1000);
      }
  
      if (e.keyCode == 116) { //&& e.ctrlKey
        //transform( targets.rand, 1000 );
        window.location.reload();
      }
  
      //if (e.keyCode == 78 && e.altKey) {
      //  sphereNetVisible = (sphereNetVisible) ? false : true;
      //  sn.init();
      //}
  
      //alt + c mostra os controles
      //if (e.keyCode == 67 && e.altKey) showMenu(1);
  
      //alt + t mostra as tasks
      //if (e.keyCode == 84 && e.altKey) showMenu(2);
  
      //alt + l mostra as listas
      //if (e.keyCode == 76 && e.altKey) showMenu(3);
      // e.preventDefault();
    });

    $(document).click(function (e) {
      // window.location.reload();
      console.log('clicked');
    });

    // $(document).on('drag') {
    //   // window.location.reload();
    //   console.log('clicked');
    // });


  //   var p1, p2;

  // var getPositionData = function (el) {
  //   return $.extend({
  //     width: el.outerWidth(false),
  //     height: el.outerHeight(false)
  //   }, el.offset());
  // };

  // var connections = setInterval(function () {

  //   if (!($('#nodeCon').css('display') == 'none')) {

  //     canvasCon = document.getElementById('nodeCon');
  //     contextCon = canvasCon.getContext('2d');

  //     contextCon.clearRect(0, 0, window.innerWidth, window.innerHeight);

  //     for (var i = 0; i < objects.length; i++) {
  //       contextCon.beginPath();

  //       p1 = {
  //         x: getPositionData($('.element:nth(' + i + ')')).left + 3,
  //         y: getPositionData($('.element:nth(' + i + ')')).top + 3
  //       }

  //       p2 = {
  //         x: getPositionData($('.element:nth(' + (i + 1) + ')')).left - 3,
  //         y: getPositionData($('.element:nth(' + (i + 1) + ')')).top + 3
  //       }

  //       p3 = {
  //         x: getPositionData($('.element:nth(' + (i + 25) + ')')).left + 3,
  //         y: getPositionData($('.element:nth(' + (i + 25) + ')')).top + 3
  //       }

  //       p4 = {
  //         x: getPositionData($('.element:nth(' + (i + 5) + ')')).left + 3,
  //         y: getPositionData($('.element:nth(' + (i + 5) + ')')).top + 3
  //       }

  //       if ((i + 1) % 5 != 0 || i == 0) {
  //         contextCon.moveTo(p1.x, p1.y);
  //         contextCon.lineTo(p2.x, p2.y);
  //       }

  //       contextCon.moveTo(p1.x, p1.y);
  //       contextCon.lineTo(p3.x, p3.y);

  //       var arrayException = [20, 21, 22, 23, 24, 45, 46, 47, 48, 49, 70, 71, 72, 73, 74, 95, 96, 97, 98, 99];
  //       if (arrayException.indexOf(i) == -1) {
  //         contextCon.moveTo(p1.x, p1.y);
  //         contextCon.lineTo(p4.x, p4.y);
  //       }

  //       contextCon.closePath();

  //       //contextCon.lineWidth = .15;
  //       //contextCon.globalAlpha = .15;
  //       contextCon.lineWidth = .2;
  //       contextCon.globalAlpha = .2;
  //       contextCon.strokeStyle = '#B9DAFF'; //'#DB4856'; //"#b9daff";  //"#85CCFF"; //'#DB4856';
  //       contextCon.setLineDash([4, 6]);
  //       //if ((i + 1) % 5 != 0 || i == 0)
  //       contextCon.stroke();
  //     }
  //   }
  // }, 1000 / 60);

    // "use strict";

    /**
     * Simple assert function for catching programmer errors.
     * @param {Boolean} condition
     * @param {String} message - the error message to throw if the condition is false
     */
    function assert(condition, message) {
      if (!condition) {
        throw new Error("Assertion Error" + (message ? ": " + message : ""));
      }
    }



(function (w) {
  "use strict";

  // Keep count of the number of instances of each prototype in order to generate unique IDs
  var verticesCount = 0;
  var edgesCount = 0;
  var trianglesCount = 0;

	/**
	 * A vertex defined by a pair of coordinates (x, y).
	 * @param {Integer} x The x coordinate of the vertex.
	 * @param {Integer} y The y coordinate of the vertex.
	 */
  function Vertex(x, y) {
		/**
		 * The x and y coordinates of the vertex.
		 * @type {Integer}
		 */
    this.x = x;
    this.y = y;

    verticesCount += 1;
    this.id = "v" + verticesCount;
  };

  Vertex.prototype.draw = function (ctx, radius) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, radius + 1.5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.lineWidth = .05;
    //if (Math.round(Math.random() * 10) < 1) {
    if (this.mark) {
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = "#db4b23";
      ctx.strokeStyle = "#ffff00";
    }
    else ctx.strokeStyle = '#fff';
    //ctx.stroke();
  };


	/**
	 * An edge between 2 vertices.
	 * @param {Shop} v1 The first vertex of the edge.
	 * @param {Shop} v2 The second vertex of the edge.
	 */
  function Edge(v1, v2) {
    this.v1 = v1;
    this.v2 = v2;

    this.vertices = [v1, v2];

    edgesCount += 1;
    this.id = "e" + edgesCount;
  };

	/**
	 * Test whether 2 edges are equal.
	 * @param {Edge} edge The edge to be tested for equality.
	 * @return {Boolean} true if the vertices of the edges match; false otherwise.
	 */
  Edge.prototype.isEqual = function (edge) {
    return (this.v1 === edge.v1 && this.v2 === edge.v2 || this.v1 === edge.v2 && this.v2 === edge.v1);
  };

	/**
	 * Draw the edge.
	 * @param {Object} ctx The context in which to draw the edge.
	 */
  Edge.prototype.draw = function (ctx) {
    if (this.v1.x == this.v2.x)
      this.v1.x++;

    if (this.v1.y == this.v2.y)
      this.v1.y++;

    ctx.beginPath();
    ctx.moveTo(this.v1.x, this.v1.y);
    ctx.lineTo(this.v2.x, this.v2.y);
    ctx.stroke();
  };


	/**
	 * A group of 3 vertices forming a triangle.
	 * @param {Array} vertices The 3 vertices of the triangle.
	 * @param {Array} edges The 3 edges of the triangle.
	 * @param {Array} neighbours The neighbour triangles in the same order as their corresponding edges.
	 */
  function Triangle(vertices, edges, neighbours) {
    this.vertices = vertices;
    this.edges = edges;

    this.edgesToNeighbours = {};
    for (var i = 0; i < 3; i += 1) {
      this.edgesToNeighbours[edges[i].id] = neighbours[i];
    }

    trianglesCount += 1;
    this.id = "t" + trianglesCount;

    /* Compute the coordinates of the center of the circumcircle, as well as its radius */
    // Store the vertices in there own variables for convinience
    var v1 = vertices[0];
    var v2 = vertices[1];
    var v3 = vertices[2];
    // Calculate terms that will be required multiple times
    var ab = Math.pow(v1.x, 2) + Math.pow(v1.y, 2);
    var cd = Math.pow(v2.x, 2) + Math.pow(v2.y, 2);
    var ef = Math.pow(v3.x, 2) + Math.pow(v3.y, 2);
    // Compute the circumcircle
    this.circumX = (ab * (v3.y - v2.y) + cd * (v1.y - v3.y) + ef * (v2.y - v1.y)) /
      (v1.x * (v3.y - v2.y) + v2.x * (v1.y - v3.y) + v3.x * (v2.y - v1.y)) / 2;
    this.circumY = (ab * (v3.x - v2.x) + cd * (v1.x - v3.x) + ef * (v2.x - v1.x)) /
      (v1.y * (v3.x - v2.x) + v2.y * (v1.x - v3.x) + v3.y * (v2.x - v1.x)) / 2;
    this.circumRadius = Math.sqrt(Math.pow(v1.x - this.circumX, 2) + Math.pow(v1.y - this.circumY, 2));
  };

	/**
	 * Test whether or not the circumcircle of the triangle contains the given shop.
	 * @param {Vertex} v The vertex to test.
	 * @return {Boolean} true if the vertex is inside the circumcircle of the triangle; false otherwise.
	 */
  Triangle.prototype.circumcircleContains = function (v) {
    // The vertex is inside of the circumcircle if its distance to the circle's center is less than
    // or equal to the circle's radius.
    var dist = Math.sqrt(Math.pow(v.x - this.circumX, 2) + Math.pow(v.y - this.circumY, 2));
    return dist <= this.circumRadius;
  };

  Triangle.prototype.getNeighbour = function (edge) {
    return this.edgesToNeighbours[edge.id];
  };

	/**
	 * Set the neighbour triangle for the edge given by its index.
	 * @param {Integer} The index of the edge for which to set the neighbour triangle.
	 * @param {Triangle} The new neighbour triangle.
	 */
  Triangle.prototype.setNeighbour = function (edge, neighbour) {
    this.edgesToNeighbours[edge.id] = neighbour;
  };

	/**
	 * Draw the three segments of the triangle.
	 * @param {Object} ctx The context in which to draw the triangle.
	 * @param {Boolean} fill Flag to indicate whether or not the triangle should be filled.
	 * @param {Boolean} stroke Flag to indicate whether or not the triangle should be stroked.
	 */
  Triangle.prototype.draw = function (ctx, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
    ctx.lineTo(this.vertices[1].x, this.vertices[1].y);
    ctx.lineTo(this.vertices[2].x, this.vertices[2].y);
    ctx.closePath();

    if (fill === true) {
      ctx.fill();
    }

    if (stroke === true) {
      ctx.stroke();
    }
  };


  // Add prototypes to `Voronoi` namespace in global context
  w.Vertex = Vertex;
  w.Edge = Edge;
  w.Triangle = Triangle;


	/**
	 * 2D scattering algorithms.
	 */
  w.Scatter = {

		/**
		 * Uniform random scatter algorithm to scatter points on a plane.
		 * @param {Integer} width - the width of the plane
		 * @param {Integer} height - the height of the plane
		 * @param {Integer} size - the number of points to scatter on the plane
		 */
    random: function (width, height, size) {
      assert(typeof width === 'number' && width > 0 && width % 1 === 0,
        "argument `width` must be an integer greater than 0");
      assert(typeof height === 'number' && height > 0 && (height % 1 === 0 || true),
        "argument `height` must be an integer greater than 0 " + height);
      assert(typeof size === 'number' && size > 0 && size % 1 === 0,
        "argument `size` must be an integer greater than 0");

      assert(size <= width * height, "too many points to scatter");

      var points = [],
        grid = [],
        x, y;

      for (var i = 0; i < size; i += 1) {
        // Generate a random position until one that isn't already occupied is found
        do {
          x = Math.round(Math.random() * width);
          y = Math.round(Math.random() * height);
        } while (grid[x] && grid[x][y]);

        // Create a new Vertex at the position that was found
        points.push(new Vertex(x, y));

        // Mark the position as occupied
        grid[x] = grid[x] || [];
        grid[x][y] = true;
      }

      return points;
    }

  };

}(window));

  // console.log('exams list context');

  $("#search-input").on('click', function(){
    $(this).val("");
  });

  $("#imported-exams").on("change", function(){
    $( "#import-exams-form" ).submit();
  });

  $("#imported-instructions").on("change", function(){
    $( "#import-instruc-form" ).submit();
  });

  $("#imported-tags").on("change", function(){
    $( "#import-tags-form" ).submit();
  });

  var numTopo = 0,
    text = '',
    mainCircleRadius = 50,
    mainCircleMargin = mainCircleRadius + 12,
    elements = [],
    touchPoints = [],
    isDragging = false,
    mousePos = { x: 0, y: 0 },
    lastPos = mousePos,
    frameCount = 0,
    showDots = false,
    showDarkLogo = false;

  function twoDigitNumber(n) {
    return n > 9 ? "" + n : "0" + n;
  }

  // Write your JavaScript code.
  function drawCircle(c, context) {
    //context.fillStyle = '#fff';

    context.beginPath();
    context.arc(c.x, c.y, c.r, 0, 2 * Math.PI, false);
    context.arc(c.x, c.y, c.r, 0, 2 * Math.PI, true);
    context.closePath();

    //context.globalAlpha = 1;
    //context.lineWidth = .05;
    //context.fill();
    if (c.f) context.fill();
    else context.stroke();

    //context.textBaseline = 'top';
    //context.font = 'bold 6pt Arial';
    //context.globalAlpha = .5;
    //context.fillText(i + 1, rpoints[i].x + 3, rpoints[i].y + 3);
  }

  function drawArc(c, context) {
    //context.fillStyle = '#fff';

    context.beginPath();
    context.arc(c.x, c.y, c.r, c.b, c.e, c.o);
    //context.closePath();

    //context.globalAlpha = 1;
    //context.lineWidth = .05;
    //if (c.o) context.fill();
    context.stroke();

    //context.textBaseline = 'top';
    //context.font = 'bold 6pt Arial';
    //context.globalAlpha = .5;
    //context.fillText(i + 1, rpoints[i].x + 3, rpoints[i].y + 3);
  }

  var clockCenter = { x: window.innerWidth / 12 * 10, y: window.innerHeight / 2 };

  function SystemElements() {
    //this.elements = [];
    secondsCount = 0;
    this.canvas = document.getElementById('screenSystemElem');
    this.context = this.canvas.getContext('2d');
    this.init = function () {
      this.update();
      //if (systemElementsVisible)
      //this.draw();
      this.draw();
    };
    this.update = function () {
      // randomPercentage = .65;

      var canvas = document.getElementById('screenSystemElem');
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      var ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      elements = [];

      // var center = { x: this.canvas.width / 12 * 11, y: this.canvas.height / 7 * 6 };
      // var center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
      var center = { x: this.canvas.width / 12 * 10, y: this.canvas.height / 12 * 10 };
      var center = { x: this.canvas.width / 12 * 10, y: this.canvas.height / 2 };

      var p0 = {
        x: center.x,
        y: center.y,
        r: mainCircleRadius,
        o: true
      };

      // var seconds = frameCount / 30;
      // var seconds = .05;

      // seconds = seconds > 1 ? 1 : seconds;

      var today = new Date();

      var p1 = {
        x: center.x,
        y: center.y,
        r: mainCircleRadius,
        o: false,
        b: 1.5 * Math.PI,
        // e: (1.5 + 2 * randomPercentage * seconds) * Math.PI
        e: (1.5 + 2 * today.getSeconds() / 60) * Math.PI
      };

      //pointers
      var r1 = .75, r4 = 3;

      var h12 = {
        x: center.x + Math.cos(Math.PI / 2) * mainCircleMargin,
        y: center.y - Math.sin(Math.PI / 2) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h1 = {
        x: center.x + Math.cos(Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(Math.PI / 3) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h2 = {
        x: center.x + Math.cos(Math.PI / 6) * mainCircleMargin,
        y: center.y - Math.sin(Math.PI / 6) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h3 = {
        x: center.x + Math.cos(0) * mainCircleMargin,
        y: center.y - Math.sin(0) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h4 = {
        x: center.x + Math.cos(11 * Math.PI / 6) * mainCircleMargin,
        y: center.y - Math.sin(11 * Math.PI / 6) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h5 = {
        x: center.x + Math.cos(5 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(5 * Math.PI / 3) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h6 = {
        x: center.x + Math.cos(3 * Math.PI / 2) * mainCircleMargin,
        y: center.y - Math.sin(3 * Math.PI / 2) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h7 = {
        x: center.x + Math.cos(4 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(4 * Math.PI / 3) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h8 = {
        x: center.x + Math.cos(7 * Math.PI / 6) * mainCircleMargin,
        y: center.y - Math.sin(7 * Math.PI / 6) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h9 = {
        x: center.x + Math.cos(Math.PI) * mainCircleMargin,
        y: center.y - Math.sin(Math.PI) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h10 = {
        x: center.x + Math.cos(5 * Math.PI / 6) * mainCircleMargin,
        y: center.y - Math.sin(5 * Math.PI / 6) * mainCircleMargin,
        r: r1,
        o: true
      };

      var h11 = {
        x: center.x + Math.cos(2 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(2 * Math.PI / 3) * mainCircleMargin,
        r: r1,
        o: true
      };

      var p2 = {
        x: center.x + Math.cos(5 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(5 * Math.PI / 3) * mainCircleMargin,
        r: r1,
        o: true
      };

      var p4 = {
        x: center.x + Math.cos(2 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(2 * Math.PI / 3) * mainCircleMargin,
        r: r1,
        o: true
      };

      var p5 = {
        x: center.x + Math.cos(5 * Math.PI / 6) * mainCircleMargin,
        y: center.y + Math.sin(5 * Math.PI / 6) * mainCircleMargin,
        r: r1,
        o: true
      };

      var p6 = {
        x: center.x + Math.cos(Math.PI) * mainCircleMargin,
        y: center.y + Math.sin(Math.PI) * mainCircleMargin,
        r: r1,
        o: true
      };

      var p7 = {
        x: center.x + Math.cos(7 * Math.PI / 6) * mainCircleMargin,
        y: center.y + Math.sin(7 * Math.PI / 6) * mainCircleMargin,
        r: r1,
        o: true
      };

      var p8 = {
        x: center.x + Math.cos(5 * Math.PI / 3) * (mainCircleMargin + 40),
        y: center.y - Math.sin(5 * Math.PI / 3) * (mainCircleMargin + 40),
        r: r1,
        o: true
      };

      var p9 = {
        x: center.x + Math.cos(5 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(5 * Math.PI / 3) * mainCircleMargin,
        r: r4,
        o: true
      };

      var p10 = {
        x: center.x + Math.cos(Math.PI / 2) * mainCircleMargin,
        y: center.y - Math.sin(Math.PI / 2) * mainCircleMargin,
        r: r4,
        o: true
      };

      var p11 = {
        x: center.x + Math.cos(2 * Math.PI / 3) * mainCircleMargin,
        y: center.y - Math.sin(2 * Math.PI / 3) * mainCircleMargin,
        r: r4,
        o: true
      };

      var p12 = {
        x: center.x + Math.cos(5 * Math.PI / 6) * mainCircleMargin,
        y: center.y + Math.sin(5 * Math.PI / 6) * mainCircleMargin,
        r: r4,
        o: true
      };

      var p13 = {
        x: center.x + Math.cos(Math.PI) * mainCircleMargin,
        y: center.y + Math.sin(Math.PI) * mainCircleMargin,
        r: r4,
        o: true
      };

      var p14 = {
        x: center.x + Math.cos(7 * Math.PI / 6) * mainCircleMargin,
        y: center.y + Math.sin(7 * Math.PI / 6) * mainCircleMargin,
        r: r4,
        o: true
      };

      var p15 = {
        x: center.x + Math.cos(3 * Math.PI / 2) * mainCircleMargin,
        y: center.y - Math.sin(3 * Math.PI / 2) * mainCircleMargin * 3,
        r: r4,
        o: true
      };

      var p16 = {
        x: center.x + Math.cos(7 * Math.PI / 6) * (mainCircleMargin + 180),
        y: center.y + Math.sin(7 * Math.PI / 6) * (mainCircleMargin + 180),
        r: r1,
        o: true
      };

      var p17 = {
        x: center.x + Math.cos(Math.PI) * (mainCircleMargin + 280),
        y: center.y + Math.sin(Math.PI) * (mainCircleMargin + 280) - 50,
        r: r1,
        o: true
      };

      var p18 = {
        x: center.x + Math.cos(5 * Math.PI / 6) * (mainCircleMargin + 400) - 125,
        y: center.y + Math.sin(5 * Math.PI / 6) * (mainCircleMargin + 400) - 50,
        r: r1,
        o: true
      };

      elements.push(
        p0,
        p1,
        h12,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        p8,
        p9,
        p10,
        p11,
        p12,
        p13,
        p14,
        p15,
        p16, p17, p18);
    };
    this.drawTouch = function (x, y) {
      var p = {
        x: x,
        y: y,
        r: 1,
        o: true
      };

      touchPoints.push(p);
    };
    this.draw = function () {
      this.update();
      /*this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.globalAlpha = 1;
      this.context.lineWidth = 1;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";

      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 10;
      this.context.shadowOffsetX = 0;
      this.context.shadowOffsetY = 0;

      //signature----------------------------
      var tam = 20;
      var sign = {
          x: window.innerWidth / 2 - tam / 2,
          y: window.innerHeight / 2 - tam / 2,
          t: tam
      };

      this.context.beginPath();
      this.context.strokeRect(sign.x, sign.y, sign.t, sign.t);
      this.context.closePath();

      this.context.stroke();

      this.context.beginPath();
      this.context.moveTo(sign.x + sign.t / 2, sign.y);
      this.context.lineTo(sign.x + sign.t / 2, sign.y + sign.t);
      this.context.closePath();

      this.context.stroke();

      this.context.beginPath();
      this.context.moveTo(sign.x, sign.y + sign.t / 2);
      this.context.lineTo(sign.x + sign.t / 2, sign.y + sign.t / 2);
      this.context.closePath();

      this.context.stroke();

      this.context.beginPath();
      this.context.moveTo(sign.x, sign.y + sign.t / 2);
      this.context.lineTo(sign.x + sign.t / 2, sign.y + sign.t);
      this.context.closePath();

      this.context.stroke();*/

      //----------------------------

      //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //circle
      this.context.globalAlpha = .2;
      this.context.lineWidth = 1;
      this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([0]);
      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 0;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      drawCircle(elements[0], this.context);

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([2, 4]);
      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 0;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      elements[0].r += 5;

      drawCircle(elements[0], this.context);

      function clone(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
      }

      var pc = clone(elements[0]);

      pc.x = window.innerWidth / 2;
      pc.y = window.innerHeight / 2;

      // drawCircle(pc, this.context);

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([2, 6]);
      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 0;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      // pc.r += 220;
      pc.r = window.innerWidth / 12 * 2;

      // drawCircle(pc, this.context);

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([2, 6]);
      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 0;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      // pc.r += 250;
      pc.r = window.innerWidth / 12 * 4;

      // drawCircle(pc, this.context);

      //DARK LOGO INIT
      if (showDarkLogo == true) {
        this.context.lineWidth = 1;
        this.context.globalAlpha = .1;
        this.context.strokeStyle = "#D9EBF9"; //"#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([2, 6]);
        // this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;
        //this.context.shadowOffsetX = 0;
        //this.context.shadowOffsetY = 0;

        pc = clone(elements[0]);
        pc.x = window.innerWidth / 2;
        pc.y = window.innerHeight / 2;

        // drawCircle(pc, this.context);

        //first dot main circle
        var a = Math.PI / 3;
        var b = Math.PI / 3;
        var p1 = {
          x: pc.x + Math.sin(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
          y: pc.y - Math.cos(b) * pc.r,
          r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
        };

        // this.context.globalAlpha = .1;
        // this.context.lineWidth = 1;
        // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
        // this.context.setLineDash([0]);
        // this.context.shadowBlur = 2;

        // drawCircle(p1, this.context);
        p1.r = pc.r * 1.75;
        this.context.strokeStyle = '#D9EBF9'; //"#85CCFF";
        drawCircle(p1, this.context);

        //second dot main circle
        var a = 2 * Math.PI / 3;
        var b = 2 * Math.PI / 3;
        var p2 = {
          x: pc.x - Math.sin(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
          y: pc.y + Math.cos(b) * pc.r,
          r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
        };

        // this.context.lineWidth = 1;
        // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
        // this.context.setLineDash([0, 0]);

        // drawCircle(p2, this.context);
        p2.r = pc.r * 1.75;
        this.context.strokeStyle = '#D9EBF9'; //"#85CCFF";
        drawCircle(p2, this.context);

        //third dot main circle
        var a = 3 * Math.PI / 2;
        var b = 3 * Math.PI / 2;
        var p3 = {
          x: pc.x, // - Math.sin(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
          y: pc.y + pc.r, // Math.cos(b) * pc.r,
          r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
        };

        // this.context.lineWidth = 1;
        // this.context.setLineDash([0, 0]);
        
        p3.r = pc.r * 1.75;
        this.context.strokeStyle = '#D9EBF9'; //"#85CCFF";
        drawCircle(p3, this.context);
        
        //red conection dots
        this.context.strokeStyle = "#DB4856"; //'#D9EBF9'; //"#85CCFF";
        // this.context.fillStyle = "#DB4856"; //'#D9EBF9'; //"#85CCFF";
        this.context.lineWidth = 1;
        this.context.globalAlpha = 1;
        this.context.setLineDash([0]);

        p1.r = p2.r = p3.r = 1.5;
        drawCircle(p1, this.context);
        drawCircle(p2, this.context);
        drawCircle(p3, this.context);
      }

      //DARK LOGO END

      this.context.lineWidth = 1;
      this.context.globalAlpha = .7;
      this.context.strokeStyle = "#D9EBF9"; //'#AD1925'; // '#fff'; // "#85CCFF"; //
      // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([0]);
      this.context.shadowBlur = 1;

      drawArc(elements[1], this.context);

      this.context.lineWidth = 2.5;
      this.context.globalAlpha = 1;
      this.context.strokeStyle = '#AD1925'; // '#fff'; // "#85CCFF"; //
      this.context.shadowBlur = 0;

      this.context.font = "9px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .9;
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";

      var today = new Date();

      var todayFormatted = today.getFullYear() + "." +
        twoDigitNumber((today.getUTCMonth() + 1)) + "." +
        twoDigitNumber(today.getDate()) + "." +
        twoDigitNumber(today.getHours()) + "." +
        twoDigitNumber(today.getMinutes()) + "." +
        twoDigitNumber(today.getSeconds());

      this.context.fillText(todayFormatted, elements[0].x, elements[0].y);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .5;
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      this.context.fillText('test-test', elements[0].x, elements[0].y + mainCircleRadius - 10);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.fillText('test', elements[0].x, elements[0].y + mainCircleRadius - 5);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .5;
      this.context.fillText('test-test-test', elements[0].x, elements[0].y + mainCircleRadius + 10);

      this.context.font = "25px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .7;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      //this.context.fillText(twoDigitNumber(Math.floor(randomPercentage * 100 / 25) + 1), elements[0].x + tronDiskRay + 30, elements[0].y);
      //refreshCount

      this.context.font = "25px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .7;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      //this.context.fillText(twoDigitNumber((randomPercentage * 100).toFixed(0)), elements[0].x + tronDiskRay + 70, elements[0].y);

      //red dots around
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.strokeStyle = "#D9EBF920"; //'#DB4856'; //
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;
      if (showDots) {
        // drawCircle(elements[2], this.context);
        // drawCircle(elements[3], this.context);
        // drawCircle(elements[4], this.context);
        // drawCircle(elements[5], this.context);
        // drawCircle(elements[6], this.context);
        // drawCircle(elements[7], this.context);
        // drawCircle(elements[8], this.context);
        // drawCircle(elements[9], this.context);
        // drawCircle(elements[10], this.context);
        // drawCircle(elements[11], this.context);
        // drawCircle(elements[12], this.context);
        // drawCircle(elements[13], this.context);

        this.context.lineWidth = 1;
        this.context.globalAlpha = 1;
        this.context.strokeStyle = "#D9EBF9"; //"#DB4856"; // "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
        // this.context.setLineDash([2, 4]);

        minutes = twoDigitNumber(today.getMinutes());
        min_pointer = Math.round(minutes / 5) + 2;

        drawCircle(elements[min_pointer], this.context);

        this.context.lineWidth = 1;
        this.context.globalAlpha = 1;
        this.context.strokeStyle = "#DB4856"; // "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
        // this.context.setLineDash([2, 4]);

        hour = twoDigitNumber(today.getHours());
        hour_pointer = Math.round(hour % 12) + 2;

        drawCircle(elements[hour_pointer], this.context);

        // this.context.beginPath();
        // this.context.moveTo(elements[7].x, elements[7].y);
        // this.context.lineTo(elements[16].x, elements[16].y);
        // this.context.closePath();
        // this.context.stroke();

        this.context.lineWidth = .5;
        this.context.globalAlpha = .1;
        this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
        this.context.setLineDash([2, 4]);

        this.context.beginPath();
        this.context.moveTo(elements[7].x, elements[7].y);
        this.context.lineTo(elements[16].x, elements[16].y);
        this.context.closePath();
        // this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(elements[6].x, elements[6].y);
        this.context.lineTo(elements[17].x, elements[17].y);
        this.context.closePath();
        // this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(elements[5].x, elements[5].y);
        this.context.lineTo(elements[18].x, elements[18].y);
        this.context.closePath();
        // this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(elements[2].x, elements[2].y);
        this.context.lineTo(elements[8].x, elements[8].y);
        this.context.closePath();
        // this.context.stroke();

        this.context.lineWidth = 1;
        this.context.globalAlpha = 1;
        this.context.strokeStyle = '#DB4856'; //"#85CCFF";
        this.context.setLineDash([0]);

        // drawCircle(elements[8], this.context);
        // drawCircle(elements[16], this.context);
        // drawCircle(elements[17], this.context);
        // drawCircle(elements[18], this.context);

        this.context.font = "8px Arial";
        this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
        this.context.globalAlpha = .4;
        this.context.textAlign = "left";
        this.context.textBaseline = "middle";

        // this.context.fillText('available', elements[8].x + 5, elements[8].y);
        // this.context.fillText('available', elements[16].x + 5, elements[16].y);
        // this.context.fillText('available', elements[17].x + 5, elements[17].y);
        // this.context.fillText('available', elements[18].x + 5, elements[18].y);

        // this.context.font = "8px Arial";
        // this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
        // this.context.globalAlpha = .2;
        // this.context.textAlign = "left";
        // this.context.textBaseline = "middle";
        // this.context.fillText('AVAI', elements[8].x + 5, elements[8].y + 10);
        // this.context.fillText('AVAIL', elements[16].x + 5, elements[16].y + 10);
        // this.context.fillText('AVA', elements[17].x + 5, elements[17].y + 10);
        // this.context.fillText('AVAILABLE', elements[18].x + 5, elements[18].y + 10);

        // this.context.fillText('linewidth', elements[8].x + 5, elements[8].y + 20);
        // this.context.fillText('globalalpha', elements[16].x + 5, elements[16].y + 20);
        // this.context.fillText('strokeatyle', elements[17].x + 5, elements[17].y + 20);
        // this.context.fillText('setlinedash', elements[18].x + 5, elements[18].y + 20);
      }

      //red dots around
      //this.context.lineWidth = .5;
      //this.context.globalAlpha = .4;
      //this.context.strokeStyle = '#D9EBF9'; //"#85CCFF";
      //this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;

      //drawCircle(elements[9], this.context);
      //drawCircle(elements[10], this.context);
      //drawCircle(elements[11], this.context);
      //drawCircle(elements[12], this.context);
      //drawCircle(elements[13], this.context);
      //drawCircle(elements[14], this.context);
      //drawCircle(elements[15], this.context);

      /*for (var i = 0; i < touchPoints.length; i++) {
          this.context.lineWidth = 2;
          this.context.globalAlpha = 1;
          this.context.strokeStyle = '#fff'; //'#DB4856'; //"#85CCFF";
          this.context.setLineDash([0]);

          

          if (i == 0) this.context.moveTo(touchPoints[i].x, touchPoints[i].y);
          else
              this.context.lineTo(touchPoints[i].x, touchPoints[i].y);

          //lastPos = {x: x, y: y};

          

          //context.stroke();
      }

      this.context.closePath();

      this.context.stroke();*/

      //random dots
      /*for (var i = 0; i < 100; i++) {
          var a = Math.random() * Math.PI * 2;
          var b = Math.random() * Math.PI * 2;

          var sign = (Math.ceil(Math.random() * 2) == 1) ? 1 : -1;

          var p = {
              x: this.elements[0].x + Math.sin(a) * (tronDiskRay + (sign * Math.ceil(Math.random() * 10))),
              y: this.elements[0].y + Math.cos(a) * (tronDiskRay + (sign * Math.ceil(Math.random() * 10)))
          };

          this.context.fillStyle = "#fff";
          this.context.shadowColor = "#fff"; // "#85CCFF";
          this.context.shadowBlur = 5;
          this.context.shadowOffsetX = 0;
          this.context.shadowOffsetY = 0;

          this.context.fillRect(p.x, p.y, 1, 1);
      }*/



      ////#region deathly hallows

      //var tamDH = 30;

      //var dh = {
      //    x: window.innerWidth / 2,
      //    y: window.innerHeight / 2,
      //    t: tamDH
      //};

      //this.context.globalAlpha = 1;
      //this.context.lineWidth = 1;
      //this.context.strokeStyle = '#FFF';
      //this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF";
      //this.context.shadowBlur = 10;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      ////circle
      //drawCircle({ x: dh.x, y: dh.y, r: dh.t / 2 - 1 }, this.context);

      ////triangle
      //var t1 = {
      //    x: dh.x + Math.cos(Math.PI / 2) * dh.t,
      //    y: dh.y - Math.sin(Math.PI / 2) * dh.t
      //};

      //var t2 = {
      //    x: dh.x + Math.cos(Math.PI / 2 + Math.PI / 3) * dh.t,
      //    y: dh.y + Math.sin(Math.PI / 2 + Math.PI / 3) * dh.t
      //};

      //var t3 = {
      //    x: dh.x + Math.cos(Math.PI / 2 - Math.PI / 3) * dh.t,
      //    y: dh.y + Math.sin(Math.PI / 2 - Math.PI / 3) * dh.t
      //};

      //this.context.beginPath();
      //this.context.moveTo(t1.x, t1.y);
      //this.context.lineTo(t2.x, t2.y);
      //this.context.lineTo(t3.x, t3.y);
      //this.context.closePath();

      //this.context.stroke();

      ////wand
      //this.context.beginPath();
      //this.context.moveTo(t1.x, t1.y);
      //this.context.lineTo(t1.x, dh.y + dh.t / 2);
      //this.context.closePath();

      //this.context.stroke();

      ////#endregion
    };
  }

  systemElements = new SystemElements();

  systemElements.init();

  var screenElementsIntervalId = setInterval(function () {
    secondsCount += .005;
    frameCount += 1;
    // center += 1;
    systemElements.draw();
    // if (frameCount == 60) clearInterval(screenElementsIntervalId);
  }, 1000 / 60);

  var menuRay = 12,
      circularMenuElements = [],
      percentages = [
        .5 + Math.random() * .5,
        .5 + Math.random() * .5,
        .5 + Math.random() * .5,
        .5 + Math.random() * .5],
      mousePos = { x: 0, y: 0 },
      numOfMarks = 12,
      menuCount = 60;

  function CircularMenu() {
    // console.log('circular menu setup');
    this.canvas = document.getElementById('circular-menu');
    this.context = this.canvas.getContext('2d');

    this.init = function () {
      this.update();
      this.draw();
    };
    this.update = function () {
      // console.log('circular menu update');

      var canvas = document.getElementById('circular-menu');
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      circularMenuElements = [];
      
      var seconds = menuCount / 30;
      
      seconds = seconds > 1 ? 1 : seconds;
      
      var center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
      // var center = { x: 0, y: this.canvas.height / 2 };

      referenceRadius = window.innerWidth / 12 * 2;

      // numOfMarks = 12;

      degrees = 360 / numOfMarks;

      // current_angle = Math.PI * (degrees * i) / 180;

      circularMenuElements = [];

      for (var i = 0; i < numOfMarks; i++) {
        current_angle = Math.PI * (degrees * i) / 180;
        p = {
          x: center.x + Math.cos(current_angle) * referenceRadius,
          y: center.y - Math.sin(current_angle) * referenceRadius,
          r: menuRay,
          o: false,
          b: 1.5 * Math.PI,
          e: (1.5 + 2) * Math.PI
        };

        circularMenuElements.push(p);
      }

      var p1 = {
        // x: center.x,
        // y: window.innerHeight / 2 - (menuRay + 10),
        x: center.x + Math.cos(Math.PI / 12) * referenceRadius,
        y: center.y - Math.sin(Math.PI / 12) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[0] * seconds) * Math.PI
      };

      var p2 = {
        // x: center.x,
        // y: window.innerHeight / 2 - (menuRay + 10) * 3,
        x: center.x + Math.cos(Math.PI / 6) * referenceRadius,
        y: center.y - Math.sin(Math.PI / 6) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[1] * seconds) * Math.PI
      };

      var p3 = {
        // x: center.x,
        // y: window.innerHeight / 2 + (menuRay + 10),
        x: center.x + Math.cos(11 * Math.PI / 6) * referenceRadius,
        y: center.y - Math.sin(11 * Math.PI / 6) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[2] * seconds) * Math.PI,
        p: Math.random()
      };

      var p4 = {
        // x: center.x,
        // y: window.innerHeight / 2 + (menuRay + 10) * 3,
        x: center.x + Math.cos(23 * Math.PI / 12) * referenceRadius,
        y: center.y - Math.sin(23 * Math.PI / 12) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[3] * seconds) * Math.PI
      };

      var p5 = {
        x: center.x + 25,
        y: window.innerHeight / 2 - (menuRay + 10),
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[0] * seconds) * Math.PI
      };

      var p6 = {
        x: center.x + 25,
        y: window.innerHeight / 2 - (menuRay + 10) * 3,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[1] * seconds) * Math.PI
      };

      var p7 = {
        x: center.x + 25,
        y: window.innerHeight / 2 + (menuRay + 10),
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[2] * seconds) * Math.PI,
        p: Math.random()
      };

      var p8 = {
        x: center.x + 25,
        y: window.innerHeight / 2 + (menuRay + 10) * 3,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[3] * seconds) * Math.PI
      };

      var p9 = {
        x: center.x + 100,
        y: window.innerHeight / 2 - (menuRay + 10) - 15,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[0] * seconds) * Math.PI
      };

      var p10 = {
        x: center.x + 150,
        y: window.innerHeight / 2 - (menuRay + 10) * 3 - 30,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[1] * seconds) * Math.PI
      };

      var p11 = {
        x: center.x + 90,
        y: window.innerHeight / 2 + (menuRay + 10) + 15,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[2] * seconds) * Math.PI,
        p: Math.random()
      };

      var p12 = {
        x: center.x + 160,
        y: window.innerHeight / 2 + (menuRay + 10) * 3 + 30,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[3] * seconds) * Math.PI
      };

      // circularMenuElements.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
    };
    // this.drawTouch = function (x, y) {
    //   var p = {
    //     x: x,
    //     y: y,
    //     r: 1,
    //     o: true
    //   };

    //   touchPoints.push(p);
    // };
    this.draw = function () {
      // console.log('circular menu draw');
      this.update();
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.globalAlpha = 1;
      this.context.lineWidth = 1;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";

      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 1;
      this.context.shadowOffsetX = 0;
      this.context.shadowOffsetY = 0;

      for (var i = 0; i < numOfMarks; i++) {
        //circle
        this.context.globalAlpha = .2;
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([0]);
        this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;
        //this.context.shadowOffsetX = 0;
        //this.context.shadowOffsetY = 0;
        //var elem = Object.assign({}, circularMenuElements[0]);
        //elem.y = window.innerHeight / 5 * (i + 1);

        drawCircle(circularMenuElements[i], this.context);

        this.context.globalAlpha = .1;
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([2, 4]);
        this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;
        //this.context.shadowOffsetX = 0;
        //this.context.shadowOffsetY = 0;

        var clone = Object.assign({}, circularMenuElements[i]);

        clone.r += 6;

        drawCircle(clone, this.context);

        this.context.lineWidth = 1;
        this.context.globalAlpha = .7;
        this.context.strokeStyle = "#D9EBF9"; //"#DB4856"; // //'#AD1925'; // '#fff'; // "#85CCFF"; //
        this.context.setLineDash([0]);
        //this.context.setLineDash([5, 1]);
        // this.context.shadowColor = "#DB4856";
        this.context.shadowBlur = 1;

        //var elem2 = Object.assign({}, circularMenuElements[i]);
        //elem2.y = window.innerHeight / 5 * (i + 1);
        //elem2.e = (1.5 + 2 * Math.random() * seconds) * Math.PI;

        drawArc(circularMenuElements[i], this.context);

        this.context.lineWidth = 2.5;
        this.context.globalAlpha = 1;
        this.context.strokeStyle = '#AD1925'; // '#fff'; // "#85CCFF"; //
        //this.context.setLineDash([2, 40]);
        this.context.shadowBlur = 0;

        this.context.font = "9px Arial";
        this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
        this.context.globalAlpha = .9;
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";

        var today = new Date();

        var todayFormatted = today.getFullYear();
        todayFormatted = percentages[i % 4 ].toFixed(1);

        this.context.fillText(todayFormatted, circularMenuElements[i].x, circularMenuElements[i].y + 1);
      }

      this.context.font = "4px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .5;
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      //this.context.fillText('test-test', circularMenuElements[0].x, circularMenuElements[0].y + menuRay - 10);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      //this.context.fillText('test', circularMenuElements[0].x, circularMenuElements[0].y + menuRay - 5);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .5;
      //this.context.fillText('test-test-test', circularMenuElements[0].x, circularMenuElements[0].y + tronDiskRay + 10);

      this.context.font = "25px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .7;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      //this.context.fillText(twoDigitNumber(Math.floor(randomPercentage * 100 / 25) + 1), circularMenuElements[0].x + tronDiskRay + 30, circularMenuElements[0].y);
      //refreshCount

      this.context.font = "25px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .7;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      //this.context.fillText(twoDigitNumber((randomPercentage * 100).toFixed(0)), circularMenuElements[0].x + tronDiskRay + 70, circularMenuElements[0].y);

      //red dots around
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.strokeStyle = '#DB4856'; //"#85CCFF";
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;

      //red dots around
      this.context.lineWidth = .5;
      this.context.globalAlpha = .4;
      this.context.strokeStyle = '#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;

      this.context.beginPath();

      //this.context.moveTo(circularMenuElements[7].x, circularMenuElements[7].y);
      //this.context.lineTo(circularMenuElements[16].x, circularMenuElements[16].y);

      this.context.closePath();

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
      this.context.setLineDash([0]);
      //this.context.stroke();

      this.context.beginPath();

      //this.context.moveTo(circularMenuElements[9].x, circularMenuElements[9].y);
      //this.context.lineTo(circularMenuElements[8].x, circularMenuElements[8].y);

      this.context.closePath();

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
      this.context.setLineDash([0]);
      //this.context.stroke();

      //red dots around
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.strokeStyle = '#DB4856'; //"#85CCFF";
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;
      if (showDots) {
        drawCircle(circularMenuElements[4], this.context);
        drawCircle(circularMenuElements[5], this.context);
        drawCircle(circularMenuElements[6], this.context);
        drawCircle(circularMenuElements[7], this.context);

        drawCircle(circularMenuElements[8], this.context);
        drawCircle(circularMenuElements[9], this.context);
        drawCircle(circularMenuElements[10], this.context);
        drawCircle(circularMenuElements[11], this.context);

        this.context.lineWidth = .5;
        this.context.globalAlpha = .1;
        this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
        this.context.setLineDash([2, 4]);

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[4].x, circularMenuElements[4].y);
        this.context.lineTo(circularMenuElements[8].x, circularMenuElements[8].y);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[5].x, circularMenuElements[5].y);
        this.context.lineTo(circularMenuElements[9].x, circularMenuElements[9].y);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[6].x, circularMenuElements[6].y);
        this.context.lineTo(circularMenuElements[10].x, circularMenuElements[10].y);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[7].x, circularMenuElements[7].y);
        this.context.lineTo(circularMenuElements[11].x, circularMenuElements[11].y);
        this.context.closePath();
        this.context.stroke();

        this.context.font = "8px Arial";
        this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
        this.context.globalAlpha = .2;
        this.context.textAlign = "left";
        this.context.textBaseline = "middle";
        this.context.fillText('available', circularMenuElements[8].x + 5, circularMenuElements[8].y);
        this.context.fillText('available', circularMenuElements[9].x + 5, circularMenuElements[9].y);
        this.context.fillText('available', circularMenuElements[10].x + 5, circularMenuElements[10].y);
        this.context.fillText('available', circularMenuElements[11].x + 5, circularMenuElements[11].y);
      }

      this.context.font = "18px Arial";
      this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
      this.context.globalAlpha = .2;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";

      //this.context.fillText('AVAI', circularMenuElements[8].x + 5, circularMenuElements[8].y + 10);
      //this.context.fillText('AVAIL', circularMenuElements[9].x + 5, circularMenuElements[9].y + 10);
      //this.context.fillText('AVA', circularMenuElements[10].x + 5, circularMenuElements[10].y + 10);
      //this.context.fillText('AVAILABLE', circularMenuElements[11].x + 5, circularMenuElements[11].y + 10);

      //this.context.fillText('linewidth', circularMenuElements[8].x + 5, circularMenuElements[8].y + 20);
      //this.context.fillText('globalalpha', circularMenuElements[9].x + 5, circularMenuElements[9].y + 20);
      //this.context.fillText('strokeatyle', circularMenuElements[10].x + 5, circularMenuElements[10].y + 20);
      //this.context.fillText('setlinedash', circularMenuElements[11].x + 5, circularMenuElements[11].y + 20);

    };
  }

  circularMenu = new CircularMenu();

  // circularMenu.init();
  // circularMenu.draw();

  var refreshIntervalId = setInterval(function () {
    // menuCount += 1;

    circularMenu.draw();

    // if (menuCount == 60) clearInterval(refreshIntervalId);
  }, 1000 / 60);

  var rainMeterRadius = 75,
      circularMenuElements = [],
      percentages = [
        .5 + Math.random() * .5,
        .5 + Math.random() * .5,
        .5 + Math.random() * .5,
        .5 + Math.random() * .5],
      mousePos = { x: 0, y: 0 },
      menuCount = 60;
      
  clockRotationFactor = 0;
  rotationAceleration = .015;

  // initialRotationVelocity = .0025;
  initialRotationVelocity = .001;
  rotationVelocity = .0025;
  maxRotationVelocity = .015;

  engineOn = false;

  function RainMeter() {
    // this.canvas = document.getElementById('inner_canvas');
    this.canvas = document.getElementById('rain-meter');
    
    this.context = this.canvas.getContext('2d');

    this.init = function () {
      this.update();
      this.draw();
    };

    this.update = function () {
      var canvas = document.getElementById('rain-meter');
      // var canvas = document.getElementById('inner_canvas');

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      circularMenuElements = [];
      
      var seconds = menuCount / 30;
      
      seconds = seconds > 1 ? 1 : seconds;
      
      var center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
      // var center = { x: 0, y: this.canvas.height / 2 };

      referenceRadius = window.innerWidth / 12 * 2;

      var p0 = {
        x: center.x,
        y: center.y,
        r: rainMeterRadius,
        o: false,
        b: - Math.PI / 2,
        e: 1.5 * Math.PI
      };

      var p1 = {
        // x: center.x,
        // y: window.innerHeight / 2 - (menuRay + 10),
        x: center.x + Math.cos(Math.PI / 12) * referenceRadius,
        y: center.y - Math.sin(Math.PI / 12) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[0] * seconds) * Math.PI
      };

      var p2 = {
        // x: center.x,
        // y: window.innerHeight / 2 - (menuRay + 10) * 3,
        x: center.x + Math.cos(Math.PI / 6) * referenceRadius,
        y: center.y - Math.sin(Math.PI / 6) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[1] * seconds) * Math.PI
      };

      var p3 = {
        // x: center.x,
        // y: window.innerHeight / 2 + (menuRay + 10),
        x: center.x + Math.cos(11 * Math.PI / 6) * referenceRadius,
        y: center.y - Math.sin(11 * Math.PI / 6) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[2] * seconds) * Math.PI,
        p: Math.random()
      };

      var p4 = {
        // x: center.x,
        // y: window.innerHeight / 2 + (menuRay + 10) * 3,
        x: center.x + Math.cos(23 * Math.PI / 12) * referenceRadius,
        y: center.y - Math.sin(23 * Math.PI / 12) * referenceRadius,
        r: menuRay,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[3] * seconds) * Math.PI
      };

      var p5 = {
        x: center.x + 25,
        y: window.innerHeight / 2 - (menuRay + 10),
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[0] * seconds) * Math.PI
      };

      var p6 = {
        x: center.x + 25,
        y: window.innerHeight / 2 - (menuRay + 10) * 3,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[1] * seconds) * Math.PI
      };

      var p7 = {
        x: center.x + 25,
        y: window.innerHeight / 2 + (menuRay + 10),
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[2] * seconds) * Math.PI,
        p: Math.random()
      };

      var p8 = {
        x: center.x + 25,
        y: window.innerHeight / 2 + (menuRay + 10) * 3,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[3] * seconds) * Math.PI
      };

      var p9 = {
        x: center.x + 100,
        y: window.innerHeight / 2 - (menuRay + 10) - 15,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[0] * seconds) * Math.PI
      };

      var p10 = {
        x: center.x + 150,
        y: window.innerHeight / 2 - (menuRay + 10) * 3 - 30,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[1] * seconds) * Math.PI
      };

      var p11 = {
        x: center.x + 90,
        y: window.innerHeight / 2 + (menuRay + 10) + 15,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[2] * seconds) * Math.PI,
        p: Math.random()
      };

      var p12 = {
        x: center.x + 160,
        y: window.innerHeight / 2 + (menuRay + 10) * 3 + 30,
        r: .75,
        o: false,
        b: 1.5 * Math.PI,
        e: (1.5 + 2 * percentages[3] * seconds) * Math.PI
      };

      circularMenuElements.push(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
    };

    // this.drawTouch = function (x, y) {
    //   var p = {
    //     x: x,
    //     y: y,
    //     r: 1,
    //     o: true
    //   };

    //   touchPoints.push(p);
    // };

    this.draw = function () {
      // console.log('circular menu draw');
      this.update();
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.globalAlpha = 1;
      this.context.lineWidth = 1;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";

      this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 1;
      this.context.shadowOffsetX = 0;
      this.context.shadowOffsetY = 0;

      for (var i = 0; i < 1; i++) {
        //circle
        this.context.lineWidth = 1;
        this.context.globalAlpha = .1;
        this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([0]);
        this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;
        //this.context.shadowOffsetX = 0;
        //this.context.shadowOffsetY = 0;
        //var elem = Object.assign({}, circularMenuElements[0]);
        //elem.y = window.innerHeight / 5 * (i + 1);

        // drawCircle(circularMenuElements[i], this.context);

        this.context.lineWidth = 1;
        this.context.globalAlpha = .2;
        this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([2, 4]);
        this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;
        //this.context.shadowOffsetX = 0;
        //this.context.shadowOffsetY = 0;

        var clone = Object.assign({}, circularMenuElements[i]);

        clone.r += 8;

        drawCircle(clone, this.context);

        this.context.lineWidth = 1;
        this.context.globalAlpha = 1;
        this.context.strokeStyle = "#D9EBF9"; //#000 //"#DB4856"; // //'#AD1925'; // '#fff'; // "#85CCFF"; //
        this.context.setLineDash([0]);
        //this.context.setLineDash([5, 1]);
        // this.context.shadowColor = "#DB4856";
        this.context.shadowColor = "#85CCFF"; //'#FFF';

        this.context.shadowBlur = 2;

        //var elem2 = Object.assign({}, circularMenuElements[i]);
        //elem2.y = window.innerHeight / 5 * (i + 1);
        //elem2.e = (1.5 + 2 * Math.random() * seconds) * Math.PI;

        drawArc(circularMenuElements[i], this.context);

        this.context.lineWidth = 2.5;
        this.context.globalAlpha = 1;
        this.context.strokeStyle = '#AD1925'; // '#fff'; // "#85CCFF"; //
        //this.context.setLineDash([2, 40]);
        this.context.shadowBlur = 0;

        this.context.font = "9px Arial";
        this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
        this.context.globalAlpha = .9;
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";

        var today = new Date();

        var todayFormatted = today.getFullYear();
        todayFormatted = percentages[i].toFixed(1);

        // this.context.fillText(todayFormatted, circularMenuElements[i].x, circularMenuElements[i].y + 1);
      }

      this.context.font = "4px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .5;
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      //this.context.fillText('test-test', circularMenuElements[0].x, circularMenuElements[0].y + menuRay - 10);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      //this.context.fillText('test', circularMenuElements[0].x, circularMenuElements[0].y + menuRay - 5);

      this.context.font = "4px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .5;
      //this.context.fillText('test-test-test', circularMenuElements[0].x, circularMenuElements[0].y + tronDiskRay + 10);

      this.context.font = "25px Arial";
      this.context.fillStyle = "#D9EBF9"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .7;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      //this.context.fillText(twoDigitNumber(Math.floor(randomPercentage * 100 / 25) + 1), circularMenuElements[0].x + tronDiskRay + 30, circularMenuElements[0].y);
      //refreshCount

      this.context.font = "25px Arial";
      this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
      this.context.globalAlpha = .7;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      //this.context.fillText(twoDigitNumber((randomPercentage * 100).toFixed(0)), circularMenuElements[0].x + tronDiskRay + 70, circularMenuElements[0].y);

      //red dots around
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.strokeStyle = '#DB4856'; //"#85CCFF";
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;

      //red dots around
      this.context.lineWidth = .5;
      this.context.globalAlpha = .4;
      this.context.strokeStyle = '#D9EBF9'; //"#85CCFF";
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;

      this.context.beginPath();

      //this.context.moveTo(circularMenuElements[7].x, circularMenuElements[7].y);
      //this.context.lineTo(circularMenuElements[16].x, circularMenuElements[16].y);

      this.context.closePath();

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
      this.context.setLineDash([0]);
      //this.context.stroke();

      this.context.beginPath();

      //this.context.moveTo(circularMenuElements[9].x, circularMenuElements[9].y);
      //this.context.lineTo(circularMenuElements[8].x, circularMenuElements[8].y);

      this.context.closePath();

      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
      this.context.setLineDash([0]);
      //this.context.stroke();

      //red dots around
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.strokeStyle = '#DB4856'; //"#85CCFF";
      this.context.setLineDash([0]);
      //this.context.shadowColor = "#85CCFF"; //'#FFF';
      //this.context.shadowBlur = 0;

      if (showDots) {
        drawCircle(circularMenuElements[4], this.context);
        drawCircle(circularMenuElements[5], this.context);
        drawCircle(circularMenuElements[6], this.context);
        drawCircle(circularMenuElements[7], this.context);

        drawCircle(circularMenuElements[8], this.context);
        drawCircle(circularMenuElements[9], this.context);
        drawCircle(circularMenuElements[10], this.context);
        drawCircle(circularMenuElements[11], this.context);

        this.context.lineWidth = .5;
        this.context.globalAlpha = .1;
        this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
        this.context.setLineDash([2, 4]);

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[4].x, circularMenuElements[4].y);
        this.context.lineTo(circularMenuElements[8].x, circularMenuElements[8].y);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[5].x, circularMenuElements[5].y);
        this.context.lineTo(circularMenuElements[9].x, circularMenuElements[9].y);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[6].x, circularMenuElements[6].y);
        this.context.lineTo(circularMenuElements[10].x, circularMenuElements[10].y);
        this.context.closePath();
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(circularMenuElements[7].x, circularMenuElements[7].y);
        this.context.lineTo(circularMenuElements[11].x, circularMenuElements[11].y);
        this.context.closePath();
        this.context.stroke();

        this.context.font = "8px Arial";
        this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
        this.context.globalAlpha = .2;
        this.context.textAlign = "left";
        this.context.textBaseline = "middle";
        this.context.fillText('available', circularMenuElements[8].x + 5, circularMenuElements[8].y);
        this.context.fillText('available', circularMenuElements[9].x + 5, circularMenuElements[9].y);
        this.context.fillText('available', circularMenuElements[10].x + 5, circularMenuElements[10].y);
        this.context.fillText('available', circularMenuElements[11].x + 5, circularMenuElements[11].y);
      }

      //DARK LOGO INIT 1
      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle =  "#FFF"; // "#D9EBF9"; //"#b9daff"; //'#D9EBF9'; 
      this.context.setLineDash([2, 6]);
      // this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 0;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      pc = circularMenuElements[0];
      pc.x = window.innerWidth / 2;
      pc.y = window.innerHeight / 2;
      pc.r -= 15;

      // drawCircle(pc, this.context);

      //first dot main circle
      var a = Math.PI / 2 - clockRotationFactor;
      var b = Math.PI / 2;
      var p1 = {
        x: pc.x + Math.cos(a) * pc.r,
        // x: pc.x,
        y: pc.y - Math.sin(a) * pc.r,
        r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
      };

      // this.context.globalAlpha = .1;
      // this.context.lineWidth = 1;
      // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
      // this.context.setLineDash([0]);
      // this.context.shadowBlur = 2;

      // drawCircle(p1, this.context);
      p1.r = pc.r * 1.75;
      this.context.strokeStyle = "#FFF"; // '#D9EBF9'; //
      // drawCircle(p1, this.context);

      //second dot main circle
      var a = 7 * Math.PI / 6 - clockRotationFactor;
      var b = 7 * Math.PI / 6;
      var p2 = {
        x: pc.x + Math.cos(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
        y: pc.y - Math.sin(a) * pc.r,
        r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
      };

      // this.context.lineWidth = 1;
      // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
      // this.context.setLineDash([0, 0]);

      // drawCircle(p2, this.context);
      p2.r = pc.r * 1.75;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";
      // drawCircle(p2, this.context);

      //third dot main circle
      var a = 11 * Math.PI / 6 - clockRotationFactor;
      var b = 11 * Math.PI / 6;
      var p3 = {
        x: pc.x + Math.cos(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
        y: pc.y - Math.sin(a) * pc.r,
        r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
      };

      // this.context.lineWidth = 1;
      // this.context.setLineDash([0, 0]);
      
      p3.r = pc.r * 1.75;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";
      // drawCircle(p3, this.context);
      
      //red conection dots
      this.context.strokeStyle = '#DB4856'; // "#"; //'#D9EBF9'; //"#85CCFF";
      // this.context.fillStyle = "#DB4856"; //'#D9EBF9'; //"#85CCFF";
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.setLineDash([0]);

      p1.r = p2.r = p3.r = .75;
      drawCircle(p1, this.context);
      drawCircle(p2, this.context);
      drawCircle(p3, this.context);

      //DARK LOGO END

      //DARK LOGO INIT 2
      this.context.lineWidth = 1;
      this.context.globalAlpha = .1;
      this.context.strokeStyle =  "#FFF"; // "#D9EBF9"; //"#b9daff"; //'#D9EBF9'; 
      this.context.setLineDash([2, 6]);
      // this.context.shadowColor = "#85CCFF"; //'#FFF';
      this.context.shadowBlur = 0;
      //this.context.shadowOffsetX = 0;
      //this.context.shadowOffsetY = 0;

      pc = circularMenuElements[0];
      pc.x = window.innerWidth / 2;
      pc.y = window.innerHeight / 2;
      pc.r -= 50;

      // drawCircle(pc, this.context);

      //first dot main circle
      var a = Math.PI / 2 - clockRotationFactor;
      // var b = Math.PI / 2 + clockRotationFactor;

      var p1 = {
        x: pc.x + Math.cos(a) * pc.r,
        // x: pc.x,
        y: pc.y - Math.sin(a) * pc.r,
        r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
      };

      // this.context.globalAlpha = .1;
      // this.context.lineWidth = 1;
      // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
      // this.context.setLineDash([0]);
      // this.context.shadowBlur = 2;

      // drawCircle(p1, this.context);
      p1.r = pc.r * 1.75;
      this.context.strokeStyle = "#FFF"; // '#D9EBF9'; //
      // drawCircle(p1, this.context);

      //second dot main circle
      var a = 7 * Math.PI / 6 - clockRotationFactor;
      var b = 7 * Math.PI / 6;
      var p2 = {
        x: pc.x + Math.cos(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
        y: pc.y - Math.sin(a) * pc.r,
        r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
      };

      // this.context.lineWidth = 1;
      // this.context.strokeStyle = "#f00"; //'#D9EBF9'; //"#85CCFF";
      // this.context.setLineDash([0, 0]);

      // drawCircle(p2, this.context);
      p2.r = pc.r * 1.75;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";
      // drawCircle(p2, this.context);

      //third dot main circle
      var a = 11 * Math.PI / 6 - clockRotationFactor;
      // var b = 11 * Math.PI / 6;
      var p3 = {
        x: pc.x + Math.cos(a) * pc.r, //+ (sign * Math.ceil(Math.random() * 10))),
        y: pc.y - Math.sin(a) * pc.r,
        r: 2 //+ (sign * Math.ceil(Math.random() * 10)))
      };

      // this.context.lineWidth = 1;
      // this.context.setLineDash([0, 0]);
      
      p3.r = pc.r * 1.75;
      this.context.strokeStyle = '#FFF'; //"#85CCFF";
      // drawCircle(p3, this.context);
      
      //red conection dots
      this.context.strokeStyle = "#DB4856"; //'#D9EBF9'; //"#85CCFF";
      // this.context.fillStyle = "#DB4856"; //'#D9EBF9'; //"#85CCFF";
      this.context.lineWidth = 1;
      this.context.globalAlpha = 1;
      this.context.setLineDash([0]);

      p1.r = p2.r = p3.r = .75;
      drawCircle(p1, this.context);
      drawCircle(p2, this.context);
      drawCircle(p3, this.context);

      //DARK LOGO END

    };
  }

  rainMeter = new RainMeter();

  rainMeter.init();

  var refreshIntervalId = setInterval(function () {
    // if (engineOn && rotationVelocity < maxRotationVelocity) {
    if (engineOn && rotationVelocity < maxRotationVelocity) {
      rotationVelocity += rotationVelocity * rotationAceleration;
    }

    // if (!engineOn && rotationVelocity > initialRotationVelocity && rotationVelocity > 0) {
    if (!engineOn && clockRotationFactor > 0) {
      // rotationVelocity -= rotationVelocity * rotationAceleration;
      // rotationVelocity = rotationVelocity < 0 || rotationVelocity.toString().indexOf("e") ? 0 : rotationVelocity;
      // rotationVelocity = rotationVelocity < 0 || rotationVelocity.toFixed(5) == 0 ? 0 : rotationVelocity;
      // clockRotationFactor -= .01 * Math.PI;
      rotationVelocity -= rotationVelocity * rotationAceleration;
    }

    // if (engineOn) {
      clockRotationFactor += rotationVelocity * Math.PI;
    // }

    // else if (!engineOn) {
    //   clockRotationFactor = 0;
    // }

    // clockRotationFactor += rotationVelocity * Math.PI;

    rainMeter.draw();
  }, 1000 / 60);

  // var refreshAcelerationAndVelocity = setInterval(function () {

  //   rotationVelocity += rotationVelocity + rotationAceleration;
  //   clockRotationFactor += rotationVelocity / 100 * rotationVelocity * Math.PI;

  //   // rainMeter.draw();
  // }, 1000);

var Voronoi = (function () {
  "use strict";

  var DELAUNAY_STATES = {
    FIND_CAVITY_TRIANGLES: 0,
    INSERT_SEED: 1,
  };

	/**
	 * Voronoi diagram generator.
	 * @param {CanvasRenderingContext2D} ctx - the drawing context
	 * @param {Integer} width
	 * @param {Integer} height
	 * @param {Object} settings
	 */
  function Voronoi(ctx, width, height, settings) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.settings = settings;
    this.seeds = [];
  };

	/**
	 * Initialise or reset the generator.
	 * To reset and regenerate the same diagram, pass `true` as argument.
	 * @param {Boolean} keepScatter - whether to keep the previously scatterd seeds
	 */
  Voronoi.prototype.init = function (keepScatter) {
    assert(typeof keepScatter === 'boolean', "argument `keepScatter` must be a boolean");
    assert(!keepScatter || this.seeds && this.seeds.length > 0,
      "no scatter to keep");

    // Scatter the seeds, unless asked otherwise
    if (!keepScatter) {
      this.scatterSeeds();
      this.generateSeeds();
    }

    // Initialise variables used to compute the Delaunay triangulation
    this.delaunayTriangles = [];
    this.delaunayComplete = false;
    this.delaunayIndex = 0;
    this.cavityTriangles = {};
    this.cavityEdges = [];
    this.newTriangles = [];
    this.currentSeed = null;
    this.delaunayState = DELAUNAY_STATES.FIND_CAVITY_TRIANGLES;

    // Initialise variables used to compute the Voronoi diagram
    this.voronoiComplete = false;
    this.voronoiEdges = [];
  };

	/**
	 * Scatter the seeds on the plane.
	 */
  Voronoi.prototype.scatterSeeds = function () {
    assert(this.settings.size > 0, "`settings.size` must be greater than 0");

    switch (this.settings.seeds.scattering) {
      case 'random':
        this.seeds = Scatter.random(this.width, this.height, this.settings.size);
        break;
      default:
        assert(false, "scattering not supported");
    }
  };

  Voronoi.prototype.generateSeeds = function () {
    assert(this.settings.size > 0, "`settings.size` must be greater than 0");

    switch (this.settings.seeds.scattering) {
      case 'random':
        //this.seeds = Scatter.random(this.width, this.height, this.settings.size);

        var countY = 0;

        for (var i = 0; i < this.settings.size; i++) {//this.seeds.length; i++) {
          //var x = i % 10 * 200 + Math.random() * 200; //i % 10 * 100; //+ Math.random() * 50; //var x = Math.random() * window.innerWidth;

          //var y = countY * 10 + Math.random() * 100;//i / 10 * 50;// + Math.random() * 25; //var y = Math.random() * window.innerHeight;
          //if ((i % 10) % 2 == 0 && i != 0) countY++;

          //this.seeds[i].x = x.toFixed(0);
          //this.seeds[i].y = y.toFixed(0);

          this.seeds[i].x = Math.random() * this.width; //targets.rand[i].x; //
          this.seeds[i].y = Math.random() * this.height; //targets.rand[i].y; //
          if (i < this.settings.size * .05) this.seeds[i].mark = true;
        }

        break;
      default:
        assert(false, "scattering not supported");
    }
  };

  /**
   * Generate the diagram.
   */
  Voronoi.prototype.generate = function () {
    assert(this.seeds && this.seeds.length > 0, "seeds not scattered");

    // Prepare for the computation of the Delaunay triangulation
    this.initDelaunay(false);

    // Compute the Delaunay triangulation
    while (!this.delaunayComplete) {
      this.nextDelaunayStep(false);
    }

    // Compute the Voronoi diagram from the triangulation
    this.computeVoronoi();
  };

  /**
   * Prepare for the computation of the Delaunay triangulation with the Bowyer-Watson algorithm.
   */
  Voronoi.prototype.initDelaunay = function () {
    // Create the initial triangle that surrounds all of the seeds
    // Create the three vertices
    var v1 = new Vertex(-1, -1);
    var v2 = new Vertex(this.width * 2 + 1, -1);
    var v3 = new Vertex(-1, this.height * 2 + 1);

    // Store the vertices
    this.initialVertices = [];
    this.initialVertices[v1.id] = v1;
    this.initialVertices[v2.id] = v2;
    this.initialVertices[v3.id] = v3;

    // Link the vertices together
    var e1 = new Edge(v1, v2);
    var e2 = new Edge(v2, v3);
    var e3 = new Edge(v3, v1);

    // Create the triangle
    var initialTriangle = new Triangle(
      [v1, v2, v3],
      [e1, e2, e3],
      [null, null, null]
    );

    // Store the triangle
    this.delaunayTriangles.push(initialTriangle);

    // Add the vertices of the initial triangle to the seeds array
    this.seeds = this.seeds.concat(initialTriangle.vertices);
  };

  /**
   * Insert a new vertex in the Delaunay triangulation.
   */
  Voronoi.prototype.nextDelaunayStep = function () {
    // Find the cavity triangles
    if (this.delaunayState === DELAUNAY_STATES.FIND_CAVITY_TRIANGLES) {
      // Reset
      this.cavityTriangles = {};
      this.newTriangles = [];
      this.cavityEdges = [];

      // Select the next seed to be inserted
      this.currentSeed = this.seeds[this.delaunayIndex];
      this.delaunayIndex += 1;

      // Find the triangles that contain the current seed in their circumscribing circle
      // These triangles will be removed to form a 'cavity' around the seed
      for (var i = 0; i < this.delaunayTriangles.length; i += 1) {
        var t = this.delaunayTriangles[i];
        if (t.circumcircleContains(this.currentSeed)) {
          this.cavityTriangles[t.id] = t;
        }
      }

      // Update the state
      this.delaunayState = DELAUNAY_STATES.INSERT_SEED;

      // Insert the seed in the triangulation
    } else {
      var newEdges = {}, newEdgesToNewTriangles = {};

      for (var tId in this.cavityTriangles) {
        if (this.cavityTriangles.hasOwnProperty(tId)) {
          var t = this.cavityTriangles[tId];

          // Loop through the edges of the old triangle
          for (var i = 0; i < 3; i += 1) {
            var e = t.edges[i];
            var neighbour = t.getNeighbour(e);

            // If the neighbour is null or not a cavity triangle itself, create a new triangle using the shared edge
            if (neighbour === null || !this.cavityTriangles[neighbour.id]) {
              this.cavityEdges.push(e);

              /* Make sure we don't create edges that already exist */

              var sToV1 = newEdges[e.v1.id];
              var v2ToS = newEdges[e.v2.id];
              var sToV1Flag = false, v2ToSFlag = false;

              if (!sToV1) {
                sToV1Flag = true;
                sToV1 = new Edge(this.currentSeed, e.v1);
                newEdges[e.v1.id] = sToV1;
              }

              if (!v2ToS) {
                v2ToSFlag = true;
                v2ToS = new Edge(e.v2, this.currentSeed);
                newEdges[e.v2.id] = v2ToS;
              }

              // Create the new triangle
              var newT = new Triangle([this.currentSeed, e.v1, e.v2], [sToV1, e, v2ToS], [null, neighbour, null]);

              // Set new triangle as neighbour of the neighbour triangle
              if (neighbour !== null) {
                neighbour.setNeighbour(e, newT);
              }

              // Update neighbours for internal cavity edges
              if (sToV1Flag) {
                // Mark the edge as belonging to the new triangle
                newEdgesToNewTriangles[sToV1.id] = newT;
              } else {
                // The edge already belongs to another new triangle; retrieve that triangle
                var sToV1Neighbour = newEdgesToNewTriangles[sToV1.id];

                // Update neighbours in both triangles
                newT.setNeighbour(sToV1, sToV1Neighbour);
                sToV1Neighbour.setNeighbour(sToV1, newT);
              }

              if (v2ToSFlag) {
                // Mark the edge as belonging to the new triangle
                newEdgesToNewTriangles[v2ToS.id] = newT;
              } else {
                // The edge already belongs to another new triangle; retrieve that triangle
                var v2ToSNeighbour = newEdgesToNewTriangles[v2ToS.id];

                // Update neighbours in both triangles
                newT.setNeighbour(v2ToS, v2ToSNeighbour);
                v2ToSNeighbour.setNeighbour(v2ToS, newT);
              }


              // Save the new triangle
              this.newTriangles.push(newT);
              this.delaunayTriangles.push(newT);
            }
          }
        }
      }

      // Delete the old cavity triangles
      this.deleteTriangles(this.cavityTriangles);

      // Update the state
      this.delaunayState = DELAUNAY_STATES.FIND_CAVITY_TRIANGLES;

      // The last three seeds are from the initial triangle
      // If they are reached, it means the triangulation has been computed and needs to be cleaned up
      if (this.delaunayIndex >= this.seeds.length - 3) {
        this.cleanUpDelaunay();
      }
    }
  };

  /**
   * Clean-up the Delaunay triangulation by removing the initial triangle as well as the perimeter triangles.
   */
  Voronoi.prototype.cleanUpDelaunay = function () {
    this.delaunayComplete = true;

    // Find and remove the triangles on the perimeter of the triangulation
    var perimeterTriangles = [];
    var i, j, t;

    for (i = 0; i < this.delaunayTriangles.length; i += 1) {
      t = this.delaunayTriangles[i];

      for (j = 0; j < 3; j += 1) {
        if (this.initialVertices[t.vertices[j].id]) {
          perimeterTriangles.push(t);
          break;
        }
      }
    }

    // Delete the perimeter triangles
    this.deleteTriangles(perimeterTriangles);

    // Remove the initial vertices
    this.seeds.splice(this.seeds.length - 3, 3);
  };

  /**
   * Build the Voronoi diagram from the Delaunay triangulation.
   */
  Voronoi.prototype.computeVoronoi = function () {
    this.voronoiComplete = true;

    var i, j, t, n;
    for (i = 0; i < this.delaunayTriangles.length; i += 1) {
      t = this.delaunayTriangles[i];
      for (j = 0; j < 3; j += 1) {
        n = t.getNeighbour(t.edges[j]);
        // Ensure the Voronoi edge hasn't already been created
        var nIndex = this.delaunayTriangles.indexOf(n);
        if (nIndex > i) {
          // Create the Voronoi edge between the circumcentres of the two triangles t and n
          var e = new Edge(
            new Vertex(t.circumX, t.circumY),
            new Vertex(n.circumX, n.circumY)
          );

          this.voronoiEdges.push(e);
        } else if (nIndex === -1) {
          // The neighbour is a triangle that has been deleted
          // i.e. this triangle is now on the perimeter of the Delaunay triangulation

          // Get the perimeter edge
          var e = t.edges[j];

          // Remove the neighbour, just to keep everything clean
          t.setNeighbour(e, null);

          // Find the equation of the edge's line (y = a1.x + b1); calculate the denominator first in case it's equal to 0
          var a1, b1, denom;
          denom = e.v1.x - e.v2.x;
          if (denom !== 0) {
            a1 = (e.v1.y - e.v2.y) / denom;
            b1 = e.v1.y - a1 * e.v1.x;
          } else {
            // The line is vertical; use the equation x = b1 instead
            a1 = null;
            b1 = e.v1.x;
          }

          // Get the coordinates of the middle of the edge
          var midX = e.v1.x + (e.v2.x - e.v1.x) / 2;
          var midY = e.v1.y + (e.v2.y - e.v1.y) / 2;

          // Deduce the equation of the line that is perpendicular to the middle of the edge (y = a2.x + b2)
          var a2, b2;
          if (a1 !== null) {
            if (a1 !== 0) {
              a2 = -1 / a1;
              b2 = midY - a2 * midX;
            } else {
              // The perpendicular is a vertical line
              a2 = null;
              b2 = midX;
            }
          } else {
            // The perpendicular is a horizontal line
            a2 = 0;
            b2 = midY;
          }

          // Find the vertex opposite to the edge
          var oppositeVertex = null;
          for (var k = 0; k < 3; k += 1) {
            var v = t.vertices[k];
            if (e.v1 != v && e.v2 != v) {
              oppositeVertex = v;
              break;
            }
          }

          var a3, b3, projX, coeff, chosenFar;

          if (a2 !== null) {
            if (a1 !== null) {
              a3 = a2;
              b3 = oppositeVertex.y - a3 * oppositeVertex.x;
              projX = (b3 - b1) / (a1 - a3);
            } else {
              projX = b1;
            }

            coeff = oppositeVertex.x < projX ? this.width : 0;
            chosenFar = new Vertex(coeff, a2 * coeff + b2);
          } else {
            var farY = oppositeVertex.y < midY ? this.height : 0;
            chosenFar = new Vertex(b2, farY);
          }

          // Create and store the Voronoi perimeter edge
          var newE = new Edge(new Vertex(t.circumX, t.circumY), chosenFar);
          this.voronoiEdges.push(newE);
        }
      }
    }
  };

  /**
   * Delete some triangles from the Delaunay triangulation.
   * @param {Array} triangles The triangles to delete.
   */
  Voronoi.prototype.deleteTriangles = function (triangles) {
    for (var tId in triangles) {
      if (triangles.hasOwnProperty(tId)) {
        var t = triangles[tId];
        //t.draw(ctx2, true);
        //t.draw(ctx3, true);
        this.delaunayTriangles.splice(this.delaunayTriangles.indexOf(t), 1);
      }
    }
  };

  /**
   * Draw the Voronoi diagram, its seeds and its Delaunay triangulation. 
   */
  Voronoi.prototype.draw = function () {
    // Clear the canvas
    this.clear();

    // In `auto` mode or if the Voronoi diagram has been computed, draw according to the visibility settings
    if (this.settings.mode === 'auto' || this.voronoiComplete) {
      // Draw the seeds
      if (this.settings.seeds.show) {
        this.drawSeeds();
      }

      // Draw the triangulation
      if (this.settings.delaunay.show) {
        this.drawDelaunay();
      }

      // Draw the diagram
      if (this.settings.voronoi.show) {
        this.drawVoronoi();
      }

      // In `manual` mode, draw the current Delaunay step
    } else {
      this.drawDelaunayStep();
    }
  };

  /**
   * Clear the canvas.
   */
  Voronoi.prototype.clear = function () {
    // Clear by drawing a white rectangle over the city
    //this.ctx.fillStyle = this.settings.bgColor;
    // this.ctx.fillRect(0, 0, this.width, this.height);
  };

  /**
   * Draw the seeds of the diagram.
   */
  Voronoi.prototype.drawSeeds = function () {
    this.ctx.fillStyle = this.settings.seeds.color;
    this.ctx.strokeStyle = this.settings.seeds.color;

    for (var i = 0; i < this.seeds.length; i += 1) {
      this.seeds[i].draw(this.ctx, this.settings.seeds.radius);
    }
  };

  /**
   * Draw the Delaunay triangulation.
   * @param {Boolean} showSeeds true to draw the seeds in the first context.
   */
  Voronoi.prototype.drawDelaunay = function (showSeeds) {
    this.ctx.lineWidth = this.settings.delaunay.width;
    this.ctx.strokeStyle = this.settings.delaunay.color;

    this.drawTriangles(this.delaunayTriangles, false, true);
  };

  /**
   * Draw some triangles.
   * @param {Array} triangles The triangles to draw.
   * @param {Boolean} fill Indicates whether to fill the triangles.
   * @param {Boolean} stroke Indicates whether to stroke the edges of the triangles.
   */
  Voronoi.prototype.drawTriangles = function (triangles, fill, stroke) {
    // this.ctx.setLineDash([3, 5]);
    this.ctx.setLineDash([2, 3]);
    for (var i = 0; i < triangles.length; i += 1) {
      triangles[i].draw(this.ctx, fill, stroke);
    }
  };

  /**
   * Draw the current step in the creation of the Delaunay triangulation.
   */
  Voronoi.prototype.drawDelaunayStep = function () {
    // Clear the canvas
    this.clear();

    // Draw old triangles
    if (this.cavityTriangles) {
      this.ctx.lineWidth = 6.0;
      this.ctx.strokeStyle = '#ff0000';
      this.ctx.fillStyle = '#ffcccc';
      for (var tId in this.cavityTriangles) {
        if (this.cavityTriangles.hasOwnProperty(tId)) {
          this.cavityTriangles[tId].draw(this.ctx, true, true);
        }
      }
    }

    // Draw new triangles
    if (this.newTriangles) {
      this.ctx.lineWidth = 6.0;
      this.ctx.strokeStyle = '#cccc00';
      this.ctx.fillStyle = '#ccffcc';
      for (var i = 0; i < this.newTriangles.length; i++) {
        this.newTriangles[i].draw(this.ctx, true, true);
      }
    }

    // Draw seeds
    this.drawSeeds();

    // Draw the current seed bigger
    if (this.currentSeed) {
      this.currentSeed.draw(this.ctx, this.settings.seeds.radius * 2);
    }


    // Draw cavity edges
    if (this.cavityEdges) {
      this.ctx.lineWidth = 6.0;
      this.ctx.strokeStyle = "#0000ff";
      for (var i = 0; i < this.cavityEdges.length; i++) {
        this.cavityEdges[i].draw(this.ctx);
      }
    }

    // Draw Delaunay triangles
    this.drawDelaunay();
  };

  /**
   * Draw the Voronoi diagram.
   */
  Voronoi.prototype.drawVoronoi = function () {
    this.ctx.strokeStyle = this.settings.voronoi.color;
    this.ctx.lineWidth = this.settings.voronoi.width;
    this.ctx.lineCap = 'round';
    //this.ctx.setLineDash([0]);
    // this.ctx.setLineDash([5, 5]);
    this.ctx.setLineDash([3, 3]);


    for (var i = 0; i < this.voronoiEdges.length; i += 1) {
      this.voronoiEdges[i].draw(this.ctx);
    }
  };

  return Voronoi;

}());


  var settings = {
    // The application mode ('auto' or 'manual')
    mode: 'auto',

    // The number of seeds of the diagram
    size: 30,

    // Whether to generate a diagram on page load
    generateOnLoad: true,

    // The canvas' background color
    // bgColor: '#000',
    bgColor: 'Transparent',

    seeds: {
      // Whether to show the seeds on the diagram
      show: true,

      // The scattering algorithm to use to position the seeds on t  he plane (allowed: 'random')
      scattering: 'random',

      // The size and color of the seeds on the canvas
      radius: .5, //75,
      color: '#db4b23'
    },

    delaunay: {
      // Whether to show the Delaunay triangulation on the canvas
      show: true,

      // The width and color of the lines of the triangulation
      width: .03,
      color: '#B9DAFF' //'#83BEF2'
    },

    voronoi: {
      // Whether to show the diagram
      show: true,

      // The width and color of the lines of the diagram on the canvas
      width: .08,
      color: '#B9DAFF' //'#83BEF2' //'#0b8770'
    }

  };

  var AppController = {
    voronoi,
    modeFieldsets: {},
    size: 3,
    init: function () {
      // Get the dimensions of the main element, which wraps the canvas
      //var main = document.getElementById('js-main');
      //var w = window.innerWidth;
      //var h = window.innerHeight;

      // Get the canvas and its context, and set its dimensions
      var canvas = document.getElementById('voronoi');
      canvas.width = canvas.clientWidth; //window.innerWidth; //canvasWidth; //
      canvas.height = canvas.clientHeight; //window.innerHeight; //canvasHeight; //
      var ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var w = canvas.width; //clientWidth; //window.innerWidth;
      var h = canvas.height; //clientHeight; //window.innerHeight;

      // canvas.width = w;
      // canvas.height = h;
      //canvas.width = canvas.clientWidth; //window.innerWidth;
      //canvas.height = canvas.clientHeight; //window.innerHeight;

      // Event delegation
      //var form = document.getElementById('js-form');
      //form.addEventListener('click', AppController.handleEvent);
      //form.addEventListener('change', AppController.handleEvent);

      // Cancel form submission (when enter key is pressed)
      //form.addEventListener('submit', function (evt) {
      //	evt.preventDefault();
      //});

      // Restore the settings from localStorage
      //if (window.localStorage) {
      //    var savedSettings = window.localStorage.getItem('settings');
      //    if (savedSettings) {
      //        settings = JSON.parse(savedSettings);
      //    }
      //}

      // Create a new Voronoi instance
      voronoi = new Voronoi(ctx, w, h, settings);

      // Initialise the form controls in the sidebar according to the settings
      //document.getElementById('js-size').value = settings.size;
      //document.getElementById(settings.mode).checked = true;
      //AppController.setMode(settings.mode);
      //document.getElementById('show-seeds').checked = settings.seeds.show;
      //document.getElementById('show-delaunay').checked = settings.delaunay.show;
      //document.getElementById('show-voronoi').checked = settings.voronoi.show;
    },

    saveSettings: function () {
      if (window.localStorage) {
        window.localStorage.setItem('settings', JSON.stringify(settings));
      }
    },

    handleEvent: function (evt) {
      var elem = evt.target;

      // Only accept `change` events on input elements
      if (evt.type === 'change' && elem.tagName !== 'INPUT' ||
        evt.type === 'click' && elem.tagName === 'INPUT') {
        return;
      }

      // If an action is set on the element...
      if (elem.dataset.action) {
        // Get the AppController's method that corresponds to the action
        var method = AppController[elem.dataset.action];
        assert(typeof method === 'function', "unhandled action");

        // Call the action's method; if a parameter is provided, pass it as argument
        method.call(elem, elem.dataset.param);
      }
    },

    /**
     * Generate a new diagram
     */
    generate: function () {
      this.init();
      // Initialise and scatter the seeds
      voronoi.init(false);

      // In 'auto' mode, generate the diagram right away
      if (settings.mode === 'auto') {
        voronoi.generate();

        // In 'manual' mode, enable the next button and disable the visibility controls
      } else {
        var next = document.getElementById('js-next');
        next.removeAttribute('disabled');

        var showFieldset = document.getElementById('js-show');
        showFieldset.setAttribute('disabled', 'disabled');
      }

      // Draw
      voronoi.draw();

      //settings.size++;
      //this.setSize(size++);
      //this.size++;
    },

    /**
     * Perform the next step of computation of the diagram.
     */
    nextStep: function () {
      if (voronoi.delaunayTriangles.length === 0) {
        // Initialise the triangulation, and run the next step right away
        voronoi.initDelaunay();
        voronoi.nextDelaunayStep();

      } else if (!voronoi.delaunayComplete) {
        voronoi.nextDelaunayStep();

      } else if (!voronoi.voronoiComplete) {
        voronoi.computeVoronoi();

        // Disable the next button once the diagram has been computed
        this.setAttribute('disabled', 'disabled');

        var showFieldset = document.getElementById('js-show');
        showFieldset.removeAttribute('disabled');
      }

      // Draw
      voronoi.draw();
    },

    /**
     * Reset the diagram, but keep the seeds.
     */
    reset: function () {
      voronoi.init(true);
      voronoi.draw();

      // Enable the next button
      var next = document.getElementById('js-next');
      next.removeAttribute('disabled');

      var showFieldset = document.getElementById('js-show');
      showFieldset.setAttribute('disabled', 'disabled');
    },

    /**
     * Set the app mode to 'auto' or 'manual'.
     * param {String} mode
     */
    setMode: function (mode) {
      assert(typeof mode === 'string', "argument `mode` must be a string");
      var nextBtn = document.getElementById('js-next');
      var resetBtn = document.getElementById('js-reset');
      var showFieldset = document.getElementById('js-show');

      // Save new setting
      settings.mode = mode;
      AppController.saveSettings();

      switch (mode) {
        case 'auto':
          nextBtn.setAttribute('disabled', 'disabled');
          resetBtn.setAttribute('disabled', 'disabled');
          showFieldset.removeAttribute('disabled');
          break;
        case 'manual':
          if (!voronoi.voronoiComplete) {
            nextBtn.removeAttribute('disabled');
            showFieldset.setAttribute('disabled', 'disabled');
          }
          resetBtn.removeAttribute('disabled');
          break;
        default:
          assert(false, "argument `mode` must be one of (auto|manual)");
      }
    },

    setSize: function () {
      var size = parseInt(this.value, 10);
      if (!isNaN(size)) {
        settings.size = size;
        AppController.saveSettings();
      }
    },

    /**
     * Set the visibility of the different parts of the diagram (seeds, Delaunay, Voronoi).
     * param {String} part
     */
    setVisibility: function (part) {
      assert(typeof part === 'string', "argument `part` must be a string");
      assert(settings[part], "argument `part` must be one of (seeds|delaunay|voronoi)");

      var checkbox = document.getElementById('show-' + part);
      settings[part].show = checkbox.checked;
      AppController.saveSettings();

      // Draw
      voronoi.draw();
    }

  };

  /**
   * Initialise the app when the page is loaded.
   * `clientWidth` of `.main` table cell is incorrect if retrieved on DOMContentLoaded.
   */
  window.addEventListener('load', function () {
    AppController.init();

    // Optionally, generate a new diagram right away
    if (settings.generateOnLoad) {
      AppController.generate();
    }
  });
}

window.skynet = window.skynet || {}
window.skynet.exams = {
  exams_init: exams_init,
  import_init: import_init
}