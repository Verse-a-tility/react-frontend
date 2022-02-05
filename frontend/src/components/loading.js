var waves = new SineWaves({
  el: document.getElementById('waves'),

  speed: 4,

  width: function() {
    return $(window).width();
  },

  height: function() {
    return $(window).height();
  },

  ease: 'SineInOut',

  wavesWidth: '70%',

  waves: [
    {
      timeModifier: 4,
      lineWidth: 1,
      amplitude: -55,
      wavelength: 40
    }
  ],

  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"black");
    gradient.addColorStop(0.5,"black");
    gradient.addColorStop(1,"black");

    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});
