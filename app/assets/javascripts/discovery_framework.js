const discovery_framework_init = () => {
  var menuRay = 12,
      circularMenuElements = [],
      percentages = [
        .5 + Math.random() * .5,
        .5 + Math.random() * .5,
        .5 + Math.random() * .5,
        .5 + Math.random() * .5],
      mousePos = { x: 0, y: 0 },
      menuCount = 60;

  function DiscoveryFramework() {
    // console.log('circular menu setup');
    this.canvas = document.getElementById('discovery');
    this.context = this.canvas.getContext('2d');

    this.init = function () {
      this.update();
      this.draw();
    };
    this.update = function () {
      // console.log('circular menu update');

      var canvas = document.getElementById('discovery');
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      circularMenuElements = [];
      
      var seconds = menuCount / 30;
      
      seconds = seconds > 1 ? 1 : seconds;
      
      var center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };

      referenceRadius = window.innerWidth / 12 * 2;

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

      circularMenuElements.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
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
      // this.context.globalAlpha = 1;
      // this.context.lineWidth = 1;
      // this.context.strokeStyle = '#FFF'; //"#85CCFF";

      // this.context.shadowColor = "#85CCFF"; //'#FFF';
      // this.context.shadowBlur = 1;
      // this.context.shadowOffsetX = 0;
      // this.context.shadowOffsetY = 0;

      center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };

      referenceRadius = window.innerWidth / 12 * 2;

      numOfMarks = 12;

      degrees = 360 / numOfMarks;

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

        // //circle
        this.context.globalAlpha = .1;
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([0]);
        this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;

        drawCircle(p, this.context);

        this.context.globalAlpha = .1;
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#b9daff"; //'#D9EBF9'; //"#85CCFF";
        this.context.setLineDash([2, 4]);
        this.context.shadowColor = "#85CCFF"; //'#FFF';
        this.context.shadowBlur = 0;

        p.r += 6;

        drawCircle(p, this.context);

        // var clone = Object.assign({}, circularMenuElements[i]);

        // clone.r += 6;

        // drawCircle(clone, this.context);

        // this.context.lineWidth = 1;
        // this.context.globalAlpha = .7;
        // this.context.strokeStyle = "#D9EBF9"; //"#DB4856"; // //'#AD1925'; // '#fff'; // "#85CCFF"; //
        // this.context.setLineDash([0]);
        // //this.context.setLineDash([5, 1]);
        // // this.context.shadowColor = "#DB4856";
        // this.context.shadowBlur = 1;

        // //var elem2 = Object.assign({}, circularMenuElements[i]);
        // //elem2.y = window.innerHeight / 5 * (i + 1);
        // //elem2.e = (1.5 + 2 * Math.random() * seconds) * Math.PI;

        // drawArc(circularMenuElements[i], this.context);

        // this.context.lineWidth = 2.5;
        // this.context.globalAlpha = 1;
        // this.context.strokeStyle = '#AD1925'; // '#fff'; // "#85CCFF"; //
        // //this.context.setLineDash([2, 40]);
        // this.context.shadowBlur = 0;

        // this.context.font = "9px Arial";
        // this.context.fillStyle = "#DB4856"; // "#A1232F"; //"#BA2735"; //
        // this.context.globalAlpha = .9;
        // this.context.textAlign = "center";
        // this.context.textBaseline = "middle";

        // var today = new Date();

        // var todayFormatted = today.getFullYear();
        // todayFormatted = percentages[i].toFixed(1);

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

      // drawCircle(circularMenuElements[4], this.context);
      // drawCircle(circularMenuElements[5], this.context);
      // drawCircle(circularMenuElements[6], this.context);
      // drawCircle(circularMenuElements[7], this.context);

      // drawCircle(circularMenuElements[8], this.context);
      // drawCircle(circularMenuElements[9], this.context);
      // drawCircle(circularMenuElements[10], this.context);
      // drawCircle(circularMenuElements[11], this.context);

      this.context.lineWidth = .5;
      this.context.globalAlpha = .1;
      this.context.strokeStyle = "#b9daff"; //'#fff'; //"#85CCFF"; //'#DB4856';
      this.context.setLineDash([2, 4]);

      // this.context.beginPath();
      // this.context.moveTo(circularMenuElements[4].x, circularMenuElements[4].y);
      // this.context.lineTo(circularMenuElements[8].x, circularMenuElements[8].y);
      // this.context.closePath();
      // this.context.stroke();

      // this.context.beginPath();
      // this.context.moveTo(circularMenuElements[5].x, circularMenuElements[5].y);
      // this.context.lineTo(circularMenuElements[9].x, circularMenuElements[9].y);
      // this.context.closePath();
      // this.context.stroke();

      // this.context.beginPath();
      // this.context.moveTo(circularMenuElements[6].x, circularMenuElements[6].y);
      // this.context.lineTo(circularMenuElements[10].x, circularMenuElements[10].y);
      // this.context.closePath();
      // this.context.stroke();

      // this.context.beginPath();
      // this.context.moveTo(circularMenuElements[7].x, circularMenuElements[7].y);
      // this.context.lineTo(circularMenuElements[11].x, circularMenuElements[11].y);
      // this.context.closePath();
      // this.context.stroke();

      this.context.font = "8px Arial";
      this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
      this.context.globalAlpha = .2;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";
      // this.context.fillText('available', circularMenuElements[8].x + 5, circularMenuElements[8].y);
      // this.context.fillText('available', circularMenuElements[9].x + 5, circularMenuElements[9].y);
      // this.context.fillText('available', circularMenuElements[10].x + 5, circularMenuElements[10].y);
      // this.context.fillText('available', circularMenuElements[11].x + 5, circularMenuElements[11].y);

      this.context.font = "18px Arial";
      this.context.fillStyle = "#D9EBF9"; //"#DB4856"; "#fff";  "#A1232F"; "#BA2735";
      this.context.globalAlpha = .2;
      this.context.textAlign = "left";
      this.context.textBaseline = "middle";

      //this.context.fillText('AVAILABLE', circularMenuElements[11].x + 5, circularMenuElements[11].y + 10);

      //this.context.fillText('linewidth', circularMenuElements[8].x + 5, circularMenuElements[8].y + 20);
      //this.context.fillText('globalalpha', circularMenuElements[9].x + 5, circularMenuElements[9].y + 20);
      //this.context.fillText('strokeatyle', circularMenuElements[10].x + 5, circularMenuElements[10].y + 20);
      //this.context.fillText('setlinedash', circularMenuElements[11].x + 5, circularMenuElements[11].y + 20);

    };
  }

  discoveryFramework = new DiscoveryFramework();

  discoveryFramework.init();

  // discoveryFramework.draw();

  var refreshIntervalId = setInterval(function () {
    // menuCount += 1;

    discoveryFramework.draw();

    // if (menuCount == 60) clearInterval(refreshIntervalId);
  }, 1000 / 60);
}

window.skynet = window.skynet || {}
window.skynet.discovery = {
  discovery_framework_init: discovery_framework_init
}