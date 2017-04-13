var numCount = document.getElementById('count');
var numSum = document.getElementById('sum');
var numMean = document.getElementById('mean');
 
var subCount = [];
var subSum = 0; 
var starColors = ['#51fffc', '#ffff96', '#96ffc7', '#f8d8ff', '#d2bfff', '#ffbfbf', '#ffd299', '#ffffff', '#000000'];
 
function calcData(element) {
  var dataInput = document.compute.calculate.value;
  var element = Number(dataInput);
  if(typeof element === 'number' || element === 0) {
    subCount.push(element);
    var starDiv = document.createElement('div');
    starDiv.className = 'star';
    var starHolder = document.getElementById('star-holder');
    starHolder.appendChild(starDiv);
    starDiv.style.background = 'radial-gradient(circle, ' + starColors[Math.floor(Math.random() * starColors.length)] + ', transparent, transparent)';
    numCount.innerHTML = subCount.length;
    for(var i in subCount) {
      subSum += subCount[i];
      numSum.innerHTML = subSum;
      var subMean = subSum/subCount.length;
      numMean.innerHTML = subMean;
    }
  }else {
    numCount.innerHTML = 'Not a Number';
  }
  subSum = 0;
  event.preventDefault();
}
 
 
function clearData() {
  subCount = [];
  subSum = 0;
  subMean = 0;
  numSum.innerHTML = '';
  numMean.innerHTML = '';
  numCount.innerHTML = '';
 
  var starHolder = document.getElementById('star-holder');
  var starDiv = starHolder.getElementsByClassName('star');
 
  while(starDiv.length > 0) {
    starHolder.removeChild(starDiv[0]);
  }
}
