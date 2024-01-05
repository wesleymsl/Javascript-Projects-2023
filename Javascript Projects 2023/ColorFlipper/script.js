document.getElementById('colorchanger').onclick = function(){
  let colors = [
      'red',
      'blue',
      'green',
      'yellow',
      'orange',
      'purple',
      'pink',
      'brown',
      'cyan',
      'magenta',
      'teal',
      'lime',
      'maroon',
      'navy',
      'olive',
      'gray',
      'black',
      'white',
      'indigo',
      'violet',
      'salmon',
      'turquoise',
      'gold',
      'silver',
      'plum',
      'orchid',
      'slateblue',
      'chocolate',
      'firebrick',
      'coral',
      'lavender',
      'peru',
      'powderblue',
      'seagreen',
      'sienna',
      'tomato',
      'dodgerblue',
      'midnightblue',
      'rosybrown',
      'cadetblue',
      'darkcyan',
      'darkmagenta',
      'forestgreen',
      'goldenrod',
      'hotpink',
      'indianred',
      'lawngreen',
      'lightseagreen',
      'mediumorchid',
      'navajowhite',
      'orangered',
      'saddlebrown',
      'springgreen',
      'tan',
      'thistle',
      'wheat',
      'yellowgreen',
      '#FF5733',
  '#3498DB',
  '#2ECC71',
  '#F1C40F',
  '#FFA500',
  '#9B59B6',
  '#FF6B81',
  '#A52A2A',
  '#00FFFF',
  '#FF00FF',
  '#008080',
  '#00FF00',
  '#800000',
  '#000080',
  '#808000',
  '#808080',
  '#000000',
  '#FFFFFF',
  '#4B0082',
  '#EE82EE',
  '#FA8072',
  '#40E0D0',
  '#FFD700',
  '#C0C0C0',
  '#DDA0DD',
  '#B0C4DE',
  '#D2691E',
  '#A0522D',
  '#FF6347',
  '#1E90FF',
  '#191970',
  '#BC8F8F',
  '#008B8B',
  '#8B4513',
  '#FF7F50',
  '#00CED1',
  '#D2B48C',
  '#F5DEB3',
    ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor;
  document.getElementById('thecoloris').innerHTML = 'The color is: ' + randomColor;

}